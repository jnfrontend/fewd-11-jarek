<script>
	import { count } from "./store.js";
	import Fetch from "./Fetch.svelte";

	export let name;

	function increment() {
		console.log("increment");
		$count += 1; // Use "$" symbol to access global variable
	}
</script>

<main>
	<header>
		<h1><b>Unit-15</b><br>Svelte App</h1>
	</header>

	<section>
		<h2>Hello {name}!</h2>
		<p>Count: {$count}</p>
		<button on:click={increment}>Click to Increment</button>
	</section>
	<!-- Use fetch component (Fetch.svelte file) -->
	<Fetch />
</main>
<br>
<footer>
	<small>
		Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.
	</small>
</footer>

<style>
	main,
	footer {
		text-align: center;
		padding: 1em;
		max-width: 650px;
		margin: 0 auto;
	}

	footer {
		width: 100%;
		max-width: 100%;
		border-top: 1px solid lightgray;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	button {
		background-color: #ff3e00;
		padding: 18px 36px;
		border-radius: 8px;
		margin:  0 auto;
		color: white;
		cursor: pointer;
		display: block;
		border: none;
	}

	hr {
		margin: 0;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>