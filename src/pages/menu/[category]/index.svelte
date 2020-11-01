<script>
  import { params } from '@roxi/routify'
  import { metatags } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import Title from '../../../components/Title.svelte'
  import MealCard from '../../../components/MealCard.svelte'
  import categories from '../../../lib/categories'
  import Fallback from '../../_fallback.svelte'
  import svitsConfig from '../../../../svits.config'

  $: category = categories[$params.category]

  $: metatags.title = category + ' | ' + svitsConfig.name

  import { getCollection } from '../../../collections'

  $: meals = getCollection('menu', { field: 'date', order: 'desc', isDate: true })
    .filter(m => m.type === $params.category)
    .elements
</script>

{#if category}
  <div class="content">
    <div in:fly={{y: -10, duration: 500, delay: 100}}>
      <Title first="Our menu" second={category}/>
      {#if meals.length}
        <div class="flex flex-wrap py-12 -m-4">
          {#each meals as m, i}
            <div
              class="w-full p-4 lg:w-1/3 sm:w-1/2"
              in:fly={{y: -20, duration: 800, delay: 300 + i * 100}}
            >
              <MealCard m={m} />
            </div>
          {/each}
        </div>
      {:else}
        <div class="flex w-full p-16">
          <p class="m-auto text-xl text-gray-400 sm:text-2xl font-title">Nothing here :(</p>
        </div>
      {/if}
    </div>
  </div>
{:else}
  <Fallback/>
{/if}
