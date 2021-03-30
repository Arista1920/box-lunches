<script>
  import { url as urlHelper, prefetch } from '@roxi/routify/runtime'
  import Image from './Image.svelte'
  import { fly } from 'svelte/transition'
  import { calendar } from '../lib/dayjs'

  export let title
  export let description
  export let thumbnail
  export let date
  export let url
</script>

<div
  class="flex flex-wrap w-full overflow-hidden border shadow rounded-xl dark:border-gray-700"
  in:fly={{x: -20, duration: 500}}
>
  <div class="flex flex-col justify-between p-6 post-details sm:w-1/2">
    <div class="w-full">
      <div class="mb-2 text-base text-gray-500">{calendar(date)}</div>
      <h2 class="mb-2 text-2xl leading-none sm:text-4xl font-title">{title}</h2>
      <p class="text-lg text-gray-500">{description}</p>
    </div>
    <div class="w-full pt-6">
      <a
        href={$urlHelper(url)}
        use:prefetch
        title="View"
        style="border-width: 2px"
        class="flex items-center justify-center w-1/2 py-2 mx-auto mt-auto text-green-500 border border-green-500 duration-200 hover:bg-green-500 hover:text-white rounded-md font-title"
        >Read <span class="ml-2 i jam:chevron-right"></span></a
      >
    </div>
  </div>
  <div class="overflow-hidden post-image sm:w-1/2">
    <Image class="object-cover w-full h-full" src={thumbnail} />
  </div>
</div>
