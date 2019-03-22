
exports.config = {
	baseUrl: 'http://0.0.0.0:3333',

	specs: [
		'./src/components/**/test/e2e/*.feature',
	],

	capabilities: [{
		browserName: 'chrome',
	}],

	framework: 'cucumber',
	logLevel: 'error',
	reporters: ['spec'],
	services: ['selenium-standalone'],

	cucumberOpts: {
		require: [
			`${ process.cwd() }/src/components/shared/e2e.steps.js`,
			`${ process.cwd() }/src/components/**/test/e2e/*.steps.js`,
		],
		snippets: true,
		source: true,
	},
};
