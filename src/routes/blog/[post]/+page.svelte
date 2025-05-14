<script lang="ts">
  import type { Post } from '$lib/types/post.svelte';
  import type { Component } from 'svelte';

  interface PropsData {
    Content: Component;
    meta: Post;
  }

  let props = $props();
  let data: PropsData = props.data;
  let { meta, Content } = data;
</script>

<Content />
