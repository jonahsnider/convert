// Notes about the conversion files:

// Q: Why are there duplicate objects for different aliases (ex. kilogram, kg)
// A: Creating a single object and assigning it to each alias increases filesize, having repeated objects doesn't matter when you're using compression

import {default as data} from './data';
import {default as length} from './length';
import {default as mass} from './mass';
import {default as pressure} from './pressure';
import {default as temperature} from './temperature';
import {default as time} from './time';
import {default as volume} from './volume';

export const allUnits = {...data, ...length, ...mass, ...pressure, ...temperature, ...time, ...volume} as const;
