import { bench, describe } from 'vitest';
import { ms } from './ms';

describe('ms', () => {
	bench('10h', () => {
		ms('10h');
	});
});
