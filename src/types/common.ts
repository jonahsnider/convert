import {unitFamilies} from '../util';

export interface ConverterBody<T, Q> {
	to(to: T): Q;
}

export type Unit = [family: typeof unitFamilies[keyof typeof unitFamilies], ratio: number, difference: number];
