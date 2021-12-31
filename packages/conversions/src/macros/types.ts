import type {Numeric} from '../index.js';

export interface UnitGroup {
	prefix: string;
	symbol: string;
	value: Numeric;
	kind: 'big' | 'small';
}

export type Macro = UnitGroup[];
