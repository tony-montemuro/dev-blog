import { escapeSvelte, mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { getSingletonHighlighter } from 'shiki';

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
                const highlighter = await getSingletonHighlighter({
                    themes: [theme],
                    langs: ['javascript', 'typescript', 'go', 'html', 'css', 'svelte', 'lua', 'bash', 'sql']
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
