import {convert} from '../src/convert';

// prettier-ignore
// @ts-expect-error
convert(1).from('seconds').to('meter');
