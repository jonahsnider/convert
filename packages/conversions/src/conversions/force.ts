import type {ReadonlyDeep} from 'type-fest';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

/** @internal */
export const force: ReadonlyDeep<Family> = {
	id: Id.Force,
	best: {metric: ['N'], imperial: ['lbf']},
	conversions: [
		{names: ['newton', 'newtons'], symbols: ['N'], ratio: 1},
		{names: ['dyne', 'dynes'], symbols: ['dyn'], ratio: 1e-5},
		{names: ['kilogram-force'], symbols: ['kgf', 'kilopond', 'kiloponds', 'kp'], ratio: 9.806_65},
		{names: ['pound of force', 'pound-force'], symbols: ['lbf'], ratio: 4.448_222},
		{names: ['poundal', 'poundals'], symbols: ['pdl'], ratio: 0.138_255},
	],
};
