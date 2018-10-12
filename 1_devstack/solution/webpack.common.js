const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
	plugins: [
		new CleanWebpackPlugin(['dist']),
		new HtmlWebpackPlugin({
			title: 'React Workshop',
			template: path.resolve(__dirname, './scripts/template/index.ejs'),
			reactMountId: 'react-root',
			filename: 'index.html'
		}),
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		}, {
			test: /\.(css)$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}],
		}, {
			test: /\.(png|jpg|gif|woff2|woff)$/,
			use: [
				{
					loader: 'url-loader',
					options: {
						limit: 8192
					}
				}
			]
		}]
	}
};