import {convertAssert} from '../util';

describe('temperature', () => {
	convertAssert(0, 'celsius', 'fahrenheit', 32, true);
	convertAssert(0, 'celsius', 'kelvin', 273.15);
	convertAssert(100, 'celsius', 'kelvin', 373.15);
	convertAssert(0, 'rankine', 'kelvin', 0);
	convertAssert(5.67, 'rankine', 'kelvin', 3.15);
	convertAssert(555, 'delisle', 'kelvin', 3.15, true);
	convertAssert(BigInt(0), 'kelvin', 'kelvin', BigInt(0));
});
