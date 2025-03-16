<script>
    import { onMount } from "svelte";
    import MainNavigation from "./components/MainNavigation.svelte";

    let title = "Fetch API posts";
    let posts = [];

    // onMount() works simillar to addEventListener DOMContentLoaded
    // When the component is ready to mount, fetch something
    onMount(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            data.map((new_post) => {
                posts = [...posts, new_post];
                console.log(posts);
            });
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        console.log('DOM Loaded');
    });
</script>


<main>
    <header>
		<h1><b>Unit-15</b><br>Svelte App</h1>
        <h2>This is {title} page!</h2>
        <MainNavigation/>
	</header>
    <!-- Use svelte template by using {# } -->
    <section class="fetch_container">
        <h2>Fetch Posts</h2>
        <p>API Endpoint: https://jsonplaceholder.typicode.com/posts</p>
        <div class="fetch_data_posts">
            {#each posts as post}
                <article>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </article>
            {/each}
        </div>
    </section>
</main>
<br>
<footer>
    <small>
        Copyright © 2025 JN, all rights reserved.
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
    footer small {
        opacity: .45;
    }
    h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}
    section.fetch_container {
        max-width: 980px;
        margin: 60px auto 0 auto;
        padding-top: 30px;
        border-top: 1px solid lightgray;
	}
    
    section.fetch_container p {
        font-size: 13px;
        font-style: italic;
    }
    section.fetch_container .fetch_data_posts {
        border-radius: 8px;
        background-color: #ececec;
        margin: 20px;
        padding: 20px;
        overflow-y: scroll;
        max-height: 300px;
        border: 4px solid #ff3e00;
    }
    section.fetch_container .fetch_data_posts h2 {
        color: #ff3e00;
    }
    section.fetch_container .fetch_data_posts article {
       padding: 0 20px;
    }
    section.fetch_container .fetch_data_posts p {
        padding: 0 60px;
    }
    section.fetch_container .fetch_data_posts h2::first-letter,
    section.fetch_container .fetch_data_posts p::first-letter {
        text-transform: capitalize;
    }
    .fetch_data_posts::-webkit-scrollbar {
        width: 10px;
    }
    .fetch_data_posts::-webkit-scrollbar-track {
        background-color: transparent;
    }

    .fetch_data_posts::-webkit-scrollbar-thumb {
        background-color: #ff3e00;
        border-radius: 6px;
    }
</style>
