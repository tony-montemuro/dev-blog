<script lang="ts" context="module">
  import Games from '$lib/assets/smbelite-games.png';
  import Levelboard from '$lib/assets/smbelite-levelboard.png';
  import Home from '$lib/assets/smbelite-home.png';

  export interface Image {
    src: any;
    alt: string;
    caption: string;
  }

  export const smbEliteImages: Image[] = [
    {
      src: Games,
      alt: 'SMBElite games page',
      caption: 'The games page, displaying 20 of the games on SMBElite'
    },
    {
      src: Levelboard,
      alt: 'SMBElite leaderboard example',
      caption: 'An example of a level leaderboard'
    },
    {
      src: Home,
      alt: 'SMBElite home page',
      caption: 'The home page, featuring games and the news'
    },
    {
      src: Games,
      alt: 'SMBElite games page',
      caption: 'The games page, displaying 20 of the games on SMBElite'
    }
  ];
</script>
