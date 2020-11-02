<script>
  import { fly } from 'svelte/transition'
  import elements from './navigation'
  import { url, isActive } from '@roxi/routify/runtime'
  import { preferences } from '../../stores/preferences'
  import { count, loaded } from '../../stores/snipcart'
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
    class="absolute w-screen h-screen lg:hidden font-title"
    class:open
    transition:fly={{ y: -100, duration: 200 }}
  >
    <div class="flex flex-col h-full p-12 pt-20 text-xl">
      <div>
        <!--span class={separatorClass}></span-->
        {#each elements as el}
          <a
            class="block py-1 my-4 uppercase nav-link"
            href={$url(el.href)}
            class:selected-nav={$isActive(el.href)}
            >{el.titulo}</a
          >
        {/each}
      </div>
      <div class="pt-4 -m-4 buttons">
        <button
          title="Change theme"
          on:click={() => $preferences.darkMode = !$preferences.darkMode}
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
    <nav class="p-12 pt-20 -my-4 text-xl">
    </nav>
  </aside>
{/if}

<style>
  aside {
    transition: background-color 0.2s ease-in-out;
    background-color: rgba(255, 255, 255, 0.95);
  }

  .buttons {
    display: flex;
    justify-content: flex-end;
    @apply text-xl;
  }

  :global(.dark aside) {
    background-color: rgba(10, 10, 10, 0.95);
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
