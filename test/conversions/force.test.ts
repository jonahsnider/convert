import {convertAssert} from '../util';

describe('force', () => {
	convertAssert(1, 'newton', 1e5, 'dyn', true);
	convertAssert(1, 'kp', 9.80665, 'newton');
	convertAssert(1, 'lbf', 444822.2, 'dyn');
	convertAssert(1, 'poundal', 0.1382550, 'newton');
});
