interface BaseConversion {
	ratio: number;
	difference?: number;
}

export interface OnlySymbolConversion extends BaseConversion {
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
	prefix: 'si' | 'volumeSi';
	kind?: 'big';
}

export type PrefixMacro = SiPrefixMacro | BinaryPrefixMacro;

export type ConversionGroup = Array<Conversion | PrefixMacro>;
export type BestConversions = string[];

export interface ConversionFamily {
	conversions: ConversionGroup;
	best: BestConversions;
	id: ConversionFamilyIndex;
}

export const enum ConversionFamilyIndex {
	Angle,
	Data,
	Force,
	Length,
	Mass,
	Pressure,
	Temperature,
	Time,
	Volume
}
