import BigNumber from 'bignumber.js';

export type UnitGroup = {
	prefix: string;
	symbol: string | string[];
	value: number | BigNumber;
	kind: 'big' | 'small';
};

export type Macro = UnitGroup[];
