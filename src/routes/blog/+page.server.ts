import type { Post } from '$lib/types/post.svelte';

// returns all categories, sorted by commonality
function getCategories(posts: Post[]): string[] {
    const categoriesMap: Record<string, number> = {};

    posts.forEach(post => {
        post.categories.forEach(category => {
            if (category in categoriesMap) {
                categoriesMap[category]++;
            } else {
                categoriesMap[category] = 1;
            }
        });
    });

    return Object.entries(categoriesMap)
        .sort(([, numA], [, numB]) => numB - numA)
        .map(([category]) => category);
}

export async function load({ url }) {
    const postRes = await fetch(`${url.origin}/api/posts.json`);
    const posts = await postRes.json();

    const categories = getCategories(posts);

    return { posts, categories };
};
