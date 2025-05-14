import { error } from '@sveltejs/kit';
import type { ServerLoadEvent } from '@sveltejs/kit';

export const load = async ({ params }: ServerLoadEvent) => {
    try {
        const post = await import(`../../../lib/posts/${params.post}.md`);

        return {
            Content: post.default,
            meta: post.metadata
        }
    } catch (err) {
        error(400, `Could not find ${params.post}`);
    }
};
