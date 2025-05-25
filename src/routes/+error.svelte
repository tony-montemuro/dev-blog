<script lang="ts">
  import Error from '$lib/components/svg/error.svelte';
  import GridBackground from '$lib/components/grid-background.svelte';
  import ArrowLeft from '$lib/components/svg/arrow-left.svelte';
</script>

<svelte:head>
  <title>Not Found</title>
</svelte:head>

<GridBackground />
<div class="h-app flex w-full items-center justify-center">
  <div class="flex flex-col gap-5 p-(--app-padding)">
    <div class="flex items-center gap-2">
      <div class="min-w-12 md:min-w-16">
        <div class="w-full">
          <Error />
        </div>
      </div>
      <h1 class="text-5xl md:text-7xl">Page not found!</h1>
    </div>
    <em>The content you requested does not exist.</em>
    <a
      href="/"
      class="flex w-fit gap-2 rounded-full border border-transparent bg-gray-400/30 p-3 transition-colors duration-300 ease-in-out hover:border-green-400 hover:bg-gray-400/60"
    >
      <ArrowLeft />
      <span>Back to Home</span>
    </a>
  </div>
</div>
