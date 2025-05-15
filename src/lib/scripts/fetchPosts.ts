import type { Post } from "$lib/types/post.svelte";

interface Options {
    category?: string | null;
};

export default async function fetchPosts({ category = null }: Options = {}): Promise<Post[]> {
    const fileType: string = '.md';
    let posts: Post[] = [];

    const paths = import.meta.glob(`../posts/*.md`, { eager: true });

    Object.entries(paths).map(([path, file]) => {
        const slug = path.split("/").pop()?.replace(fileType, '');
        if (file && typeof file === 'object' && 'metadata' in file && slug) {
            const metadata = file.metadata as Omit<Post, 'slug'>;
            const post = { ...metadata, slug } satisfies Post
            posts.push(post);
        }
    });

    if (category) {
        posts = posts.filter(post => post.categories.includes(category));
    }

    return posts;
};
