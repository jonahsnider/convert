import {conversions as conversionsWithoutMacros, conversionsWithMacrosApplied} from '../generated/generated';

export const conversions = __MACROS__ ? conversionsWithoutMacros : conversionsWithMacrosApplied;
