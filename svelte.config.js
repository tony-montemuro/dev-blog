import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex({
        extensions: ['md'],
        smartypants: {
            dashes: true
        },
        rehypePlugins: [
            rehypeSlug,
            rehypeAutolinkHeadings
        ]
    })],

    kit: { adapter: adapter() },

    extensions: ['.svelte', '.md']
};

export default config;
