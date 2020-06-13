import {convertAssert} from '../util';

describe('temperature', () => {
	convertAssert(0, 'celsius', 32, 'fahrenheit', true);
	convertAssert(100, 'celsius', 212, 'fahrenheit', true);

	convertAssert(0, 'celsius', 273.15, 'kelvin');
	convertAssert(100, 'celsius', 373.15, 'kelvin');

	convertAssert(54, 'rankine', 30, 'kelvin');
	convertAssert(5.67, 'rankine', 3.15, 'kelvin');

	convertAssert(555, 'delisle', 3.15, 'kelvin', true);

	convertAssert(BigInt(0), 'kelvin', BigInt(0), 'kelvin');
});
