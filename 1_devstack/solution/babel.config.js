module.exports = {
	presets: [
		[
			'@babel/preset-env',
			{
				modules: false,
				targets: {
					browsers: [
						'>1%'
					]
				}
			}
		],
		[
			'@babel/preset-react'
		]
	],
	plugins: [
		'@babel/plugin-proposal-class-properties',
		'@babel/plugin-proposal-export-default-from',
		'@babel/plugin-proposal-export-namespace-from',
		'@babel/plugin-proposal-object-rest-spread',
		'@babel/plugin-proposal-optional-chaining'
	],
	env: {
		development: {
			plugins: [
				'react-hot-loader/babel'
			]
		},
		test: {
			presets: [
				'@babel/preset-env'
			]
		}
	}
};