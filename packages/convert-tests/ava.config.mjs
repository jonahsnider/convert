const config = {
	extensions: {
		ts: 'module',
	},
	files: ['test/**/*.test.ts'],
	nodeArguments: ['--loader=ts-node/esm'],
	timeout: '25s',
};

export default config;
