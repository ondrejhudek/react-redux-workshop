module.exports = {
	env: {
		browser: true,
		commonjs: true,
		es6: true,
		'jest/globals': true
	},
	extends: ['eslint:recommended', 'plugin:react/recommended'],
	parser: 'babel-eslint',
	parserOptions: {
		ecmaFeatures: {
			experimentalObjectRestSpread: true,
			jsx: true
		},
		sourceType: 'module'
	},
	plugins: [
		'react',
		'jest'
	],
	rules: {
		indent: [
			'error',
			'tab',
			{ 'SwitchCase': 1 }
		],
		quotes: [
			'error',
			'single',
			{ 'avoidEscape': true }
		],
		semi: [
			'error',
			'always'
		],
		'no-mixed-spaces-and-tabs': [
			'error',
			'smart-tabs'
		]
	}
};