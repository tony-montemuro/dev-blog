<script lang="ts">
  import type { ResponsiveWidth } from '$lib/types/responsive-width.svelte';

  let { mobileWidth, desktopWidth }: ResponsiveWidth = $props();
</script>

<svg
  width={mobileWidth}
  viewBox="0 0 105.99425 20.573978"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  class="md:hidden"
>
  <g transform="translate(-69.270294,-129.88257)">
    <text
      xml:space="preserve"
      style="font-size:25.4px;font-family:'Hedvig Letters Serif';-inkscape-font-specification:'Hedvig Letters Serif';text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#faf9f6;fill-opacity:1;stroke:none;stroke-width:0.264999;stroke-opacity:1"
      x="68.101906"
      y="150.20255"
      id="text1"
      ><tspan
        id="tspan1"
        style="fill:#faf9f6;fill-opacity:1;stroke:none;stroke-width:0.265;stroke-opacity:1"
        x="68.101906"
        y="150.20255">elenchus</tspan
      ></text
    >
  </g>
</svg>
<svg
  width={desktopWidth}
  viewBox="0 0 105.99425 20.573978"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
  class="hidden md:block"
>
  <g transform="translate(-69.270294,-129.88257)">
    <text
      xml:space="preserve"
      style="font-size:25.4px;font-family:'Hedvig Letters Serif';-inkscape-font-specification:'Hedvig Letters Serif';text-align:start;writing-mode:lr-tb;direction:ltr;text-anchor:start;fill:#faf9f6;fill-opacity:1;stroke:none;stroke-width:0.264999;stroke-opacity:1"
      x="68.101906"
      y="150.20255"
      id="text1"
      ><tspan
        id="tspan1"
        style="fill:#faf9f6;fill-opacity:1;stroke:none;stroke-width:0.265;stroke-opacity:1"
        x="68.101906"
        y="150.20255">elenchus</tspan
      ></text
    >
  </g>
</svg>
