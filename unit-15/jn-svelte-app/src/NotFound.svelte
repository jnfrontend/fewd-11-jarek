<script>
    import { link } from "svelte-spa-router";
    let title = "Page Not Found"
</script>

<main>
    <h1>Oops, {title}</h1>
    <p>Back to <a href="/" use:link>Home Page</a></p>    
</main>