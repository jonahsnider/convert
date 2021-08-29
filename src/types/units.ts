import {ConversionFamilyId} from '../dev/types/common';
import {allFamilies} from '../generated/generated';

type AllFamilies = typeof allFamilies;

type AngleFamily = AllFamilies[ConversionFamilyId.Angle];
type AreaFamily = AllFamilies[ConversionFamilyId.Area];
type DataFamily = AllFamilies[ConversionFamilyId.Data];
type ForceFamily = AllFamilies[ConversionFamilyId.Force];
type LengthFamily = AllFamilies[ConversionFamilyId.Length];
type MassFamily = AllFamilies[ConversionFamilyId.Mass];
type PressureFamily = AllFamilies[ConversionFamilyId.Pressure];
type TemperatureFamily = AllFamilies[ConversionFamilyId.Temperature];
type TimeFamily = AllFamilies[ConversionFamilyId.Time];
type VolumeFamily = AllFamilies[ConversionFamilyId.Volume];

export type Angle = keyof AngleFamily;
export type Area = keyof AreaFamily;
export type Data = keyof DataFamily;
export type Force = keyof ForceFamily;
export type Length = keyof LengthFamily;
export type Mass = keyof MassFamily;
export type Pressure = keyof PressureFamily;
export type Temperature = keyof TemperatureFamily;
export type Time = keyof TimeFamily;
export type Volume = keyof VolumeFamily;

type AnyFamily = AngleFamily &
	AreaFamily &
	DataFamily &
	ForceFamily &
	LengthFamily &
	MassFamily &
	PressureFamily &
	TemperatureFamily &
	TimeFamily &
	VolumeFamily;

export type Unit = keyof AnyFamily;
