import {convert} from '../src/convert';

// @ts-expect-error
convert(1).from('seconds').to('meter');
