import type {ReadonlyDeep} from 'type-fest';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

export const force: ReadonlyDeep<Family> = {
	id: Id.Force,
	best: {metric: ['N'], imperial: ['lbf']},
	conversions: [
		{names: ['newton', 'newtons'], symbols: ['N'], ratio: 1},
		{names: ['kilonewton', 'kilonewtons'], symbols: ['kN'], ratio: 1_000},
		{names: ['meganewton', 'meganewton'], symbols: ['MN'], ratio: 1_000_000},
		{names: ['dyne', 'dynes'], symbols: ['dyn'], ratio: 1e-5},
		{names: ['kilogram-force'], symbols: ['kgf'], ratio: 9.806_65},
		{names: ['ton-force'], symbols: ['tf', 'tonf'], ratio: 9806.65},
		{names: ['kilopound-force'], symbols: ['kipf'], ratio: 4_448.221_615_255},
		{names: ['megapound-force'], symbols: ['Mlbf'], ratio: 4_448_221.615_255},
		{names: ['kilopond'], symbols: ['kilopond', 'kiloponds', 'kp'], ratio: 9.806_65},
		{names: ['dyne', 'dynes'], symbols: ['dyn'], ratio: 1e-5},
		{names: ['kilogram-force'], symbols: ['kgf', 'kilopond', 'kiloponds', 'kp'], ratio: 9.806_65},
		{names: ['pound of force', 'pound-force'], symbols: ['lbf'], ratio: 4.448_222},
		{names: ['poundal', 'poundals'], symbols: ['pdl'], ratio: 0.138_255},
	],
};
