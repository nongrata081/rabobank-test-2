
exports.config = {
	baseUrl: 'http://0.0.0.0:3333',

	specs: [
		'./src/components/**/test/e2e/*.feature',
	],

	capabilities: [{
    maxInstances: 5,
		browserName: 'chrome',
	}],
  waitforTimeout: 5000,

	framework: 'cucumber',
	logLevel: 'error',
	reporters: ['spec'],
	services: ['selenium-standalone'],

	cucumberOpts: {
    failFast: true,
		require: [
			`${ process.cwd() }/src/components/shared/e2e.steps.js`,
			`${ process.cwd() }/src/components/**/test/e2e/*.steps.js`,
		],
		snippets: true,
		source: true,
    timeout: 20000
	},
  before: function before() {
    browser.url(`/`);
    /**
     * Setup the Chai assertion framework
     */
    // const chai = require('chai');

    // global.expect = chai.expect;
    // global.assert = chai.assert;
    // global.should = chai.should();
  },
};
