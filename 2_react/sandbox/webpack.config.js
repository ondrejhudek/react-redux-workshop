const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

const rel = (relPath) => path.resolve(__dirname, relPath);

module.exports = {
	mode: 'development',
	plugins: [
		new HtmlWebpackPlugin({
			title: 'React Workshop',
			template: rel('./scripts/template/index.ejs'),
			reactMountId: 'react-root',
			filename: 'index.html'
		}),
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		rules: [{
			test: /\.js$/,
			exclude: /node_modules/,
			use: {
				loader: 'babel-loader',
			}
		}, {
			test: /\.css$/,
			use: [{
				loader: 'style-loader'
			}, {
				loader: 'css-loader'
			}],
		}]
	},
	devtool: 'eval-source-map',
	devServer: {
		hot: true,
		port: 3330,
		historyApiFallback: true
	}
};


