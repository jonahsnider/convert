import {siPrefix} from '../src/util';

describe('util', () => {
	it('generates SI prefixes for units', () =>
		expect(siPrefix({full: 'full', symbol: '&'})).toEqual([
			{aliases: ['petafull', 'P&'], ratio: 1e15},
			{aliases: ['terafull', 'T&'], ratio: 1e12},
			{aliases: ['gigafull', 'G&'], ratio: 1e9},
			{aliases: ['megafull', 'M&'], ratio: 1e6},
			{aliases: ['kilofull', 'k&'], ratio: 1e3},
			{aliases: ['hectofull', 'h&'], ratio: 1e2},
			{aliases: ['decafull', 'da&'], ratio: 1e1},
			{aliases: ['decifull', 'd&'], ratio: 1e-1},
			{aliases: ['centifull', 'c&'], ratio: 1e-2},
			{aliases: ['millifull', 'm&'], ratio: 1e-3},
			{aliases: ['microfull', 'μ&'], ratio: 1e-6},
			{aliases: ['nanofull', 'n&'], ratio: 1e-9},
			{aliases: ['picofull', 'p&'], ratio: 1e-12},
			{aliases: ['femtofull', 'f&'], ratio: 1e-15}
		]));
});
