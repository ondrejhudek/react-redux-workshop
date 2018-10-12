const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CircularDependencyPlugin = require('circular-dependency-plugin');

module.exports = merge(common, {
	mode: 'development',
	plugins: [
		new CircularDependencyPlugin({
			exclude: /node_modules/,
			failOnError: true
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	devServer: {
		compress: true,
		port: 3330,
		hot: true,
		historyApiFallback: true
	},
	devtool: 'eval-source-map'
});