<script lang="ts">
	import MonthlyCard from './MonthlyCard.svelte';
	import type { FetchFake } from './fetch/fetchFake';

	export let title: string;
	export let posts: FetchFake.UserWithPost[];
</script>

<article>
	<div class="title">
		<h2>
			{title}
		</h2>
	</div>
	<div class="cards-container">
		{#each posts as post}
			<div class="month-wrapper">
				<MonthlyCard {post} />
			</div>
		{/each}
	</div>
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
