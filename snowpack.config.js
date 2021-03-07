/** @type {import("snowpack").SnowpackUserConfig } */
const production = process.env.NODE_ENV === 'production';

module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
		mocks: { url: '/mocks' },
	},
	plugins: ['@snowpack/plugin-svelte', '@snowpack/plugin-typescript'],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {
		bundle: true,
		minify: true,
		splitting: true,
		treeshake: true,
		target: 'es2018',
	},
	packageOptions: {
		/* ... */
	},
	devOptions: {
		/* ... */
	},
	buildOptions: {
		/* ... */
	},
};
