import { json } from "@sveltejs/kit";
import fetchPosts from "$lib/scripts/fetchPosts";

export const GET = async ({ params }) => {
    const options = {
        category: params.category
    };

    const posts = await fetchPosts(options);
    return json(posts);
};
