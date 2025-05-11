<script lang="ts">
  import Grid from '$lib/components/grid.svelte';
  import { onMount } from 'svelte';

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
      console.log(input);
    });
  });
</script>

<Grid />
<div class="w-app lg:h-app flex items-center justify-center p-(--app-padding)">
  <form class="flex w-200 flex-col gap-3">
    <div class="animate-floatin flex flex-col gap-3">
      <h1 class="text-7xl">Contact</h1>
      <span class="text-xl">
        ✉️ Questions? Concerns? Please feel free to send me a message! I frequently check my email.
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
      />
    </div>

    <div class="input flex flex-col opacity-0">
      <label for="message" class="text-lg">Message</label>
      <textarea
        id="message"
        name="message"
        rows="7"
        class="rounded border border-gray-400 bg-gray-700/50 p-2 outline-none"
      ></textarea>
    </div>

    <div>
      <button
        type="submit"
        class="cursor-pointer rounded border border-transparent bg-blue-500 p-3 text-xl transition-colors duration-300 ease-in-out hover:border-green-400"
        >Send</button
      >
    </div>
  </form>
</div>
