import { describe, test } from 'vitest';
import { ms } from './ms.ts';

describe('ms', () => {
	test('parse 10h to ms', async ({ bench }) => {
		await bench('parse 10h to ms', () => {
			ms('10h');
		}).run();
	});

	test('parse 10h in ms to string', async ({ bench }) => {
		await bench('parse 10h in ms to string', () => {
			ms(36_000_000);
		}).run();
	});
});
