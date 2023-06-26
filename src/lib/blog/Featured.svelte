<script lang="ts">
	import postImg from '$lib/blog/assets/featured-post.png';
	import { fullName } from '$lib/utils/full-name';
	import ProfileSection from './ProfileSection.svelte';
	import Tags from './Tags.svelte';
	import type { FetchFake } from './fetch/fetchFake';

	export let post: FetchFake.UserWithPost;
</script>

<div class="featured-card">
	<div class="image-wrap">
		<img src={postImg} alt="from the post" />
	</div>
	<div class="summary">
		<header>
			<Tags tags={post.post.tags} />
			<!-- svelte-ignore a11y-missing-attribute -->
			<a>
				<h2>
					{post.post.title}
				</h2>
			</a>
		</header>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, animi reiciendis!
			Libero, modi voluptate dolores, voluptatem impedit molestias quas, error aperiam expedita
			perferendis sunt iure nobis eveniet excepturi quia fugit vel ducimus. Quaerat explicabo
			blanditiis saepe iusto nemo sint architecto tempore. Voluptates beatae tempora nihil natus ab
			molestias error nam?
		</p>
		<div class="profile">
			<ProfileSection
				date={new Date()}
				imgSrc={post.user.image}
				name={fullName(post.user.firstName, post.user.lastName)}
			/>
		</div>
	</div>
</div>

<style>
	.featured-card {
		border-radius: var(--border-radius);
		display: grid;
		grid-template-columns: 50% 50%;
		overflow: hidden;
		background-color: white;
		position: relative;
	}

	.image-wrap::before {
		pointer-events: none;
		content: '';
		background: linear-gradient(to left, white 45%, rgba(0, 0, 0, 0));
		position: absolute;
		inset: 0;
		z-index: 2;
	}

	.summary {
		z-index: 2;
		padding-block: 1.5rem;
		padding-inline: 3.5rem;
		display: flex;
		flex-direction: column;
	}

	img {
		object-fit: cover;
		width: 120%;
		height: 100%;
	}

	a:hover {
		opacity: 0.6;
		cursor: pointer;
	}

	h2 {
		font-size: 3em;
		margin-block: 2rem;
	}

	p {
		line-height: 2;
		font-size: 1.3rem;
		color: rgba(0, 0, 0, 0.692);
	}

	.profile {
		margin-top: auto;
	}
</style>
