import {convert} from '../src';

convert(1)
	// @ts-expect-error
	.from('seconds')
	.to('meter');
