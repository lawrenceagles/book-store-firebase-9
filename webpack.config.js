import path from 'path';
import { fileURLToPath } from 'url';
// import HtmlWebpackPlugin from 'html-webpack-plugin';

// gets abosolute path of the folder.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'bundle.js'
	},
	watch: true,
	// plugins: [new HtmlWebpackPlugin()]
};