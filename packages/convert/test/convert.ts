/* eslint-disable @typescript-eslint/no-var-requires, @typescript-eslint/no-require-imports */

import type * as Mod from '../src/index';

export const NAME_PROPERTY = '__build_name';
type TestMod = typeof Mod & {[NAME_PROPERTY]: 'dev' | 'prod'};

export const prod = require('../dist/convert.prod') as TestMod;

prod[NAME_PROPERTY] = 'prod';

export const dev = require('../dist/convert.dev') as TestMod;

dev[NAME_PROPERTY] = 'dev';
