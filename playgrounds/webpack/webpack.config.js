import { resolve } from 'path';

export default {
	entry: './src/index.js',
	output: {
		path: resolve(import.meta.dirname, 'dist'),
		filename: 'bundle.js'
	},
	resolve: {
		conditionNames: ['development']
	}
};
