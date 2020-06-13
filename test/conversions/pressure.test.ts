import {convertAssert} from '../util';

describe('pressure', () => {
	convertAssert(1, 'torr', 101325 / 760, 'pascals');
	convertAssert(1, 'torr', 1e3, 'millitorr');
	convertAssert(1, 'pascal', 1e-5, 'bar');
	convertAssert(1, 'kilopascal', 1000, 'pascal');
	convertAssert(1, 'atmosphere', 101.325, 'kilopascal');
});
