<script lang="ts">
  import SmbElite from './svg/smb-elite.svelte';
  import { smbEliteImages } from '$lib/types/image.svelte';
  import Project from './project.svelte';
</script>

<Project
  id="smb-elite"
  color={{
    bgPrimary: 'from-smb-elite-bg/50',
    bgSecondary: 'to-smb-elite-fg/50',
    github: 'var(--color-smb-elite-fg)'
  }}
  href={{
    website: 'https://smbelite.net/',
    github: 'https://github.com/tony-montemuro/smb-website'
  }}
  logo={{ Logo: SmbElite, width: 300 }}
  images={smbEliteImages}
>
  <span>
    A leaderboard website for games in SEGA's <a
      href="https://en.wikipedia.org/wiki/Super_Monkey_Ball"
      target="_blank"
      class="text-(--color-smb-elite-fg) underline"
      >Super Monkey Ball series
    </a>.
  </span>
  <span>
    Featuring over <strong class="text-(--color-smb-elite-fg)">20</strong> games.
  </span>
  <span>
    Ranking over <strong class="text-(--color-smb-elite-fg)">19,000</strong> user submissions.
  </span>
  <span>
    Over <strong class="text-(--color-smb-elite-fg)">250</strong> users.
  </span>
  <span>
    <strong class="text-(--color-smb-elite-fg)">3-tiered</strong> permission system: normal users, game-specific
    moderators, and site adminstrators.
  </span>
  <span>
    Receives approximately <strong class="text-(--color-smb-elite-fg)">400</strong> visits per day.
  </span>
</Project>
