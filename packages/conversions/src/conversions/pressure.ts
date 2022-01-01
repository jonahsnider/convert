import BigNumber from 'bignumber.js';
import type {ReadonlyDeep} from 'type-fest';
import {expandMacro, Macros} from '../macros/index.js';
import type {Family} from '../types/index.js';
import {Id} from '../types/index.js';

export const pressure: ReadonlyDeep<Family> = {
	id: Id.Pressure,
	best: ['Pa'],
	conversions: [
		{names: ['pascal', 'pascals'], symbols: ['Pa'], ratio: 1},
		...expandMacro(Macros.si, {names: ['pascal', 'pascals'], symbols: ['Pa'], ratio: 1}),

		{names: ['bar', 'bars'], symbols: ['bar'], ratio: 1e5},
		...expandMacro(Macros.si, {names: ['bar', 'bars'], symbols: ['bar'], ratio: 1e5}),

		{names: ['torr', 'torrs'], symbols: ['Torr'], ratio: new BigNumber(101_325).div(760)},
		{names: ['millitorr'], symbols: ['mTorr'], ratio: new BigNumber(101_325).div(760).div(1e3)},

		{names: ['atmosphere', 'atmospheres'], symbols: ['atm'], ratio: 101_325},
	],
};
