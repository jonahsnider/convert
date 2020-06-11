import {Unit} from '../types/common';
import {data} from './conversions/data';
import {length} from './conversions/length';
import {time} from './conversions/time';

/** Families of units, like length or time. */
export const unitFamilies: Record<string, Unit> = {time, length, data};

export const families = Object.values(unitFamilies);
