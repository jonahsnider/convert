module.exports = {
	rollup(config, options) {
		// This function will run for each entry/format/env combination
		if (config.output.file.includes('convert.cjs.development.js') || config.output.file.includes('convert.cjs.production.min.js')) {
			if (options.environment === 'development') {
				// Redirect dev build to nowhere
				config.output.file = '/dev/null';
			} else {
				// Rename production build to index.js
				config.output.file = './dist/index.js';
			}
		}

		return config;
	}
};
