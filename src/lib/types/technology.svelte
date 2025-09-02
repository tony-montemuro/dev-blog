<script lang="ts" context="module">
  import AdobeCommerce from '$lib/components/svg/adobe-commerce.svelte';
  import AWS from '$lib/components/svg/aws.svelte';
  import Docker from '$lib/components/svg/docker.svelte';
  import Git from '$lib/components/svg/git.svelte';
  import GNULinux from '$lib/components/svg/gnu-linux.svelte';
  import Go from '$lib/components/svg/go.svelte';
  import JavaScript from '$lib/components/svg/javascript.svelte';
  import MaterialUi from '$lib/components/svg/material-ui.svelte';
  import MySQL from '$lib/components/svg/mysql.svelte';
  import Neovim from '$lib/components/svg/neovim.svelte';
  import Npm from '$lib/components/svg/npm.svelte';
  import PHP from '$lib/components/svg/php.svelte';
  import PostgreSQL from '$lib/components/svg/postgresql.svelte';
  import React from '$lib/components/svg/react.svelte';
  import SvelteKit from '$lib/components/svg/sveltekit.svelte';
  import Symfony from '$lib/components/svg/symfony.svelte';
  import TailwindCSS from '$lib/components/svg/tailwindcss.svelte';
  import Typescript from '$lib/components/svg/typescript.svelte';
  import type { Component } from 'svelte';

  export interface Technology {
    name: string;
    icon: Component;
    url: string;
  }

  export const frontend: Technology[] = [
    {
      name: 'JavaScript',
      icon: JavaScript,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'React',
      icon: React,
      url: 'https://react.dev/'
    },
    {
      name: 'TailwindCSS',
      icon: TailwindCSS,
      url: 'https://tailwindcss.com/'
    },
    {
      name: 'TypeScript',
      icon: Typescript,
      url: 'https://www.typescriptlang.org/'
    },
    {
      name: 'SvelteKit',
      icon: SvelteKit,
      url: 'https://svelte.dev/'
    },
    {
      name: 'Material UI',
      icon: MaterialUi,
      url: 'https://mui.com/material-ui/'
    }
  ];

  export const backend: Technology[] = [
    {
      name: 'PHP',
      icon: PHP,
      url: 'https://www.php.net/'
    },
    {
      name: 'Go',
      icon: Go,
      url: 'https://go.dev/'
    },
    {
      name: 'PostgreSQL + PL/pgSQL',
      icon: PostgreSQL,
      url: 'https://www.postgresql.org/'
    },

    {
      name: 'Symfony',
      icon: Symfony,
      url: 'https://symfony.com/'
    },
    {
      name: 'MySQL',
      icon: MySQL,
      url: 'https://www.mysql.com/'
    },
    {
      name: 'Adobe Commerce',
      icon: AdobeCommerce,
      url: 'https://business.adobe.com/products/magento/magento-commerce.html'
    }
  ];

  export const tools: Technology[] = [
    {
      name: 'Git',
      icon: Git,
      url: 'https://git-scm.com/'
    },
    {
      name: 'GNU/Linux',
      icon: GNULinux,
      url: 'https://www.gnu.org/gnu/linux-and-gnu.en.html'
    },
    {
      name: 'Amazon Web Services',
      icon: AWS,
      url: 'https://aws.amazon.com/'
    },
    {
      name: 'Docker',
      icon: Docker,
      url: 'https://www.docker.com/'
    },
    {
      name: 'npm',
      icon: Npm,
      url: 'https://www.npmjs.com/'
    },

    {
      name: 'Neovim',
      icon: Neovim,
      url: 'https://neovim.io/'
    }
  ];
</script>
