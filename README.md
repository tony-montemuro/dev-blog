# [Developer Blog Website](https://tonymontemuro.com/)

This project serves as both my professional portfolio website, as well as my blog. Built using:

- [SvelteKit](https://svelte.dev/docs/kit/introduction)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [mdsvex](https://mdsvex.pngwn.io/)
- [shiki](https://shiki.style/)
- [EmailJS](https://www.emailjs.com/)

Deployed on Cloudflare Pages using the [cloudflare adapter](https://developers.cloudflare.com/pages/framework-guides/deploy-a-svelte-kit-site/).

## Developing

1. Clone the repository onto your machine:

    ```bash
    git clone https://github.com/tony-montemuro/dev-blog
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Run the development server:

    ```bash
    npm run dev
    
    # or start the server and open the app in a new browser tab
    npm run dev -- --open
    ```

## Building

To create a production version of this app:

    ```bash
    npm run build
    ```

You can preview the production build with `npm run preview`.
