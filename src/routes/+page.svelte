<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import Intro from '$lib/components/intro.svelte';
  import TechnologyList from '$lib/components/technology-list.svelte';
  import { page } from '$app/state';

  const href = page.url.href;
  const title = 'Tony Montemuro';
  const description =
    'Professional website of Tony Montemuro, a Full Stack Web Developer. Explore my technical projects, as well as my software development insights in my blog.';
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" {href} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={href} />

  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
</svelte:head>
<Grid />
<Intro />
<TechnologyList />
