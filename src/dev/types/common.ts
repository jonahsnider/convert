interface BaseConversion {
	ratio: number;
	difference?: number;
}

export interface OnlySymbolConversion extends BaseConversion {
	names?: undefined;
	symbols: string[];
}

export interface NamedConversion extends BaseConversion {
	names: string[];
	symbols?: string[];
}

export type Conversion = OnlySymbolConversion | NamedConversion;

interface BasePrefixMacro {
	names: string[];
	symbols: string[];
	ratio: number;
}

interface BinaryPrefixMacro extends BasePrefixMacro {
	prefix: 'binary';
}

interface SiPrefixMacro extends BasePrefixMacro {
	prefix: 'si' | 'volumeSi' | 'areaSi';
	kind?: 'big';
}

export type PrefixMacro = SiPrefixMacro | BinaryPrefixMacro;

export type ConversionGroup = Array<Conversion>;
export type BestConversions = string[];

export interface ConversionFamily {
	conversions: ConversionGroup;
	best: BestConversions;
	id: ConversionFamilyId;
}

export const enum ConversionFamilyId {
	Angle,
	Area,
	Data,
	Force,
	Length,
	Mass,
	Pressure,
	Temperature,
	Time,
	Volume
}

export type UnitToFamily = Record<string, ConversionFamilyId | null>;
