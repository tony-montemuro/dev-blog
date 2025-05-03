<script lang="ts">
  interface Props {
    width: number;
    height: number;
  }

  let { width, height }: Props = $props();
</script>

<div class="top-nav h-app fixed right-0 bottom-0 left-0 -z-10">
  <div class="h-app flex flex-col justify-between">
    {#each { length: height } as _, y}
      <div class="flex justify-between">
        {#each { length: width } as _, x}
          <div class="grid-point" id="square-{x}-{y}"></div>
        {/each}
      </div>
    {/each}
  </div>
</div>
