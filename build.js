// rollup.config.js
const rollup = require('rollup');
const resolve = require('rollup-plugin-node-resolve');
const babel = require('rollup-plugin-babel');
const json = require('rollup-plugin-json');
const commonjs = require('rollup-plugin-commonjs');
const uglify = require('rollup-plugin-uglify');
const fs = require('fs');
const glob = require('glob');

const external = [
	'moment',
	'Vue'
];
const plugins = [
	json(),
	resolve(),
	commonjs(),
	babel({
		exclude: 'node_modules/**'
	}),
	(process.env.NODE_ENV === 'production' && uglify()),
];
console.log(process.env.NODE_ENV)
let cache;
glob('./src/**/index.js', function (er, files) {

	files.map(file => {
		rollup.rollup({
			entry: file,
			cache: cache,
			external: external,
			plugins: plugins,
		}).then(function (bundle) {
			cache = bundle;
			bundle.write({
				format: 'cjs',
				dest: file.replace('src', 'dist'),
				sourceMap: true,
			});

		});
	})

});
/*
rollup.rollup({
	entry: 'src/enroll/form/index.js',
	format: 'iife',
	external: [
		'moment',
		'Vue'
	],
	plugins: [
		json(),
		resolve(),
		commonjs(),
		babel({
			exclude: 'node_modules/!**'
		})
	],
}).then(function (bundle) {
	// Generate bundle + sourcemap

	var result = bundle.generate({
		// output format - 'amd', 'cjs', 'es', 'iife', 'umd'
		format: 'cjs'
	});

	// Cache our bundle for later use (optional)
	console.log(result);

	fs.writeFileSync('bundle.js', result.code);

	// Alternatively, let Rollup do it for you
	// (this returns a promise). This is much
	// easier if you're generating a sourcemap
	bundle.write({
		format: 'cjs',
		dest: 'bundle.js'
	});
	// Alternatively, let Rollup do it for you
	// (this returns a promise). This is much
	// easier if you're generating a sourcemap

});
*/

/*
 * var result = bundle.generate({
 // output format - 'amd', 'cjs', 'es', 'iife', 'umd'
 format: 'iife',
 moduleName: 'l',
 sourceMap: true,
 });
 // Cache our bundle for later use (optional)
 console.log(result)
 var len = result.map.sources.length;
 var sources = result.map.sources;
 var sourcesContent = result.map.sourcesContent;

 for (var i = 0; i < len; i++) {
 console.log(sourcesContent[i],'---i')
 // bundle.write({
 // 	format: 'cjs',
 // 	dest: 'dist' + sources[i].split('src')[1]
 // });
 fs.writeFile( 'dist' + sources[i].split('src')[1], sourcesContent[i] );

 }
 *
 * */