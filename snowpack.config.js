/** @type {import("snowpack").SnowpackUserConfig } */
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const production = process.env.NODE_ENV === 'production';

module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
		mocks: {url: '/mocks'}
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-typescript',
		[
			'@snowpack/plugin-webpack',
			{
				htmlMinifierOptions: true,
			},
		],
	],
	routes: [
		/* Enable an SPA Fallback in development: */
		// {"match": "routes", "src": ".*", "dest": "/index.html"},
	],
	optimize: {},
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
