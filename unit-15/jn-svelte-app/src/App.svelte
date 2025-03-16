<script>
	import Router from "svelte-spa-router";
	import Fetch from "./Fetch.svelte";
	import Home from "./Home.svelte";
	import Increment from "./Increment.svelte";
	import NotFound from "./NotFound.svelte";

	const routes = {
		"/": Home,
		"/posts": Fetch,
		"/increment": Increment,
		"*": NotFound,
	};
</script>

<Router {routes}/>