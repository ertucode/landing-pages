import { posts } from './posts';
import { users } from './users';

const $ = <T extends { id: number }>(list: T[]) => {
	return async <TId extends number | undefined = undefined>(
		id?: TId
	): Promise<(TId extends number ? T : T[]) | undefined> => {
		if (id == null) {
			// @ts-ignore
			return list;
		}
		// @ts-ignore
		return list.find((item) => item.id === id);
	};
};

const fetchUserOfPost = async (
	post: FetchFake.Post
): Promise<FetchFake.UserWithPost | undefined> => {
	const user = await fetchFake.users(post.userId);
	if (!user) return;

	return {
		post,
		user
	};
};

export const fetchFake = {
	users: $(users),
	posts: $(posts),
	postWithUser: async (count: number) => {
		const fetched = await fetchFake.posts();
		if (!fetched) return [];

		return (await Promise.all(fetched.map((post) => fetchUserOfPost(post))))
			.filter((res): res is FetchFake.UserWithPost => res !== undefined)
			.slice(0, count);
	}
};

export namespace FetchFake {
	export type User = (typeof users)[number];

	export type Post = (typeof posts)[number];

	export type UserWithPost = {
		user: FetchFake.User;
		post: FetchFake.Post;
	};
}
