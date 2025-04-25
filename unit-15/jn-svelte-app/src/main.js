import App from './App.svelte';

// SPA (Single-page application)
const app = new App({
	target: document.body,
	props: {
		name: 'Jarek'
	}
});

export default app;