import { recentPostCount } from '$lib/blog/constants';
import { fetchFake } from '$lib/blog/fetch/fetchFake';
import type { PageServerLoad } from './$types';

const _monthly = 10;
export const _recent = recentPostCount;
const _mixup = 10;
const total = _mixup + _monthly + _recent + 1;

const monthly = { start: 1, end: 1 + _monthly };
const recent = { start: monthly.end, end: monthly.end + _recent };
const mixup = { start: recent.end, end: recent.end + _mixup };

export const load = (async ({ params }) => {
	const posts = await fetchFake.postWithUser(total);
	posts[0].post.title = 'Why you should use neovim?';
	posts[1].post.tags = ['productivity', 'ide'];

	return {
		featured: posts[0],
		monthly: posts.slice(monthly.start, monthly.end),
		recent: posts.slice(recent.start, recent.end),
		mixup: posts.slice(mixup.start, mixup.end)
	};
}) satisfies PageServerLoad;
