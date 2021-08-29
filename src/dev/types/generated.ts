/** Indexed by `ConversionFamilyId`. */
export type Best = Array<Array<[value: number, sym: string]>>;
export const enum BestIndex {
	Value,
	Sym
}

export type Conversion = [family: number, ratio: number, difference: number];
export const enum ConversionIndex {
	Family,
	Ratio,
	Difference
}

export type ConversionFamily = Record<string, Conversion>;
/** Indexed by `ConversionFamilyId`. */
export type AllFamilies = ConversionFamily[];

export type UnitToFamily = Record<string, ConversionFamily | null>;
