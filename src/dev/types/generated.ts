export type Best = Array<[value: number, symbol: string]>;

export const enum BestIndex {
	Value,
	Symbol
}

export type Conversion = [family: number, ratio: number, difference: number];

export const enum ConversionIndex {
	Family,
	Ratio,
	Difference
}

export type Conversions = Record<string, Conversion>;
