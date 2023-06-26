<script lang="ts">
	export let tags: string[];
</script>

<ul>
	{#each tags as tag}
		<!-- svelte-ignore a11y-missing-attribute -->
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<li><a tabindex="0">{tag}</a></li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 0.85rem;
		padding: 0;
	}
	a {
		background-color: var(--link-color);
		position: relative;
		--indent-size: 0.6rem;
		clip-path: polygon(
			calc(100% - var(--indent-size)) 0,
			100% 50%,
			calc(100% - var(--indent-size)) 100%,
			0% 100%,
			var(--indent-size) 50%,
			0% 0%
		);
		padding-inline: 1rem;
		color: white;
	}
	a:hover {
		opacity: 0.6;
		cursor: pointer;
	}

	li:not(:first-child) {
		margin-left: -0.3rem;
	}
</style>
