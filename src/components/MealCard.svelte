<script>
  import { url } from '@roxi/routify/runtime'
  import Image from './Image.svelte'
  import svitsConfig from '../../svits.config.json'

  export let m
</script>

<div
  class="overflow-hidden border shadow hover:shadow-lg rounded-2xl dark:border-gray-700 transform sm:hover:-translate-y-2 duration-200"
>
  <Image src={m.thumbnail} alt={m.title} class="object-cover w-full h-64 rounded-tl-2xl rounded-tr-2xl" />
  <div class="flex flex-col w-full p-4">
    <h2 class="text-xl text-gray-700 dark:text-gray-500 font-title">{m.title}</h2>
    <div class="flex mt-2 -mx-2 text-white">
      <a
        href={$url(m.url, { category: m.type })}
        title="View"
        style="border-width: 2px" class="flex items-center justify-center w-1/2 py-2 mx-2 text-green-500 border border-green-500 duration-200 hover:bg-green-500 hover:text-white rounded-md font-title"
        >View <span class="ml-2 i jam:search"></span></a
      >
      <button
        title="Add to card"
        style="border-width: 2px"
        class="flex items-center justify-center w-1/2 py-2 mx-2 text-green-500 border border-green-500 snipcart-add-item duration-200 hover:bg-green-500 hover:text-white rounded-md font-title"
        data-item-id={$url(m.url)}
        data-item-price={m.price}
        data-item-url={`${svitsConfig.hostname}${$url(m.url)}`}
        data-item-image="/images/{m.thumbnail}"
        data-item-name={m.title}
        >Add to cart <span class="ml-2 i jam:shopping-cart"></span></button
      >
    </div>
  </div>
</div>
