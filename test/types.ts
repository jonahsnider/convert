import {convert} from '../src/convert';

// @ts-expect-error
convert(1, 'seconds').to('meter');
