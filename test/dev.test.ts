import {prefixer} from '../src/dev';

describe('dev', () => {
	it('generates SI prefixes for units', () =>
		expect(prefixer({full: 'FULL', symbol: '&'})).toEqual([
			{aliases: ['femtoFULL', 'femtoFULLs', 'f&'], ratio: 1e-15},
			{aliases: ['picoFULL', 'picoFULLs', 'p&'], ratio: 1e-12},
			{aliases: ['nanoFULL', 'nanoFULLs', 'n&'], ratio: 1e-9},
			{aliases: ['microFULL', 'microFULLs', 'μ&'], ratio: 1e-6},
			{aliases: ['milliFULL', 'milliFULLs', 'm&'], ratio: 1e-3},
			{aliases: ['centiFULL', 'centiFULLs', 'c&'], ratio: 1e-2},
			{aliases: ['deciFULL', 'deciFULLs', 'd&'], ratio: 1e-1},
			{aliases: ['decaFULL', 'decaFULLs', 'da&'], ratio: 1e1},
			{aliases: ['hectoFULL', 'hectoFULLs', 'h&'], ratio: 1e2},
			{aliases: ['kiloFULL', 'kiloFULLs', 'k&'], ratio: 1e3},
			{aliases: ['megaFULL', 'megaFULLs', 'M&'], ratio: 1e6},
			{aliases: ['gigaFULL', 'gigaFULLs', 'G&'], ratio: 1e9},
			{aliases: ['teraFULL', 'teraFULLs', 'T&'], ratio: 1e12},
			{aliases: ['petaFULL', 'petaFULLs', 'P&'], ratio: 1e15}
		]));
});
