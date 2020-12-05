<script>
  import { params } from '@roxi/routify'
  import { metatags } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import Title from '../../../components/Title.svelte'
  import PC from '../../../components/motion/ParallaxContainer.svelte'
  import P from '../../../components/motion/ParallaxObject.svelte'
  import MealCard from '../../../components/MealCard.svelte'
  import { categories } from '../../../content/pages/menu'
  import Fallback from '../../_fallback.svelte'
  import svitsConfig from '../../../../svits.config'
  import { height } from '../../../components/navigation/Navbar.svelte'

  $: category = categories[$params.category].title
  $: description = categories[$params.category].description
  $: image = categories[$params.category].image

  $: metatags.title = category + ' | ' + svitsConfig.name

  import { getCollection } from '../../../collections'

  $: meals = getCollection('menu', { field: 'date', order: 'desc', isDate: true })
    .filter(m => m.type === $params.category)
    .elements
</script>

{#if category}
  <div class="w-full">
    <div in:fly={{y: -10, duration: 500, delay: 100}}>
      <div class="pb-12 content">
        <a
          title="Go back"
          href="/menu"
          class="flex items-center justify-end w-full py-2 text-xl text-center text-gray-400 sm:text-2xl font-title"
          ><span class="i jam:chevron-left"></span> <span class="hover:underline">View all</span></a
        >
        <Title first="Our menu" second={category}/>
      </div>
      <PC let:offset class="relative w-full overflow-hidden">
        <div
          class="absolute w-full h-full shadow-inner"
          ></div
        >
        <div
          class="absolute w-full h-full shadow-inner transform rotate-180"
          ></div
        >
        <P
          offset={offset}
          class="absolute flex w-full -z-10"
          style="height: 150%;"
          motion={false}
          scaleFactor={6}
        >
          <div
            class="w-full h-full bg-center bg-cover"
            style="background-image: linear-gradient(0deg, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url({image}), linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
            ></div
          >
        </P>
          <div class="w-full">
          <div class="py-12 content lg:w-6/10" class:pb-32={meals.length}>
            <p
              class="text-xl text-center text-white sm:text-3xl font-title"
              >{description}</p
            >
          </div>
        </div>
      </PC>
      <div class="pb-6 -mt-40 content" class:-mt-40={meals.length}>
        {#if meals.length}
          <div class="flex flex-wrap py-12 -m-4">
            {#each meals as m, i}
              <div
                class="w-full p-4 lg:w-1/3 sm:w-1/2 xxl:w-1/4"
                in:fly={{y: -20, duration: 800, delay: 300 + i * 100}}
              >
                <MealCard m={m} />
              </div>
            {/each}
          </div>
        {:else}
          <div class="flex w-full p-12 pb-6">
            <p class="m-auto text-xl text-gray-400 sm:text-2xl font-title">Nothing here :(</p>
          </div>
        {/if}
      </div>
    </div>
  </div>
{:else}
  <Fallback/>
{/if}
