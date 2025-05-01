<script lang="ts" context="module">
  import JavaScript from '$lib/components/svg/javascript.svelte';
  import React from '$lib/components/svg/react.svelte';
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
    }
  ];
</script>
