import type Decimal from 'decimal.js';
import * as Best from './best.js';

/** @internal */
export const enum KelvinNames {
	/* eslint-disable @typescript-eslint/naming-convention */
	kelvin = 'kelvin',
	kelvins = 'kelvins',
	K = 'K',
	/* eslint-enable @typescript-eslint/naming-convention */
}

/**
 * IDs for conversion families.
 * @public
 */
export const enum Id {
	Angle,
	Area,
	Data,
	Force,
	Length,
	Mass,
	Pressure,
	Temperature,
	Time,
	Volume,
}

/** @internal */
export type Numeric = number | Decimal;

/** @internal */
interface BaseConversion {
	ratio: Numeric;
	difference?: Numeric | undefined;
}

/** @internal */
interface OnlySymbolConversion extends BaseConversion {
	names?: undefined;
	symbols: string[];
}

/** @internal */
interface NamedConversion extends BaseConversion {
	names: string[];
	symbols?: string[] | undefined;
}

/** @internal */
export type Conversion = OnlySymbolConversion | NamedConversion;

/** @internal */
export interface Family {
	id: Id;

	best: string[] | Record<Best.Kind, string[]>;

	conversions: Conversion[];
}

export {Best};
