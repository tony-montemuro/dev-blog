<script lang="ts" context="module">
  import Admin from '$lib/assets/smbelite-admin.png';
  import Api from '$lib/assets/http-api.png';
  import Create from '$lib/assets/elenchus-create.png';
  import Dark from '$lib/assets/image2ascii-dark.png';
  import Edit from '$lib/assets/elenchus-edit.png';
  import ElenchusHome from '$lib/assets/elenchus-home.png';
  import Games from '$lib/assets/smbelite-games.png';
  import Levelboard from '$lib/assets/smbelite-levelboard.png';
  import Quiz from '$lib/assets/elenchus-quiz.png';
  import Server from '$lib/assets/http-server.png';
  import Totalizer from '$lib/assets/smbelite-totalizer.png';
  import Twitch from '$lib/assets/image2ascii-twitch.png';
  import Users from '$lib/assets/smbelite-users.png';
  import Validate from '$lib/assets/http-validate.png';

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

  export const elenchusImages: Image[] = [
    {
      src: ElenchusHome,
      alt: 'Elenchus home page',
      caption: 'The home page'
    },
    {
      src: Quiz,
      alt: 'Elenchus quiz page',
      caption: 'A quiz, with past attempts shown'
    },
    {
      src: Create,
      alt: 'Elenchus create quiz page',
      caption: 'The create page, where users can exchange notes for a quiz'
    },
    {
      src: Edit,
      alt: 'Elenchus edit quiz page',
      caption: 'Editing an unpublished quiz'
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

  export const httpImages: Image[] = [
    {
      src: Server,
      alt: 'Screenshot of server options',
      caption: 'All configurable server options'
    },
    {
      src: Validate,
      alt: 'Screenshot of sample validation method',
      caption: 'Example of validation function'
    },
    {
      src: Api,
      alt: 'Screenshot of sample response API',
      caption: 'Example response API method'
    }
  ];
</script>
