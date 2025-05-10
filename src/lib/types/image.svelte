<script lang="ts" context="module">
  import Admin from '$lib/assets/smbelite-admin.png';
  import Dark from '$lib/assets/image2ascii-dark.png';
  import Games from '$lib/assets/smbelite-games.png';
  import Levelboard from '$lib/assets/smbelite-levelboard.png';
  import Mobile from '$lib/assets/image2ascii-mobile.png';
  import Totalizer from '$lib/assets/smbelite-totalizer.png';
  import Twitch from '$lib/assets/image2ascii-twitch.png';
  import Users from '$lib/assets/smbelite-users.png';

  export interface Image {
    src: any;
    alt: string;
    caption: string;
  }

  export const smbEliteImages: Image[] = [
    {
      src: Games,
      alt: 'SMBElite games page',
      caption: 'The games page, displaying the Main Games'
    },
    {
      src: Levelboard,
      alt: 'SMBElite leaderboard example',
      caption: 'An example of a level leaderboard'
    },
    {
      src: Totalizer,
      alt: 'SMBElite totalizer page',
      caption: 'Score totalizer ranking of Super Monkey Ball 651, a custom game'
    },
    {
      src: Users,
      alt: 'SMBElite users page',
      caption: 'Some users from the Users page'
    },
    {
      src: Admin,
      alt: 'SMBElite admin panel',
      caption: 'Site administrator tool for adding new games'
    }
  ];

  export const image2AsciiImages: Image[] = [
    {
      src: Twitch,
      alt: 'image2ascii Twitch example',
      caption: 'Creating Twitch ASCII art'
    },
    {
      src: Dark,
      alt: 'image2ascii dark mode',
      caption: 'Dark mode'
    }
  ];
</script>
