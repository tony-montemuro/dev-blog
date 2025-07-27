<script lang="ts">
  import { elenchusImages } from '$lib/types/image.svelte';
  import Project from './project.svelte';
  import Elenchus from './svg/elenchus.svelte';
</script>

<Project
  id="elenchus"
  color={{
    bgPrimary: 'from-orange-500/50',
    bgSecondary: 'to-orange-200/50',
    github: '#ffd6a8'
  }}
  href={{
    website: 'https://imgur.com/elenchus-7-27-25-demo-INzdA8Q',
    github: 'https://github.com/tony-montemuro/elenchus'
  }}
  logo={{ Logo: Elenchus, width: { desktopWidth: 250, mobileWidth: 200 } }}
  images={elenchusImages}
>
  <span
    >An AI-powered education platform for <strong class="text-orange-300"
      >generating and sharing quizzes.</strong
    >
  </span>
  <span>
    Users are able to <strong class="text-orange-300">sign up</strong> and
    <strong class="text-orange-300">login</strong> to the platform.
  </span>
  <span
    ><strong class="text-orange-300">Attempt quizzes</strong> published by any user, and
    <strong class="text-orange-300">view past attempts.</strong>
  </span>
  <span
    >Create quizzes easily: it's as simple as <strong class="text-orange-300"
      >uploading your notes.</strong
    >
  </span>
  <span
    ><strong class="text-orange-300">Edit</strong> and
    <strong class="text-orange-300">publish</strong>
    the generated quizzes, making them easily <strong class="text-orange-300">corretable</strong>
    and <strong class="text-orange-300">sharable</strong>.
  </span>
  <span>Still a <strong class="text-orange-300">work in progress!</strong></span>
</Project>
