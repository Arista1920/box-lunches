<script lang="ts">
  import { onMount } from 'svelte'
  import { url } from '@roxi/routify/runtime'
  import { metatags } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import svitsConfig from '../../svits.config.json'
  let visible = false
  onMount(() => {
    setTimeout(() => visible = true, 100)
  })
  metatags.title = '404 | ' + svitsConfig.name
</script>

<style>
  .huge {
    font-size: 12rem;
  }

  .e404 {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
  }
</style>

<svelte:head>
  <meta name="prerender-status-code" content="404">
</svelte:head>

<div class="relative">
  <div class="overflow-hidden e404">
    {#if visible}
      <div class="huge font-title" in:fly={{y: -20, duration: 800}}>404</div>
    {/if}
    <div class="flex flex-col items-center big">
      Page not found.
      <!-- link to the parent folder of _fallback.svelte -->
      <a class="text-blue-600 hover:underline" href={$url('/index')}>Go to home -&gt</a>
    </div>
  </div>
</div>
