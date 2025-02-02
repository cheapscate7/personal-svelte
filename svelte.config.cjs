const strip = require('@rollup/plugin-strip');

const sveltePreprocess = require('svelte-preprocess');
const node = require('@sveltejs/adapter-node');
const static = require('@sveltejs/adapter-static');
const vercel = require('@sveltejs/adapter-vercel');
const pkg = require('./package.json');
const path = require('path');

/** @type {import('@sveltejs/kit').Config} */
module.exports = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: sveltePreprocess(),
	kit: {
		// By default, `npm run build` will create a standard Node app.
		// You can create optimized builds for different platforms by
		// specifying a different adapter
		// adapter: node(),
		// adapter: static(),
		adapter: vercel(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			},
			resolve: {
				alias: {
					$utils: path.resolve('./src/utils'),
					$components: path.resolve('./src/components')
				}
			},
			build: {
				minify: 'terser',
				manifest: false,
				target: [
					'es2018'
				]
			},
			plugins: [
				strip({
				  labels: ['unittest']
				})
			  ]
		}
	}
};
