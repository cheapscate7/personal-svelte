import App from './App.svelte';

if ('serviceWorker' in navigator) {
	navigator.serviceWorker.register('/sw.js').then(function () {
		console.log('Service Worker Registered');
	});
}

const app = new App({
	target: document.body,
});

if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();
	});
}

export default app;
