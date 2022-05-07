import path from 'path';
import { fileURLToPath } from 'url';

// gets abosolute path of the folder.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	devtool: 'eval-cheap-source-map',
	mode: 'development',
	entry: ['regenerator-runtime/runtime.js', './src/index.js'],
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js$/i,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, 'src'),
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.css$/i,
				exclude: /(node_modules)/,
				include: path.resolve(__dirname, 'src'),
				use: ['style-loader', 'css-loader', 'postcss-loader'],
			},
		],
	},
	watch: true
};