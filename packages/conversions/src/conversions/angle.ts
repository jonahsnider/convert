import type {ReadonlyDeep} from 'type-fest';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

/** @internal */
export const angle: ReadonlyDeep<Family> = {
	id: Id.Angle,
	best: ['deg'],
	conversions: [
		{names: ['radian', 'radians'], symbols: ['rad', 'rads', 'r'], ratio: 1},
		{names: ['turn', 'turns'], ratio: 2 * Math.PI},
		{names: ['degree', 'degrees'], symbols: ['deg', 'degs', '°'], ratio: Math.PI / 180},
		{names: ['gradian', 'gradians'], symbols: ['gon', 'gons', 'grad', 'grads', 'grade', 'grades'], ratio: Math.PI / 200},
	],
} as const;
