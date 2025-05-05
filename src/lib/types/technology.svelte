<script lang="ts" context="module">
  import AdobeCommerce from '$lib/components/svg/adobe-commerce.svelte';
  import AWS from '$lib/components/svg/aws.svelte';
  import Git from '$lib/components/svg/git.svelte';
  import GNULinux from '$lib/components/svg/gnu-linux.svelte';
  import Go from '$lib/components/svg/go.svelte';
  import JavaScript from '$lib/components/svg/javascript.svelte';
  import JQuery from '$lib/components/svg/jquery.svelte';
  import MaterialUi from '$lib/components/svg/material-ui.svelte';
  import MySQL from '$lib/components/svg/mysql.svelte';
  import Neovim from '$lib/components/svg/neovim.svelte';
  import Npm from '$lib/components/svg/npm.svelte';
  import PHP from '$lib/components/svg/php.svelte';
  import Phpstorm from '$lib/components/svg/phpstorm.svelte';
  import PostgreSQL from '$lib/components/svg/postgresql.svelte';
  import React from '$lib/components/svg/react.svelte';
  import SvelteKit from '$lib/components/svg/sveltekit.svelte';
  import Symfony from '$lib/components/svg/symfony.svelte';
  import TailwindCSS from '$lib/components/svg/tailwindcss.svelte';
  import type { Component } from 'svelte';

  export interface Technology {
    name: string;
    icon: Component;
    url: string;
  }

  export const frontend: Technology[] = [
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
      name: 'JavaScript',
      icon: JavaScript,
      url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
    },
    {
      name: 'jQuery',
      icon: JQuery,
      url: 'https://jquery.com/'
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
      name: 'PHP',
      icon: PHP,
      url: 'https://www.php.net/'
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
      name: 'Neovim',
      icon: Neovim,
      url: 'https://neovim.io/'
    },
    {
      name: 'npm',
      icon: Npm,
      url: 'https://www.npmjs.com/'
    },
    {
      name: 'PHPStorm',
      icon: Phpstorm,
      url: 'https://www.jetbrains.com/phpstorm/'
    },
    {
      name: 'Amazon Web Services',
      icon: AWS,
      url: 'https://aws.amazon.com/'
    }
  ];
</script>
