import { json, type ServerLoadEvent } from "@sveltejs/kit";
import fetchPosts from "$lib/scripts/fetchPosts";

export const GET = async ({ params }: ServerLoadEvent) => {
    const options = {
        category: params.category
    };

    const posts = await fetchPosts(options);
    return json(posts);
};
