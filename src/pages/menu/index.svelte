<script>
  import { url } from '@roxi/routify/runtime'
  import { metatags } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import Title from '../../components/Title.svelte'
  import Image from '../../components/Image.svelte'
  import c from '../../lib/categories'
  import svitsConfig from '../../../svits.config'

  const categories = Object.keys(c).map(k => ({
    slug: k,
    name: c[k],
  }))

  import { getCollection } from '../../collections'

  const meals = {}
  categories.map(c => {
    meals[c.slug] = getCollection('menu').filter(m => m.type === c.slug).elements
  })

  $: console.log(meals)

  metatags.title = 'Our menu | ' + svitsConfig.name
</script>

<div class="content">
  <div in:fly={{y: -10, duration: 500, delay: 100}}>
    <Title first="Our menu" second="Taste our meals"/>
    {#each categories as { slug, name }, i}
      <div
        class="flex flex-col my-12 text-gray-700 category dark:text-gray-500"
        in:fly={{x: -20, duration: 500, delay: 100, delay: 300 + i * 100}}
      >
        <a
          href={$url('/menu/:category', { category: slug })}
          class="category-link"
        >
          <span>{name}</span>
          <div class="flex items-center more">
            <span class="text-sm sm:text-base">View more</span>
            <span class="text-xs i jam:chevron-right sm:text-sm"></span>
          </div>
        </a>
        <span class="w-full m-auto bg-green-500" style="height: 2px"></span>
        <div class="py-4 meals">
          {#if meals[slug].length}
            <div class="flex flex-wrap pt-4 -m-4">
              {#each meals[slug] as m, ii}
                <div class="w-full p-4 lg:w-1/3 sm:w-1/2">
                <div
                  class="overflow-hidden border shadow-xl rounded-2xl dark:border-gray-700 transform hover-not-focus:-translate-y-2 duration-200"
                  in:fly={{y: 20, duration: 800, delay: (i + 1) * 300 + (300 + ii * 100)}}
                >
                  <Image src={m.thumbnail} alt={m.title} class="object-cover w-full h-64 rounded-tl-2xl rounded-tr-2xl" />
                  <div class="flex flex-col w-full p-4">
                    <h2 class="text-xl text-gray-700 dark:text-gray-500 font-title">{m.title}</h2>
                    <div class="flex mt-2 -mx-2 text-white">
                      <button
                        style="border-width: 2px" class="flex items-center justify-center w-1/2 py-2 mx-2 text-green-500 border border-green-500 duration-200 hover:bg-green-500 hover:text-white rounded-md font-title"
                        >View <span class="ml-2 i jam:search"></span></button
                      >
                      <button
                        style="border-width: 2px"
                        class="flex items-center justify-center w-1/2 py-2 mx-2 text-green-500 border border-green-500 snipcart-add-item duration-200 hover:bg-green-500 hover:text-white rounded-md font-title"
                        data-item-id={m.url}
                        data-item-price={m.price}
                        data-item-url={m.price}
                        data-item-image="/images/{m.thumbnail}"
                        data-item-name={m.title}
                        >Add to cart <span class="ml-2 i jam:shopping-cart"></span></button
                      >
                    </div>
                  </div>
                </div>
                </div>
              {/each}
            </div>
          {:else}
            <p class="text-xl text-gray-400 sm:text-2xl font-title">Nothing here :(</p>
          {/if}
        </div>
      </div>
    {/each}
  </div>
</div>

<style>
  .category-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @apply font-title;
    @apply text-2xl;
  }

  @screen sm {
    .category-link {
      @apply text-4xl;
    }

    .category .more {
      opacity: 0;
      @apply duration-200;
      transform: translateX(-10%);
    }

    .category:hover .more {
      opacity: 1;
      transform: translateX(0);
    }
  }
</style>
