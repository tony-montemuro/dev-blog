import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { createHighlighter, } from 'shiki';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    preprocess: [vitePreprocess(), mdsvex({
        extensions: ['md'],
        smartypants: {
            dashes: true
        },
        highlight: {
            highlighter: async (code, lang = 'text') => {
                const theme = 'catppuccin-mocha';
                const highlighter = await createHighlighter({
                    themes: [theme],
                    langs: ['javascript', 'typescript', 'go', 'html', 'css', 'svelte']
                });

                const html = escapeSvelte(highlighter.codeToHtml(code, { lang, theme }));
                return `{@html \`${html}\` }`;
            }
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
