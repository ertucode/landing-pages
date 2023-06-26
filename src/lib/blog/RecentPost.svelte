<script lang="ts">
	import ProfileSection from './ProfileSection.svelte';
	import Tags from './Tags.svelte';
	import type { FetchFake } from './fetch/fetchFake';

	export let post: FetchFake.UserWithPost;
	export let src: string;
</script>

<article class="wrapper">
	<img loading="lazy" {src} alt={post.post.title} />
	<div class="content">
		<Tags tags={post.post.tags} />
		<h2>{post.post.title}</h2>
		<p>{post.post.body}</p>
		<div class="mt-auto">
			<ProfileSection
				name="{post.user.firstName} {post.user.lastName}"
				date={new Date()}
				imgSrc={post.user.image}
			/>
		</div>
	</div>
</article>

<style>
	.wrapper {
		border-radius: 10px;
		background-color: white;
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}

	img {
		width: 100%;
		aspect-ratio: 2 / 1;
		object-fit: cover;
	}

	.content {
		padding: 1rem 2rem;
		flex: 1;
		display: flex;
		flex-direction: column;
	}

	h2 {
		cursor: pointer;
	}
	h2:hover {
		opacity: var(--hover-opacity);
	}

	p {
		line-height: 2;
		opacity: 0.8;
	}
</style>
