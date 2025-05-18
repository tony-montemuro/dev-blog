<script lang="ts">
  import Image2Ascii from '$lib/components/image2ascii.svelte';
  import ProjectDirectory from '$lib/components/project-directory.svelte';
  import ScrollButton from '$lib/components/scroll-button.svelte';
  import SmbElite from '$lib/components/smb-elite.svelte';
  import Top from '$lib/components/svg/top.svelte';
  import Wip from '$lib/components/wip.svelte';
  import { onMount } from 'svelte';
  import { page } from '$app/state';
  import GridBackground from '$lib/components/grid-background.svelte';

  let container: HTMLDivElement;

  const href = page.url.href;
  const title = 'Projects | Tony Montemuro';
  const description =
    'Explore my web development portfolio featuring a monkey ball leaderboard website (250+ users, 19K+ submissions) and an innovative image-to-ASCII converter optimized for Twitch and Discord.';

  onMount(() => container.focus());
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

<GridBackground />
<div class="absolute bottom-8 left-8 z-10">
  <ScrollButton sectionId="project-directory" bg="bg-black/40" padding="small">
    <Top />
  </ScrollButton>
</div>
<div bind:this={container} class="h-app snap-y snap-mandatory overflow-y-scroll">
  <ProjectDirectory />
  <SmbElite />
  <Image2Ascii />
  <Wip />
</div>
