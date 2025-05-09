<script lang="ts">
  import ProjectCarousel from './project-carousel.svelte';
  import Github from './svg/github.svelte';
  import SmbElite from './svg/smb-elite.svelte';
  import { smbEliteImages } from '$lib/types/image.svelte';
</script>

<div
  id="smb-elite"
  class="h-app from-smb-elite-bg/50 to to-smb-elite-fg/50 relative flex snap-start snap-always bg-radial-[at_20%_15%]"
>
  <div class="flex basis-2/5 flex-col gap-8 p-8">
    <div class="flex items-center gap-8">
      <div class="w-fit">
        <a href="https://smbelite.net/" target="_blank" class="w-fit">
          <SmbElite width={300} />
        </a>
      </div>
      <a href="https://github.com/tony-montemuro/smb-website" target="_blank">
        <Github class="h-16 w-16 opacity-50 transition-opacity duration-200 hover:opacity-100" />
      </a>
    </div>

    <div class="flex flex-col gap-8 text-2xl">
      <span>
        A leaderboard website for games in SEGA's <a
          href="https://en.wikipedia.org/wiki/Super_Monkey_Ball"
          target="_blank"
          class="text-teal-200 underline"
          >Super Monkey Ball series
        </a>.
      </span>
      <span>Over 20 games featured (and counting)!</span>
      <span>Ranking over 19,000 user submissions (and counting)!</span>
      <span>Over 250 users (and counting)!</span>
      <span>
        Tiered-permission system: normal users, game-specific moderators, and site adminstrators.
      </span>
      <span>Receives approximately 400 visits per day.</span>
    </div>
  </div>
  <div class="h-app basis-3/5 p-8">
    <ProjectCarousel images={smbEliteImages} />
  </div>
</div>
