import {describe} from 'vitest';
import {assertConversions} from '../../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{from: [1, 'US dry barrel'], to: [115.6, 'L']},
		{from: [1, 'US peck'], to: [8.809_767_541_72, 'L']},
		{from: [1, 'US dry gallon'], to: [4.404_883_770_86, 'L']},
		{from: [1, 'US dry quart'], to: [1.101_220_942_715, 'L']},
		{from: [1, 'US dry pint'], to: [550.610_471_357_5, 'mL']},
		{from: [1, 'US dry pint'], to: [0.125, 'US dry gallon']},

		{from: [2.3, 'cm3'], to: [0.000_002_299_999_999_999_999_6, 'm3']},
		{from: [2, 'dm3'], to: [0.002, 'm3']},
		{from: [1, 'gallon'], to: [0.003_785_411_784, 'm3']},
		{from: [1, 'quart'], to: [946.352_946_000_000_1, 'cm3']},
		{from: [1, 'Pm3'], to: [1e45, 'm3']},

		{from: [1, 'ft3'], to: [0.028_316_846_592, 'm3']},

		{from: [1, 'US legal cup'], to: [240 + 0.000_000_000_000_03, 'mL']},
	]);
});
