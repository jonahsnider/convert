/**
 * Conversions for length.
 * @private
 */
export const length = [
	{aliases: ['meter', 'meters', 'metre', 'm'], ratio: 1},
	{aliases: ['petameter', 'petameters', 'Pm'], ratio: 1e15},
	{aliases: ['terameter', 'terameters', 'Tm'], ratio: 1e12},
	{aliases: ['gigameter', 'gigameters', 'Gm'], ratio: 1e9},
	{aliases: ['megameter', 'megameters', 'Mm'], ratio: 1e6},
	{aliases: ['kilometer', 'kilometers', 'km'], ratio: 1e3},
	{aliases: ['hectometer', 'hectometers', 'hm'], ratio: 1e2},
	{aliases: ['decameter', 'decameters', 'dam'], ratio: 1e1},
	{aliases: ['decimeter', 'decimeters', 'dm'], ratio: 1e-1},
	{aliases: ['centimeter', 'centimeters', 'cm'], ratio: 1e-2},
	{aliases: ['millimeter', 'millimeters', 'mm'], ratio: 1e-3},
	{aliases: ['micrometer', 'micrometers', 'μm'], ratio: 0.1e-6},
	{aliases: ['nanometer', 'nanometers', 'nm'], ratio: 1e-9},
	{aliases: ['picometer', 'picometers', 'pm'], ratio: 1e-12},
	{aliases: ['femtometer', 'femtometers', 'fm'], ratio: 1e-15},
	{aliases: ['foot', 'feet', 'ft'], ratio: 0.3048},
	{aliases: ['inch', 'inches', 'in'], ratio: 0.0254},
	{aliases: ['yard', 'yards', 'yd'], ratio: 0.9144},
	{aliases: ['mile', 'miles', 'mi'], ratio: 1609.344},
	{aliases: ['nautical mile', 'nautical miles', 'M', 'NM', 'nmi'], ratio: 1852}
] as const;
