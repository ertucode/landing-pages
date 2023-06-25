<script lang="ts">
	import { pages } from '$lib/constants';
</script>

<header>
	<nav>
		<div class="site-name">Blog</div>
		<ul>
			{#each pages as page}
				<li>
					<a href={page.href}>
						{page.label}
					</a>
				</li>
			{/each}
		</ul>
		<div class="search-icon">search icon</div>
	</nav>
</header>

<style>
	header {
		margin-bottom: var(--gap);
	}
	nav {
		background-color: black;
		color: white;
		font-weight: 700;
		display: flex;
		align-items: center;
		padding-inline: 4rem;
		padding-block: 0.2rem;
	}

	ul {
		display: flex;
		gap: 1rem;
		font-size: 0.9rem;
		height: 100%;
	}

	li {
		text-transform: uppercase;
		list-style: none;
	}

	a {
		color: inherit;
		text-decoration: none;
		padding-block: 0.5rem;
		padding-inline: 1.5rem;
	}

	a:hover {
		background-color: rgba(255, 255, 255, 0.288);
		color: var(--link-color);
	}

	.search-icon {
		margin-left: auto;
	}

	.site-name {
		font-size: 1.7rem;
		border-right: 1px solid rgba(255, 255, 255, 0.719);
		padding-right: 1rem;
	}
</style>
