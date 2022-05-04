import path from 'path';
import { fileURLToPath } from 'url';

// gets abosolute path of the folder.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
	devtool: "eval-cheap-source-map",
	mode: 'development',
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname + '/dist'),
		filename: 'bundle.js'
	},
	watch: true,
};