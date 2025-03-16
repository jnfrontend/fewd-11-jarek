<script>
    let title = "Home";
    import { link } from "svelte-spa-router";
</script>

<main>
    <header>
		<h1><b>Unit-15</b><br>Svelte App</h1>
        <h2>Welcome to the {title} page!</h2>
        <nav>
            <a href="/" use:link>Home</a>
            <a href="/increment" use:link>Increment (Count Clicks)</a>
            <a href="/posts" use:link>Fetch API Posts</a>
        </nav>
	</header>

	<!-- Use fetch component (Fetch.svelte file) -->
	<!-- <Fetch /> -->
    <br>
    <footer>
        <small>
            Copyright © 2025 JN, all rights reserved.
            <!-- Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps. -->
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
    nav a:not(:last-child) {
        margin-right: 6px;
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