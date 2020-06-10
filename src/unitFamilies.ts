import {length} from './conversions/length';
import {time} from './conversions/time';
import {Unit} from './convert';

/** Families of units, like length or time. */
export const unitFamilies: Record<string, Unit> = {time, length};

export const families = Object.values(unitFamilies);
