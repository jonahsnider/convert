import { BestConversionKind } from "./common";

export type Best = Record<BestConversionKind, Array<Array<[value: number, sym: string]>>>;

export const enum BestIndex {
	Value,
	Sym
}

export type Conversion = [family: number, ratio: number];

export const enum ConversionIndex {
	Family,
	Ratio
}

export type Conversions = Record<string, Conversion>;

/** Values to use as offsets for converting temperatures to kelvin. */
export type TemperatureDifferences = Record<string, number>;
