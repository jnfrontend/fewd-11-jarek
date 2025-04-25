<script>
    import { link } from "svelte-spa-router";
</script>

<nav>
    <a href="/" use:link>Home</a>
    <a href="/increment" use:link>Increment (Count Clicks)</a>
    <a href="/posts" use:link>Fetch API Posts</a>
</nav>

<style>
    nav a:not(:last-child) {
        margin-right: 6px;
    }
</style>