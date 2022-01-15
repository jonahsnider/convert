import {assertConversions} from '../../test/assert-conversion';

describe('conversions', () => {
	assertConversions([
		{from: [1, 'US dry barrel'], to: [115.6, 'L']},
		{from: [1, 'US peck'], to: [8.809_767_541_72, 'L']},
		{from: [1, 'US dry gallon'], to: [4.404_883_770_86, 'L']},
		{from: [1, 'US dry quart'], to: [1.101_220_942_715, 'L']},
		{from: [1, 'US dry pint'], to: [550.610_471_357_5, 'mL']},
		{from: [1, 'US dry pint'], to: [0.125, 'US dry gallon']},
	]);
});
