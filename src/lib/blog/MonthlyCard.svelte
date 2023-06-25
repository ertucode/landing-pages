<script lang="ts">
	import { dateString } from '$lib/utils/date-string';
	import ProfileSection from './ProfileSection.svelte';
	import Tags from './Tags.svelte';
	import type { IMonthlyCard } from './monthly-card';

	export let card: IMonthlyCard;
</script>

<div class="wrapper">
	<div class="date">{dateString(card.date)}</div>
	<h3>{card.title}</h3>
	<div class="mt-auto">
		<Tags tags={card.tags} />
	</div>
	<ProfileSection imgSrc={card.author.imgSrc} name={card.author.name} />
</div>

<style>
	.wrapper {
		background: linear-gradient(85deg, #434343, #262626);
		border-radius: 12px;
		color: white;
		padding: 2rem;
		display: flex;
		flex-direction: column;
		height: 100%;
		box-shadow: -2rem 0 3rem -2rem #000;
		min-width: 300px;
	}

	.date {
		font-size: 0.9rem;
		opacity: 0.6;
	}
</style>
