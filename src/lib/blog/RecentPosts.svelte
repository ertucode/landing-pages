<script lang="ts">
	import RecentPost from './RecentPost.svelte';
	import { fetchFake } from './fetch/fetchFake';

	const COUNT = 9;
	const srcs = Array(COUNT)
		.fill(null)
		.map((_, idx) => `blog/posts/post${idx + 1}.jpg`);
	const fetchPosts = fetchFake.postWithUser(COUNT);
</script>

<div class="wrapper">
	{#await fetchPosts then posts}
		{#if posts}
			{#each posts as post, idx}
				<RecentPost {post} src={srcs[idx]} />
			{/each}
		{/if}
	{/await}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 3rem;
	}
</style>
