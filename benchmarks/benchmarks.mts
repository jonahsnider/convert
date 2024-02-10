import * as published from 'convert';
import { Bench } from 'tinybench';
import type * as Mod from '../dist';

// @ts-expect-error
import * as modRaw from '../index.mjs';
const mod = modRaw as typeof Mod;

const bytesToBest = new Bench({ time: 10e3 })
	.add('local', () => mod.convert(8192, 'bytes').to('best').toString())
	.add('published', () => published.convert(8192, 'bytes').to('best').toString());

await bytesToBest.warmup();
await bytesToBest.run();

console.log('Convert 8192 bytes to best:');
console.table(bytesToBest.table());

const hoursToMinutes = new Bench({ time: 1000 })
	.add('noop', () => {})
	.add('published', () => published.convert(24, 'hours').to('minutes'))
	.add('local', () => mod.convert(24, 'hours').to('minutes'))
	.add('local2', () => mod.convert(24, 'hours').to('minutes'))
	.add('published2', () => published.convert(24, 'hours').to('minutes'));

await hoursToMinutes.warmup();
await hoursToMinutes.run();

console.log('Convert 24 hours to minutes:');
console.table(hoursToMinutes.table());
