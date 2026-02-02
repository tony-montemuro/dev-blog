<script lang="ts">
  import Http from './svg/http.svelte';
  import { httpImages } from '$lib/types/image.svelte';
  import Project from './project.svelte';
</script>

<Project
  id="http"
  color={{
    bgPrimary: 'from-blue-800/40',
    bgSecondary: 'to-blue-200/40',
    github: '#51a2ff'
  }}
  href={{
    website: 'https://github.com/tony-montemuro/http',
    github: 'https://github.com/tony-montemuro/http'
  }}
  logo={{ Logo: Http, width: { desktopWidth: 250, mobileWidth: 200 } }}
  images={httpImages}
>
  <span>
    HTTP server implementing most of the <a
      href="https://datatracker.ietf.org/doc/html/rfc1945"
      target="_blank"
      class="text-http-bg underline"
      >RFC 1945 specification
    </a>, written in Go.
  </span>
  <span>
    Configurable options, such as <strong class="text-http-bg">port number</strong>,
    <strong class="text-http-bg">request size</strong>, and
    <strong class="text-http-bg">connection timeout</strong>.
  </span>
  <span>
    Simple library that can be installed in
    <strong class="text-http-bg"> any Go project </strong>.
  </span>
  <span>
    Performs strict <strong class="text-http-bg">request validation</strong>.
  </span>
  <span>
    Includes a simple API for
    <strong class="text-http-bg"> reading from the request </strong>
    and <strong class="text-http-bg">writing to the response</strong>.</span
  >
</Project>
