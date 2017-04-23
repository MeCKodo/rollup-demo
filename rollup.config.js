// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'src/main.js',
	format: 'umd',
	moduleName: 'kodo',
	external: [
		'moment',
	],
	plugins: [
		json(),
		resolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/**'
		})
	],
	dest: 'dist/bundle.js',
	sourceMap: true,
};