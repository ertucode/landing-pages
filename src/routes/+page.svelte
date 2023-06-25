<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/blog/Navbar.svelte';
	import { pages } from '../lib/constants';
	import Featured from '$lib/blog/Featured.svelte';
	import Monthly from '$lib/blog/Monthly.svelte';

	const ps = pages;
</script>

<div id="blog-wrapper">
	<Navbar />
	<main>
		<Featured />
		<Monthly title="Popular this month" />
	</main>
</div>

<style>
	main {
		margin: 0 auto;
		max-width: var(--max-width);
	}

	#blog-wrapper {
		--max-width: 1600px;
		--gap: 3rem;
		--featured-img: linear-gradient(180deg, #fff, #262626);
		--border-radius: 6px;
		--link-color: orange;

		background-color: #262626;
		background-repeat: no-repeat;
		background-image: radial-gradient(50% 50% at top center, rgba(0, 0, 0, 0.66), #262626),
			var(--featured-img);
		background-size: 120% 2000px, 100% 2000px;
	}
</style>
