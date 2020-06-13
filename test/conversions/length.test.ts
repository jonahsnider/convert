import {convertAssert} from '../util';

describe('length', () => {
	convertAssert(1, 'meter', 'millimeter', 1e3, true);
	convertAssert(1, 'mile', 'feet', 5280, true);
	convertAssert(1, 'yard', 'feet', 3, true);
	convertAssert(1, 'foot', 'inches', 12, true);
	convertAssert(1, 'nautical mile', 'meters', 1852, true);
});
