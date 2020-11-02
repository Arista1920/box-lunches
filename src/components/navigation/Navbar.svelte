<script context="module">
  import { writable } from 'svelte/store'
  export const height = writable(0)
  export const transparent = writable(false)
</script>

<script>
  import Hamburger from './Hamburger.svelte'
  import Sidebar from "./Sidebar.svelte"
  import Image from "../Image.svelte"
  import navigation from "./navigation"
  import { url, isActive } from '@roxi/routify/runtime'
  import { isChangingPage } from '@roxi/routify'
  import { preferences } from '../../stores/preferences'
  import { count, loaded } from '../../stores/snipcart'

  export let sidebar = false

  let navbar

  $: if (!$isChangingPage) sidebar = false;

  let y

  let isTransparent = $transparent
  let top = true

  $: top = y <= $height || y === undefined
  $: isTransparent = $transparent && top
  $: $height = navbar ? navbar.offsetHeight : 0
</script>

<svelte:window bind:scrollY={y}/>

<header
  class="
    fixed z-10 w-full duration-200 {!isTransparent && top ? 'bg' : ''}
  "
  class:shadow-md={y > 0 && !isTransparent}
  class:glass={!top}
>
  <Sidebar bind:open={sidebar}/>
  <div class="flex items-center justify-between p-4 m-auto duration-200 {top ? 'lg:w-7/10' : 'lg:w-8/10'}" bind:this={navbar}>
    <nav class="flex">
      <a href="/" title="Home" class="duration-100 rounded-xl">
        <Image
          src="logo.png"
          class="
            { top ? 'h-16 w-16 sm:h-24 sm:w-24' : 'h-16 w-16' }
            duration-200 lg:transform lg:hover:scale-110 lg:hover:-rotate-12
          "
          alt="logo"
        />
      </a>
    </nav>

    <div class="lg:hidden">
      <Hamburger bind:open={sidebar} white={isTransparent}/>
    </div>
    <div
      class="
        items-center hidden px-2 py-6 -mx-4 text-lg lg:flex duration-100 rounded-xl font-title
        {isTransparent ? 'shadow-md glass' : ''}
      "
    >
      {#each navigation as { href, titulo }}
        <a
          href={$url(href)}
          class="mx-4 uppercase nav-link"
          class:selected-nav={$isActive(href)}>{titulo}</a
        >
      {/each}
      <div class="h-4 mx-2 border-l border-black dark:border-white duration-800"></div>
      <button
        on:click={() => $preferences.darkMode = !$preferences.darkMode}
        title="Change theme"
        class="focus:outline-none mx-4 uppercase cursor-pointer nav-link i jam:{$preferences.darkMode ? 'sun' : 'moon'}"
        ></button
      >
      <button
        title="Open cart"
        class="flex items-center mx-4 ml-2 focus:outline-none nav-link"
        class:nav-link={$loaded}
        class:cursor-not-allowed={!$loaded}
        class:snipcart-checkout={$loaded}
      >
        <span
          class="i jam:{$loaded ? 'shopping-cart' : 'hourglass text-gray-400 dark:text-gray-700'}"
          class:mr-2={$loaded}
          ></span
        >
        {#if $loaded}
        <span class="text-sm">{$count}</span>
        {/if}
      </button>
    </div>
  </div>
</header>

<style>
  header {
    transition: all 0.3s ease-in-out;
  }

  .glass {
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(200%) blur(10px);
  }

  .bg {
    background-color: white;
  }

  :global(.dark .bg) {
    background-color: #222;
  }

  :global(.dark .glass) {
    background-color: rgba(10, 10, 10, 0.9);
    backdrop-filter: saturate(200%) blur(10px);
  }

  .nav-link {
    transition: border 0.2s ease-in-out, color 0s ease-in-out;
    margin-bottom: -2px;
    border-bottom: 2px solid transparent;
  }

  .selected-nav {
    margin-bottom: -2px;
    border-bottom: 2px solid #0E9F6E;
  }

  .transparent.selected-nav {
    border-bottom: 2px solid white;
  }

  .nav-link:hover {
    @extend .selected-nav;
  }

  .transparent.nav-link:hover {
    @extend .transparent.selected-nav;
  }

  /*
  .logo-0 {
    opacity: 0;
  }
  */
</style>
