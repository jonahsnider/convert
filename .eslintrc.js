module.export = {
	plugins: ['tree-shaking'],
	rules: {
		'tree-shaking/no-side-effects-in-initialization': 'error',
		'prettier/prettier': 'off'
	}
};
