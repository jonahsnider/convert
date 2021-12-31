const config = {
	extensions: {
		ts: 'module',
	},
	files: ['test/**/*.test.ts'],
	nodeArguments: ['--loader=ts-node/esm'],
};

export default config;
