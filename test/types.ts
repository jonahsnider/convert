import {convert} from '../src/convert';

// prettier-disable
// @ts-expect-error
convert(1)
	.from('seconds')
	.to('meter');
