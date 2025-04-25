<script>
    import MainNavigation from "./components/MainNavigation.svelte";
    import { count } from "./store.js";

    let title = "Increment";

	function increment() {
		console.log("increment");
		$count += 1; // Use "$" symbol to access global variable
	}
</script>

<main>
    <header>
		<h1><b>Unit-15</b><br>Svelte App</h1>
        <h2>This is {title} page!</h2>
        <MainNavigation/>
	</header>

	<section>
		<p>Count: <b>{$count}</b></p>
		<button on:click={increment}>Click to Increment</button>
	</section>

    <br>
    <footer>
        <small>
            Copyright © 2025 JN, all rights reserved.
        </small>
    </footer>
</main>

<style>
	main,
	footer {
		text-align: center;
		padding: 1em;
		max-width: 650px;
		margin: 0 auto;
	}
    section {
        padding: 30px 0;
    }
	footer {
		width: 100%;
		max-width: 100%;
		border-top: 1px solid lightgray;
	}
    footer small {
        opacity: .45;
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