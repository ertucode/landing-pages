<script lang="ts">
	export let tags: string[];
</script>

<ul>
	{#each tags as tag}
		<!-- svelte-ignore a11y-missing-attribute -->
		<li><a>{tag}</a></li>
	{/each}
</ul>

<style>
	ul {
		list-style: none;
		display: flex;
		gap: 1rem;
		text-transform: uppercase;
		font-weight: 700;
		font-size: 0.85rem;
		padding: 0;
	}
	a {
		color: var(--link-color);
	}
	a:hover {
		opacity: 0.6;
		cursor: pointer;
	}
</style>
