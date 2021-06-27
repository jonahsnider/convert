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

export type UnitGroup = [prefix: string, symbol: string, value: number];

export const enum UnitGroupIndex {
	Prefix,
	Symbol,
	Value
}

export const enum PrefixMacroOptions {
	Si,
	Binary,
	BigSi
}

// The same indexes as PrefixMacroOptions
export type PrefixMacros = [si: UnitGroup[], binary: UnitGroup[], bigSi: UnitGroup[], volumeSi: UnitGroup[]];

export type PrefixMacro = [names: string[], symbols: string[], ratio: number, options: PrefixMacroOptions];

export const enum PrefixMacroIndex {
	Names,
	Symbols,
	Scale,
	Options
}
