<script>
  import { fly } from 'svelte/transition'
  import elements from './navigation'
  import { url, isActive } from '@roxi/routify/runtime'
  export let open = true

  let inside

  const separatorClass = 'block my-4 border-t w-full'

  function handleClick() {
    if (!inside && open) {
      //open = false
    }
  }
</script>

<svelte:window on:click={handleClick}/>

{#if open}
  <aside
    on:mouseenter={() => inside = true}
    on:mouseleave={() => inside = false}
    class="absolute w-screen h-screen bg-white border-l shadow-xl lg:hidden"
    class:open
    transition:fly={{ y: -100, duration: 200 }}
  >
    <nav class="p-12 pt-20 -my-4 text-xl">
      <!--span class={separatorClass}></span-->
      {#each elements as el}
        <a
          class="block py-1 my-4 uppercase nav-link"
          href={$url(el.href)}
          class:selected-nav={$isActive(el.href)}
          >{el.titulo}</a
        >
      {/each}
    </nav>
  </aside>
{/if}

<style>
  aside {
    transition: right 0.3s ease-in-out;
    background-color: rgba(255, 255, 255, 0.95);
  }

  .nav-link {
    border-bottom: 2px solid transparent;
    @apply duration-200;
  }

  .selected-nav {
    border-bottom: 2px solid green;
  }

  .nav-link:hover {
    @extend .selected-nav;
  }
</style>
