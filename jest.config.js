
module.exports = {
	globals: {
		"ts-jest": {
			tsConfig: {
				"allowJs": true,
			}
		}
	},
	moduleFileExtensions: [
		'js',
		'ts',
		'tsx',
	],
	modulePathIgnorePatterns: [
		'<rootDir>/.stencil',
		'<rootDir>/www',
	],
	testMatch: [
		'<rootDir>/src/components/**/test/unit/*.unit.ts?(x)',
	],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
	],
	transform: {
		'^.+\.[j|t]sx?$': 'ts-jest',
	},
};
