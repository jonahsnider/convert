import { describe, test } from 'vitest';
import { convert } from './convert.ts';

describe('convert to best', () => {
	test('convert 8192 bytes to best', async ({ bench }) => {
		await bench('convert 8192 bytes to best', () => {
			convert(8192, 'bytes').to('best');
		}).run();
	});
});

describe('convert units', () => {
	test('convert 24 hours to minutes', async ({ bench }) => {
		await bench('convert 24 hours to minutes', () => {
			convert(24, 'hours').to('minutes');
		}).run();
	});
	test('convert 4 inches to millimeters', async ({ bench }) => {
		await bench('convert 4 inches to millimeters', () => {
			convert(4, 'inches').to('millimeters');
		}).run();
	});
	test('convert 2.5 liters to in3', async ({ bench }) => {
		await bench('convert 2.5 liters to in3', () => {
			convert(2.5, 'liters').to('in3');
		}).run();
	});
});
