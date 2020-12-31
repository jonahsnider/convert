import {convertAssert} from '../util';

describe('angle', () => {
	convertAssert(360, 'degrees', Math.PI * 2, 'radians');
	convertAssert(1, 'gradian', 1 / 400, 'turns');
});
