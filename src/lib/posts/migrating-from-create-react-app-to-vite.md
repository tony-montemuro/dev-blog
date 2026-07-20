---
title: "Migrating from Create React App to Vite"
created: "2026-07-19"
description: "My experience migrating a relatively lightweight, single-page React application from Create React App to Vite."
image: "/cra-to-vite.png"
categories:
    - "tooling"
    - "react"
    - "javascript"
    - "frontend"

---

## Introduction 

Recently, I finally mustered up the motivation to work on my [largest personal project](https://github.com/tony-montemuro/smb-website) again. I figured this would be a good chance to get myself more familiar with agentic engineering. But wait, don't go! I promise, there is no more mention of AI in this article; just wanted to mention my motivation. The rest of this article will discuss good old application maintenance. Exciting, right? ;) 

Before I can start working on new features again, I realized it would be best to get my app up-to-date. I am embarrased to admit, but I had not updated *any* dependencies after initially releasing this project, which is almost 3 years old now. Well, there's no time like the present!

To begin, I realized that one of the biggest liabilities of my application was that I was still using [Create React App](https://create-react-app.dev/) over a year after the React team announced the project was being deprecated. But what is Create React App, or [Vite](https://vite.dev/) for that matter?

## What is Create React App?

Create React App is a deprecated build & developer tool, which was previously officially supported by the React team. With this tool, you could very simply setup a React project with just a single dependency (`react-scripts`), including things like:

- A pre-configured developer environment with reasonable defaults
- A local server with hot-reloading capabilities
- A way to build your application into static files that can be served by a production web server

While Create React App was a convenient tool, particularly for newer developers, more experienced developers noted that it had many limitations: it's slower than third-party alternatives, difficult to configure, etc.

Because of these limitations, as well as the fact that Create React App eventually had no maintainers left, the React team announced that [Create React App would be sunsetted on February 14th, 2025](https://react.dev/blog/2025/02/14/sunsetting-create-react-app). In the article, the React team recommends alternative frameworks / build tools to migrate to; one of those being Vite.

## What is Vite?

Vite is essentially a modern replacement of Create React App that is focused on speed, created by [Evan You](https://evanyou.me/), the author of [Vue.js](https://vuejs.org/). It solves many of the issues that Create React App had:

- Faster than Create React App in all relevant ways: quicker hot-reloading, & *much* quicker builds (in my experience)
- Much lighter-weight: In my case, my projects `package-lock.json` file dropped around 26k lines (🤯) from the migration
- Easier to configure: with Vite, configuraiton is as easy as modifying your `vite.config.js` file
- Framework agnostic: unlike Create React App, which is specifically designed for React, Vite supports many different JavaScript frameworks: React, Vue, Svelte, etc. 

For all these reasons, Vite is the very first build tool the React team recommended as an alternative. To keep things simple, I decided it would be the correct tool to migrate to. (I also have experience with Vite; this very website is actually powered by Vite!)

## How did I migrate?

Now, let's move on from definitions and history, and jump into the technical steps I took to perform the migration.

### Update dependencies

The first thing I did was uninstall Create React App, and install Vite:

```bash
npm uninstall react-scripts
npm install vite @vitejs/plugin-react --save-dev
```

`react-scripts` is the Create React App dependency. `vite` is the primary dependency, while `@vitejs/plugin-react` is a supplemental dependency for React projects. These two are installed as developer dependencies.

I also found that in my case, there were some additional unused dependencies that I *think* came from Create React App, but don't have a good way to check. I went ahead and uninstalled them. As a tip, you can use the following command to check for unused dependencies in your app:

```bash
npx knip
```

### Update package.json

Next, I had to update the scripts section of `package.json` to refer to `vite` rather than `react-scripts`:

```js
"scripts": {
  "start": "vite",
  "build": "vite build",
  "preview": "vite preview"
}
```

This enables us to run the development server (`npm start`), as well as build and preview the application locally (`npm run build`, `npm run preview`).

### Move & update index.html

Next, I had to make some changes regarding the `index.html` file. First, I moved it out of the `public/`, to the root folder:

```bash
mv public/index.html .
```

Create React App expects the `index.html` file to be located in the `public` directory; Vite expects it in the project root.

After this, I removed all occurences of `%PUBLIC_URL%` within the file.

```html
<!-- Example from my index.html -->
- <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
+ <link rel="icon" href="/favicon.ico" />
```

In Create React App, `%PUBLIC_URL%` resolves to the `public` directory, but in Vite, the `public/` directory is treated as the default source of static assets, so no placeholder is necessary. 

We are just about done with this file, but we will come back to it in the next step.

### Move any JSX out of JS files

This is a step whose complexity will depend on your project. Thankfully in my project, I was pretty good about keeping JSX exclusively within JSX files: there were just a couple JS files that contained a bit of JSX, not even 100 lines worth. The reason for this is because Vite is explicit when it comes to file extensions (even beside that, this is a best practice).

As a side effect of this, you will likely need to rename the `src/index.js` file, the entry point of a Create React App generated project, to:

```bash
mv src/index.js src/index.jsx
```

Because of this, I had to make one more edit to `index.html`:

```html
- <script type="module" src="/src/index.js"></script>
+ <script type="module" src="/src/index.jsx"></script>
```

### Create Vite configuration

Next, I created a Vite configuration file (`vite.config.js`), located at the root of my project:

```js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000
  }
});
```

This is a pretty simple configuration:

- I setup the React plugin earlier using the `plugins` directive.
- I set the output directory of application building to the `build` directory. This is to be consistent with Create React App, as well as my CD pipeline. 
- I set the port of my local development server to `3000`. Also consistent with Create React App; doesn't really matter, just what I am used to.

There are a lot more configuration options, which are documented in the [Vite docs](https://vite.dev/config/).

### Update environment variable references 

Create React App and Vite support environment variables in subtly different ways.

For starters, Create React App and Vite have different environment variable prefixes. Create React App uses `REACT_APP`, while Vite uses `VITE`. 

> For a bit of context, both Create React App and Vite have required prefixes for environment variables used by the application. This is a safety mechanism to guard against accidently leaking server-side secrets into the client bundle.

Not only that, but Create React App and Vite have a different API for referencing environment variables in the application. Create React App uses `process.env`, while Vite uses `import.meta.env`.

Putting these two differences together, here is an example of a change from my application:

```js
- const SUPABASE_URL = process.env.REACT_APP_SUPABASE_URL;
+ const SUPABASE_URL = import.meta.env.VITE_APP_SUPABASE_URL;
```

This is a refactor whose complexity also depends on the application. In my case, my application only references a couple environment variables, but these changes also meant I had to update:

- The CD pipeline
- Application initialization script
- Project README

Thankfully, I did not forget any of these!

## Conclusion

And that's about it! Once I had completed all of the above steps, my application was successfully migrated to Vite! Overall, a relatively painless process; I was honestly expecting a lot more work.

There's more we could do, such as:

- Set up ESLint
- Set up Prettier
- Set up React Testing library
- & more!

Perhaps I will save these for a future post... 👀
