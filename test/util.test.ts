import {prefixer} from '../src/util';

describe('util', () => {
	it('generates SI prefixes for units', () =>
		expect(prefixer({full: 'full', symbol: '&'})).toEqual([
			{aliases: ['petafull', 'petafulls', 'P&'], ratio: 1e15},
			{aliases: ['terafull', 'terafulls', 'T&'], ratio: 1e12},
			{aliases: ['gigafull', 'gigafulls', 'G&'], ratio: 1e9},
			{aliases: ['megafull', 'megafulls', 'M&'], ratio: 1e6},
			{aliases: ['kilofull', 'kilofulls', 'k&'], ratio: 1e3},
			{aliases: ['hectofull', 'hectofulls', 'h&'], ratio: 1e2},
			{aliases: ['decafull', 'decafulls', 'da&'], ratio: 1e1},
			{aliases: ['decifull', 'decifulls', 'd&'], ratio: 1e-1},
			{aliases: ['centifull', 'centifulls', 'c&'], ratio: 1e-2},
			{aliases: ['millifull', 'millifulls', 'm&'], ratio: 1e-3},
			{aliases: ['microfull', 'microfulls', 'μ&'], ratio: 1e-6},
			{aliases: ['nanofull', 'nanofulls', 'n&'], ratio: 1e-9},
			{aliases: ['picofull', 'picofulls', 'p&'], ratio: 1e-12},
			{aliases: ['femtofull', 'femtofulls', 'f&'], ratio: 1e-15}
		]));
});
