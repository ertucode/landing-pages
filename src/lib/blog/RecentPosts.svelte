<script lang="ts">
	import RecentPost from './RecentPost.svelte';
	import { recentPostCount } from './constants';
	import type { FetchFake } from './fetch/fetchFake';

	export let posts: FetchFake.UserWithPost[];

	const srcs = Array(recentPostCount)
		.fill(null)
		.map((_, idx) => `blog/posts/post${idx + 1}.jpg`);
</script>

<div class="wrapper">
	{#if posts}
		{#each posts as post, idx}
			<RecentPost {post} src={srcs[idx]} />
		{/each}
	{/if}
</div>

<style>
	.wrapper {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
		gap: 3rem;
	}
</style>
