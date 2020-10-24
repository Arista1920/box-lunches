<script context="module">
  import { writable } from 'svelte/store'
  export const height = writable(0)
</script>

<script>
  import Hamburger from './Hamburger.svelte'
  import Sidebar from "./Sidebar.svelte"
  import Image from "../Image.svelte"
  import navigation from "./navigation"
  import { url, isActive } from '@roxi/routify/runtime'

  export let sidebar = false
  export let transparent = false

  let navbar

  let y

  let isTransparent = transparent
  let top = true

  $: top = y <= $height || y === undefined
  $: isTransparent = transparent && top
  $: if (navbar) {
    $height = navbar.offsetHeight
  }
</script>

<svelte:window bind:scrollY={y}/>

<header class="fixed z-10 w-full glass" class:shadow={!top} class:bg={top}>
  <Sidebar bind:open={sidebar}/>
  <div class="flex items-center justify-between p-4 m-auto duration-200 {top ? 'lg:w-7/10' : 'lg:w-8/10'}" bind:this={navbar}>
    <nav class="flex">
      <a href="/" title="Home">
        <Image
          src="logo.jpg"
          class="{ top ? 'h-24' : 'h-16' } duration-200 lg:transform lg:hover:scale-110 lg:hover:-rotate-12"
          alt="logo"
        />
      </a>
    </nav>

    <div class="lg:hidden">
      <Hamburger bind:open={sidebar} white={isTransparent}/>
    </div>
    <div class="flex hidden -m-4 text-lg lg:block">
      {#each navigation as { href, titulo }}
        <a
          href={$url(href)}
          class="m-4 uppercase nav-link"
          class:selected-nav={$isActive(href)}>{titulo}</a
        >
      {/each}
    </div>
  </div>
</header>

<style>
  header {
    transition: all 0.3s ease-in-out;
  }

  .glass {
    background-color: rgba(255, 255, 255, 0.9);
    backdrop-filter: saturate(180%) blur(10px);
  }

  .bg {
    background-color: rgba(255, 255, 255, 1);
  }

  .nav-link {
    @apply pb-1;
    @apply duration-200;
    border-bottom: 2px solid transparent;
  }

  .selected-nav {
    border-bottom: 2px solid green;
  }

  .nav-link:hover {
    @extend .selected-nav;
  }

  /*
  .logo-0 {
    opacity: 0;
  }
  */
</style>
