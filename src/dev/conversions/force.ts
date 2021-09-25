import {BestConversions, ConversionFamilyId, ConversionGroup} from '../types/common';

export const id = ConversionFamilyId.Force;

export const best: BestConversions = {metric: ['N'], imperial: ['lbf']};

export const conversions: ConversionGroup = [
	{names: ['newton', 'newtons'], symbols: ['N'], ratio: 1},
	{names: ['dyne', 'dynes'], symbols: ['dyn'], ratio: 1e-5},
	{names: ['kilogram-force'], symbols: ['kgf', 'kilopond', 'kiloponds', 'kp'], ratio: 9.80665},
	{names: ['pound of force', 'pound-force'], symbols: ['lbf'], ratio: 4.448222},
	{names: ['poundal', 'poundals'], symbols: ['pdl'], ratio: 0.138255},
];
