import { bench, describe } from 'vitest';
import { convert } from './convert';

describe('convert to best', () => {
	bench('8192 bytes', () => {
		convert(8192, 'bytes').to('best');
	});
});

describe('convert units', () => {
	bench('24 hours to minutes', () => {
		convert(24, 'hours').to('minutes');
	});
	bench('4 inches to millimeters', () => {
		convert(4, 'inches').to('millimeters');
	});
	bench('2.5 liters to in3', () => {
		convert(2.5, 'liters').to('in3');
	});
});
