import type BigNumber from 'bignumber.js';
import * as Best from './best.js';

export enum KelvinNames {
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
export enum Id {
	Angle,
	Area,
	Data,
	Energy,
	Force,
	Length,
	Mass,
	Power,
	Pressure,
	Temperature,
	Time,
	Volume,
}

export type Numeric = number | BigNumber;

type BaseConversion = {
	ratio: Numeric;
	difference?: Numeric | undefined;
};

type OnlySymbolConversion = {
	names?: undefined;
	symbols: string[];
} & BaseConversion;

type NamedConversion = {
	names: string[];
	symbols?: string[] | undefined;
} & BaseConversion;

export type Conversion = OnlySymbolConversion | NamedConversion;

export type Family = {
	id: Id;

	best: string[] | Record<Best.Kind, string[]>;

	conversions: Conversion[];
};

export {Best};
