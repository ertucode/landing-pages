const $ = async <T>(path: string) => {
	try {
		return (await fetch('https://dummyjson.com/' + path))?.json() as T | undefined;
	} catch {
		return;
	}
};

const makeFetcher =
	<T extends string, TRes extends object>(path: T) =>
	async <TId extends number | undefined = undefined>(
		id?: TId
	): Promise<(TId extends number ? TRes : TRes[]) | undefined> => {
		type TNested = {
			[K in T]: TRes[];
		};
		type Res = TId extends number ? TNested : TRes;
		const res: Res | undefined = await $<Res>(id ? `${path}/${id}` : path);
		if (!res) return;
		if (id === undefined) {
			// @ts-ignore
			if (path in res) return (res as TNested)[path];
			return;
		}
		// @ts-ignore
		return res;
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
	$,
	users: makeFetcher<'users', FetchFake.User>('users'),
	posts: makeFetcher<'posts', FetchFake.Post>('posts'),
	postWithUser: async (count: number) => {
		const fetched = await fetchFake.posts();
		if (!fetched) return [];

		return (await Promise.all(fetched.map((post) => fetchUserOfPost(post))))
			.filter((res): res is FetchFake.UserWithPost => res !== undefined)
			.slice(0, count);
	}
};

export namespace FetchFake {
	export type User = {
		id: number;
		firstName: string;
		lastName: string;
		image: string;
	};

	export type Post = {
		id: number;
		title: string;
		body: string;
		tags: string[];
		userId: number;
	};

	export type UserWithPost = {
		user: FetchFake.User;
		post: FetchFake.Post;
	};
}
