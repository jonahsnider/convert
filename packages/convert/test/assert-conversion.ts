import {testWithBuilds} from './with-builds';

type ConversionTuple = [quantity: number | bigint, unit: string];
type ConversionTest = {
	from: ConversionTuple;
	to: ConversionTuple;
};

export function assertConversions(conversions: ReadonlyArray<Readonly<ConversionTest>>): void {
	describe.each(conversions)('$from.0$from.1 -> $to.0$to.1', ({from, to}) => {
		testWithBuilds(mod => {
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
			expect(mod.convert(from[0], from[1] as any).to(to[1] as any)).toBe(to[0]);
		});
	});
}
