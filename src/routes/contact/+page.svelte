<script lang="ts">
  import emailjs from '@emailjs/browser';
  import Grid from '$lib/components/grid.svelte';
  import { onMount } from 'svelte';
  import Spinner from '$lib/components/svg/spinner.svelte';
  import { page } from '$app/state';

  interface Message {
    content: string | null;
    color: 'green' | 'red';
  }

  let message: Message = $state({
    content: null,
    color: 'green'
  });
  let sending: boolean = $state(false);

  const resetForm = (form: HTMLFormElement) => {
    Array.from(form.querySelectorAll('input,textarea')).forEach((element) => {
      (element as HTMLInputElement | HTMLTextAreaElement).value = '';
    });
  };

  const sendEmail = (e: SubmitEvent) => {
    e.preventDefault();

    const target: HTMLFormElement = e.target as HTMLFormElement;
    const SERVICE_ID = 'service_jyn9psh';
    const TEMPLATE_ID = 'template_qeyiw0y';
    const PUBLIC_KEY = 'w-CJKosHSbU9E5vp5';

    sending = true;
    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, target, {
        publicKey: PUBLIC_KEY
      })
      .then(
        () => {
          message.content = 'Email sent! Thank you. 😀';
          message.color = 'green';
        },
        (error) => {
          message.content = `Email failed to send: ${error.text}`;
          message.color = 'red';
        }
      )
      .finally(() => {
        resetForm(target);
        sending = false;
      });
  };

  let form: HTMLFormElement;
  const href = page.url.href;
  const title = 'Contact | Tony Montemuro';
  const description =
    'Get in touch with Tony Montemuro. Send me a direct email through this convenient form.';

  onMount(() => {
    const inputs = document.querySelectorAll('.input');

    inputs.forEach((input, i) => {
      setTimeout(
        () => {
          input.classList.remove('opacity-0');
          input.classList.add('animate-floatin');
        },
        Math.pow(i, 1.25) * (i + 100)
      );
    });

    form.addEventListener('submit', sendEmail);
    form.addEventListener('keypress', () => (message.content = null));
  });
</script>

<svelte:head>
  <title>{title}</title>
  <meta name="description" content={description} />
  <link rel="canonical" {href} />

  <meta property="og:type" content="website" />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={href} />

  <meta property="twitter:title" content={title} />
  <meta property="twitter:description" content={description} />
</svelte:head>

<Grid />
<div class="w-app lg:h-app flex items-center justify-center p-(--app-padding)">
  <article class="rounded-2xl border border-white bg-slate-800/70 p-8">
    <form bind:this={form} class="flex w-full flex-col gap-3">
      <div class="animate-floatin flex flex-col gap-3">
        <h1 class="text-7xl">Contact</h1>
        <span class="text-xl">
          ✉️ Questions? Concerns? Please feel free to send me a message!
        </span>
      </div>
      <div class="input flex flex-col opacity-0">
        <label for="name" class="text-lg">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          class="rounded border border-gray-400 bg-gray-700/50 p-2 outline-none"
          maxlength="50"
        />
      </div>

      <div class="input flex flex-col opacity-0">
        <label for="subject" class="text-lg">Subject</label>
        <input
          type="text"
          name="subject"
          id="subject"
          required
          class="rounded border border-gray-400 bg-gray-700/50 p-2 outline-none"
          maxlength="78"
        />
      </div>

      <div class="input flex flex-col opacity-0">
        <label for="email" class="text-lg">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          class="rounded border border-gray-400 bg-gray-700/50 p-2 outline-none"
          maxlength="254"
        />
      </div>

      <div class="input flex flex-col opacity-0">
        <label for="message" class="text-lg">Message</label>
        <textarea
          id="message"
          name="message"
          rows="7"
          class="rounded border border-gray-400 bg-gray-700/50 p-2 outline-none"
          title="Not required, but highly recommended."
          maxlength="2000"
        ></textarea>
      </div>

      <div class="flex items-center gap-3">
        <button
          type="submit"
          class="{sending
            ? 'cursor-auto border-green-400 bg-blue-400/80'
            : 'cursor-pointer border-transparent bg-blue-500/80'} rounded border p-3 text-xl transition-colors duration-300 ease-in-out hover:border-green-400 hover:bg-blue-400/80"
        >
          <div class="flex h-6.5 w-12 justify-center">
            {#if sending}
              <Spinner />
            {:else}
              Send
            {/if}
          </div>
        </button>
        {#if message.content}
          <span class="text-lg {message.color === 'green' ? 'text-green-400' : 'text-red-400'}">
            {message.content}
          </span>
        {/if}
      </div>
    </form>
  </article>
</div>
