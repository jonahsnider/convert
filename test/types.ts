import {convert} from '../src/convert';
import {ratioer, strings} from '../src/util';

// @ts-expect-error
convert(1).from('seconds').to('meter');

const obj: {[strings.ratio]: number; [strings.difference]: number} = ratioer(1, 2);
