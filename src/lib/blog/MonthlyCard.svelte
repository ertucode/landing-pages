<script lang="ts">
	import { dateString } from '$lib/utils/date-string';
	import { fullName } from '$lib/utils/full-name';
	import ProfileSection from './ProfileSection.svelte';
	import Tags from './Tags.svelte';
	import type { FetchFake } from './fetch/fetchFake';

	export let post: FetchFake.UserWithPost;
</script>

<div class="wrapper">
	<div class="date">{dateString(new Date())}</div>
	<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
	<!-- svelte-ignore a11y-missing-attribute -->
	<a tabindex="0"><h3>{post.post.title}</h3></a>
	<div class="mt-auto">
		<Tags tags={post.post.tags} />
	</div>
	<ProfileSection
		imgSrc={post.user.image}
		name={fullName(post.user.firstName, post.user.lastName)}
	/>
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
