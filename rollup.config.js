// rollup.config.js
import rollup from 'rollup';
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import json from 'rollup-plugin-json';
import commonjs from 'rollup-plugin-commonjs';
import multiEntry from 'rollup-plugin-multi-entry';

export default {
	entry: 'src/**/index.js',
	format: 'iife',
	moduleName: 'kodo',
	external: [
		'moment',
		'Vue'
	],
	plugins: [
		multiEntry(),
		json(),
		resolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/**'
		})
	],
	dest: 'dist/[name].js',
	sourceMap: true,
};