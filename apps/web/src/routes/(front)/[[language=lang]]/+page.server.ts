// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// export const prerender = true;
import { error, redirect } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load = (async ({ fetch, parent, url, params }) => {
	//console.log(params);
	const _parent = await parent();

	// if (!session?.user) {
	// 	throw redirect(302, '/');
	// }

	// if (params.slug === 'hello-world') {
	// 	return {
	// 		title: 'Hello world!',
	// 		content: 'Welcome to our blog. Lorem ipsum dolor sit amet...'
	// 	};
	// }

	const response = await fetch(`/api/content/posts/public/page/${_parent.themeConfig.posts_per_page}/1`);
	const posts = await response.json();
	return {
		posts: posts
	};
}) satisfies PageLoad;
