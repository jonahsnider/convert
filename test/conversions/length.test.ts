import {convertAssert} from '../util';

describe('length', () => {
	convertAssert(1, 'meter', 1e3, 'millimeter', true);
	convertAssert(1, 'mile', 5280, 'feet', true);
	convertAssert(1, 'yard', 3, 'feet', true);
	convertAssert(1, 'foot', 12, 'inches', true);
	convertAssert(1, 'nautical mile', 1852, 'meters', true);
});
