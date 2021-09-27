import type {BestConversions, ConversionGroup} from '../types/common.js';
import {ConversionFamilyId} from '../types/common.js';

export const id = ConversionFamilyId.Angle;

export const best: BestConversions = ['deg'];

export const conversions: ConversionGroup = [
	{names: ['radian', 'radians'], symbols: ['rad', 'rads', 'r'], ratio: 1},
	{names: ['turn', 'turns'], ratio: 2 * Math.PI},
	{names: ['degree', 'degrees'], symbols: ['deg', 'degs', '°'], ratio: Math.PI / 180},
	{names: ['gradian', 'gradians'], symbols: ['gon', 'gons', 'grad', 'grads', 'grade', 'grades'], ratio: Math.PI / 200},
];
