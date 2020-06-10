/**
 * @file Jest config to be merged with the TSDX config
 * @see https://github.com/jaredpalmer/tsdx#jest
 */

module.exports = {
	globals: {
		/**
		 * @see https://github.com/jaredpalmer/tsdx#__dev__
		 */
		__DEV__: true
	}
};
