<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/blog/Navbar.svelte';
	import Featured from '$lib/blog/Featured.svelte';
	import Monthly from '$lib/blog/Monthly.svelte';
	import RecentPosts from '$lib/blog/RecentPosts.svelte';

	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div id="blog-wrapper">
	<Navbar />
	<main>
		<section><Featured post={data.featured} /></section>
		<section><Monthly title="Popular this month" posts={data.monthly} /></section>
		<section><RecentPosts posts={data.recent} /></section>
		<section><Monthly title="The monthly mixup" posts={data.mixup} /></section>
	</main>
</div>

<style>
	main {
		margin: 0 auto;
		max-width: var(--max-width);
		padding-bottom: 12rem;
	}

	#blog-wrapper {
		--max-width: 1600px;
		--gap: 3rem;
		--featured-img: linear-gradient(180deg, #fff, #262626);
		--border-radius: 6px;
		--link-color: orange;
		--hover-opacity: 0.65;

		background-color: #262626;
		background-repeat: no-repeat;
		background-image: radial-gradient(50% 50% at top center, rgba(0, 0, 0, 0.66), #262626),
			var(--featured-img);
		background-size: 120% 2000px, 100% 2000px;
	}

	section {
		margin-top: var(--gap);
	}
</style>
