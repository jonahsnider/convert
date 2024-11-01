import { bench, describe } from 'vitest';
import { ms } from './ms';

describe('ms', () => {
	bench('parse 10h to ms', () => {
		ms('10h');
	});

	bench('parse 10h in ms to string', () => {
		ms(36_000_000);
	});
});
