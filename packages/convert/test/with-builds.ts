import {dev, NAME_PROPERTY, prod} from './convert';

type Build = typeof dev;
export const builds: readonly [dev: Build, prod: Build] = [dev, prod] as const;

export function describeWithBuilds(fn: (mod: Build) => void): void {
	describe.each(builds)(`$${NAME_PROPERTY}`, fn);
}

export function testWithBuilds(fn: (mod: Build) => void): void {
	test.each(builds)(`$${NAME_PROPERTY}`, fn);
}
