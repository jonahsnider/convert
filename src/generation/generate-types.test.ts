import assert from 'node:assert/strict';
import { resolve } from 'node:path';
import ts from 'typescript';
import { expect, test } from 'vitest';
import { conversions } from '../conversions/conversions.ts';
import { expandUnits } from '../conversions/macros/expand.ts';
import { MeasureKind } from '../types/public.ts';
import { generateTypes } from './generate-types.ts';

const filename = resolve('src/generated/types.ts');
const source = ts.createSourceFile(filename, generateTypes(conversions), ts.ScriptTarget.ES2020, true);
const options: ts.CompilerOptions = { noEmit: true, strict: true, skipLibCheck: true, types: [] };
const host = ts.createCompilerHost(options);
const getSourceFile = host.getSourceFile.bind(host);
host.getSourceFile = (name, ...args) => (name === filename ? source : getSourceFile(name, ...args));
const program = ts.createProgram([filename], options, host);
const checker = program.getTypeChecker();
const declaration = source.statements.find(
	(statement) => ts.isTypeAliasDeclaration(statement) && statement.name.text === 'UnitsByMeasure',
);
assert(declaration);
const unitsByMeasure = checker.getTypeAtLocation(declaration);

test('generated unit types compile', () => {
	expect(ts.getPreEmitDiagnostics(program)).toEqual([]);
});

test.each([...conversions.values()].map((measure) => ({ name: MeasureKind[measure.kind], measure })))(
	'$name types accept exactly the runtime units',
	({ measure }) => {
		const property = unitsByMeasure.getProperty(String(measure.kind));
		assert(property);
		const type = checker.getTypeOfSymbolAtLocation(property, declaration);
		const members = type.isUnion() ? type.types : [type];
		const names = members.map((member) => {
			assert(member.isStringLiteral());
			return member.value;
		});
		const expected = expandUnits(measure.units).flatMap((unit) => unit.names.concat(unit.symbols ?? []));

		expect(new Set(names)).toEqual(new Set(expected));
	},
);
