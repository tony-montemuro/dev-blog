export async function load({ params, fetch }) {
    const { category } = params;
    const postRes = await fetch(`/api/posts/category/${category}`);
    const posts = await postRes.json();

    return { posts, category };
};
