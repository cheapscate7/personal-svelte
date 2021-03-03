/** @type {import("snowpack").SnowpackUserConfig } */
const production = process.env.NODE_ENV === 'production';

module.exports = {
	mount: {
		public: { url: '/', static: true },
		src: { url: '/dist' },
	},
	plugins: [
		'@snowpack/plugin-svelte',
		'@snowpack/plugin-dotenv',
		'@snowpack/plugin-typescript',
		'@snowpack/plugin-optimize',
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
