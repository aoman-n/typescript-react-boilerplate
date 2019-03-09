const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = {
	mode: 'development',
	entry: './src/index.tsx',
	output: {
		filename: 'static/js/bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	devtool: 'inline-source-map',
	devServer: {
		contentBase: path.join(__dirname, '/dist'),
		historyApiFallback: true,
		port: 3000
	},
	module: {
		rules: [
			{
				test: /\.*(ts|tsx)$/,
				exclude: /node_modules/,
				use: [
					{
						loader: 'thread-loader',
						options: {
							workers: require('os').cpus().length - 1,
							poolTimeout: Infinity
						}
					},
					{
						loader: 'ts-loader',
						options: {
							configFile: 'tsconfig.dev.json',
							happyPackMode: true
						}
					}
				]
			}
		]
	},
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
			filename: 'index.html'
		}),
		new ForkTsCheckerWebpackPlugin({
			tsconfig: 'tsconfig.dev.json',
			checkSyntacticErrors: true
		})
	]
};
