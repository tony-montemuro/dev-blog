<script lang="ts">
  import Image2ascii from './image/image2ascii.svelte';
  import { image2AsciiImages } from '$lib/types/image.svelte';
  import Project from './project.svelte';
</script>

<Project
  id="image2ascii"
  color={{ bgPrimary: 'from-gray-400/50', bgSecondary: 'to-gray-700/50', github: '#111827' }}
  href={{
    website: 'https://image2ascii.net/',
    github: 'https://github.com/tony-montemuro/image2ascii'
  }}
  logo={{ Logo: Image2ascii, width: 325 }}
  images={image2AsciiImages}
>
  <span>
    Convert <span class="text-blue-400">PNG</span> and <span class="text-blue-400">JPEG</span> images
    into customizable ASCII art.
  </span>
  <span>
    <span class="text-blue-400">4</span> customizable settings:
    <span class="text-blue-400">size</span>, <span class="text-blue-400">style</span>,
    <span class="text-blue-400">exposure</span>, & <span class="text-blue-400">inversion</span>.
  </span>
  <span>
    Size presets for <span class="text-blue-400">Twitch</span> &
    <span class="text-blue-400">Discord</span>.
  </span>
  <span>
    <span class="text-blue-400">User-friendly</span> and
    <span class="text-blue-400">responsive</span> design.
  </span>
</Project>
