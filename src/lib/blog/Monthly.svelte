<script context="module" lang="ts">
	type UserWithPost = {
		user: FetchFake.User;
		post: FetchFake.Post;
	};

	const fetchUserOfPost = async (post: FetchFake.Post): Promise<UserWithPost | undefined> => {
		const user = await fetchFake.users(post.userId);
		if (!user) return;

		return {
			post,
			user
		};
	};
</script>

<script lang="ts">
	import MonthlyCard from './MonthlyCard.svelte';
	import { fetchFake, type FetchFake } from './fetch/fetchFake';
	import type { IMonthlyCard } from './monthly-card';

	export let title: string;

	const fetchPosts = (async (): Promise<IMonthlyCard[]> => {
		const fetched = await fetchFake.posts();
		if (!fetched) return [];

		const usersAndPosts = (await Promise.all(fetched.map((post) => fetchUserOfPost(post))))
			.filter((res): res is UserWithPost => res !== undefined)
			.slice(0, 10);

		return usersAndPosts.map(({ user, post }) => {
			return {
				author: {
					name: `${user.firstName} ${user.lastName}`,
					imgSrc: user.image
				},
				date: new Date(),
				tags: post.tags,
				title: post.title
			};
		});
	})();
</script>

<article>
	<div class="title">
		<h2>
			{title}
		</h2>
	</div>

	{#await fetchPosts}
		loading
	{:then posts}
		<div class="cards-container">
			{#each posts as post}
				<div class="month-wrapper">
					<MonthlyCard card={post} />
				</div>
			{/each}
		</div>
	{/await}
</article>

<style>
	.title {
		display: grid;
		grid-template-rows: repeat(2, 10rem);
		background: linear-gradient(130deg, #ff7a18, #af002d 41.07%, #319197 76.05%);
		color: white;
		border-radius: var(--border-radius);
		position: relative;
		padding: 2rem;
	}

	article {
		display: grid;
		grid-template-columns: 16rem 1fr;
		margin-top: var(--gap);
	}

	.title::before {
		content: '';
		position: absolute;
		inset: 5px;
		background: black;
		border-radius: var(--border-radius);
		z-index: 2;
	}

	h2 {
		grid-row: 2;
		z-index: 3;
		font-size: 2rem;
		white-space: break-spaces;
		display: block;
		width: 0;
	}

	.cards-container {
		display: flex;
		margin-left: 2rem;
		overflow-x: scroll;
		padding-block: 1rem;
		gap: 1rem;
	}

	.month-wrapper {
		transition: transform 0.2s;
	}

	.month-wrapper:not(:first-child) {
		margin-left: -7rem;
	}

	.month-wrapper:hover {
		transform: translateY(-1rem);
	}

	.month-wrapper:hover ~ .month-wrapper {
		transform: translateX(5rem);
	}
</style>
