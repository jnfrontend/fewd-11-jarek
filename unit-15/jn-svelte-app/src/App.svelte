<script>
	export let name;

	let count = 10;
	function increment() {
		console.log("increment");
		count += 1;
	}
</script>

<main>
	<header>
		<h1><b>Unit-15</b><br>Svelte App</h1>
	</header>
	<h2>Hello {name}!</h2>
	<p>Count: {count}</p>
	<button on:click={increment}>Click to Increment</button>
</main>
<br>
<hr>
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
		max-width: 240px;
		margin: 0 auto;
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>