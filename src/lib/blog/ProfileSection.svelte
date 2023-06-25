<script lang="ts">
	import { dateString } from '$lib/utils/date-string';

	export let imgSrc: string | undefined = undefined;
	export let date: Date | undefined = undefined;
	export let name: string;
</script>

<div class="wrapper">
	<!-- svelte-ignore a11y-missing-attribute -->
	<a>
		{#if imgSrc}
			<img class="round" src={imgSrc} alt="profile" />
		{:else}
			<div class="round">{name[0]}</div>
		{/if}
	</a>
	<!-- svelte-ignore a11y-missing-attribute -->
	<a><div class="name">{name}</div></a>
	{#if date}
		<div class="date">{dateString(date)}</div>
	{/if}
</div>

<style>
	.wrapper {
		display: flex;
		gap: 1rem;
		align-items: center;
	}
	img {
		object-fit: cover;
	}

	.round {
		width: 2.4rem;
		height: 2.4rem;
		border-radius: 50%;
	}
	div.round {
		text-transform: uppercase;
		font-weight: 700;
	}

	:is(img, a):hover {
		opacity: 0.75;
	}

	a {
		cursor: pointer;
	}

	.name {
		font-weight: 600;
	}

	.date {
		opacity: 0.7;
	}
</style>
