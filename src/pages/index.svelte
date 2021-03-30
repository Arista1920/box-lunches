<script>
  import svitsConfig from '../../svits.config'
  import { metatags } from '@roxi/routify'
  import Carousel from '../components/carousel/Carousel.svelte'
  import V from '../components/IntersectingViewport.svelte'

  import Intro from '../components/pages/home/Intro.svelte'
  import Banner from '../components/pages/home/Banner.svelte'
  import Offers from '../components/pages/home/Offers.svelte'
  import Title from '../components/Title.svelte'
  import PostCard from '../components/PostCard.svelte'
  import { getCollection } from '../collections'
  const posts = getCollection(
    'posts',
    {
      field: 'date',
      order: 'asc',
      isDate: true,
    })
    .paginate(3, 1)
    .elements

  // import { getCollection } from '../collections'

  const slides = [
    {
      content: 'Don\'t eat less,\njust eat real.',
      bg: 'url(/images/bg.jpg)',
    },
    {
      content: 'Fresh and delicious.',
      bg: 'url(/images/bg2.jpg)',
    },
    {
      content: 'Box Lunches Seattle.',
      bg: 'url(/images/bg3.jpg)',
    },
  ]

  metatags.title = svitsConfig.name
</script>

<style>
  .heart {
    position: relative;
    display: inline;
    animation: pulse 1s ease infinite;
  }

  @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.3); }
    100% { transform: scale(1); }
  }
</style>

<div class="w-full min-h-screen">
  <Carousel height="95vh" slides={slides} waves/>
  <Intro/>
  <Banner/>
  <Offers/>
  <div class="mb-16 content">
    <V class="animate" oneWay style="--animate-r-y: -64deg">
      <h2
        class="flex flex-col m-auto mb-12 text-center -z-10"
        >
        <span
          class="-mb-3 text-5xl leading-none text-gray-300 select-none sm:-mb-8 -z-10 dark:opacity-25 sm:text-8xl dark:text-gray-500 font-handwritten"
                 >For everyone</span
               >
               <span
                 class="text-4xl leading-none text-center text-gray-700 sm:text-6xl dark:text-gray-500 font-title"
                 >We cook with
                 <span>
                   <svg class="mx-2 mb-2 text-red-500 fill-current h-9 heart" viewBox="0 0 32 29.6">
                     <path d="M23.6,0c-3.4,0-6.3,2.7-7.6,5.6C14.7,2.7,11.8,0,8.4,0C3.8,0,0,3.8,0,8.4c0,9.4,9.5,11.9,16,21.2
                              c6.1-9.3,16-12.1,16-21.2C32,3.8,28.2,0,23.6,0z"/>
                   </svg>
                 for everyone
                 </span>
               </span>
        <span class="w-32 m-auto bg-green-500" style="height: 2px"></span>
      </h2>
    </V>

    <V class="flex flex-col items-center mb-12 lg:mb-0 md:flex-row animate" oneWay style="--animate-x: -3rem">
      <div class="py-6 md:w-1/2">
        <div class="w-32 mx-auto mb-4 text-gray-700 fill-current dark:text-gray-500">
          {#await fetch('/images/gluten-free.svg') then res}
            {#await res.text() then svg}
              {@html svg}
            {/await}
          {/await}
        </div>
        <Title second="Gluten-free"/>
      </div>
      <p class="text-lg text-justify text-gray-500 md:w-1/2">
      All sandwiches, wraps and salads can be prepared with gluten free ingredients.
      </p>
    </V>
    <V class="flex flex-col items-center mb-12 lg:mb-0 md:flex-row-reverse animate" style="--animate-x: 3rem">
      <div class="py-6 md:w-1/2">
        <div class="w-32 mx-auto mb-4 text-gray-700 fill-current dark:text-gray-500">
          {#await fetch('/images/vegan.svg') then res}
            {#await res.text() then svg}
              {@html svg}
            {/await}
          {/await}
        </div>
        <Title second="Vegan food"/>
      </div>
      <p class="text-lg text-justify text-gray-500 md:w-1/2">
      We offer Vegetarian and Vegan box lunches, sandwiches, wraps and prepared meal menu options.
      </p>
    </V>
    <div class="overflow-hidden">
      <V class="animate" oneWay style="--animate-y: 100%; --animate-r: 3deg">
        <p class="mt-6 text-lg text-center text-gray-500">
        Additional dietary preferences can be met upon request.<br><strong>*Additional charge may be included</strong>
        </p>
      </V>
    </div>
  </div>

  <div class="py-12 content">
    <V oneWay class="animate" style="--animate-r-x: -64deg">
      <div class="w-32 mx-auto mb-4 text-gray-700 fill-current dark:text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/></svg>
      </div>
      <Title first="The flavors place" second="Where are the meals prepared?"/>
    </V>
    <V oneWay class="animate" style="--animate-r-y: -64deg">
      <p class="mt-6 text-lg text-justify text-gray-500 lg:text-center">
      Our Seattle catering kitchen is located on Dexter Ave in the South Lake Union part of Seattle’s downtown.
      </p>
    </V>
  </div>

  <div class="py-12 mb-6 content">
    <div class="overflow-hidden">
      <V oneWay class="animate" style="--animate-r: 6deg; --animate-y: 100%">
        <div class="w-32 mx-auto mb-4 text-gray-700 fill-current dark:text-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill-rule="evenodd" clip-rule="evenodd"><path d="M2.075 9.479c.266-.562.595-1.133.925-1.634v-1.845c0-3.878 3.822-6 9-6 5.316 0 9 2.043 9 6v1.845c.33.501.659 1.072.925 1.634 1.474.515 2.075 2.217 2.075 4.072 0 1.925-.896 4.738-3.317 5.188-1.959 3.492-4.877 5.261-8.683 5.261-3.805 0-6.724-1.769-8.683-5.261-2.42-.45-3.317-3.263-3.317-5.188 0-1.847.599-3.556 2.075-4.072zm19.865 3.19c-.42.306-1.038.39-1.724.204-1.538-.45-3.52-1.511-8.216-1.498-4.695-.013-6.678 1.048-8.216 1.498-.687.186-1.305.102-1.725-.205-.24 1.606.339 4.103 1.908 4.133.368.007.703.216.871.543 2.39 4.656 5.982 4.656 7.162 4.656 1.181 0 4.771 0 7.162-4.656.168-.327.503-.536.87-.543 1.853-.036 1.968-3.218 1.968-3.25 0-.324-.02-.62-.06-.882zm-6.94 4.331c-.002.007-.768 2.354-3 2.354-2.15 0-2.998-2.347-3-2.354h6zm-6.25-5c-.69 0-1.25.671-1.25 1.5 0 .828.56 1.5 1.25 1.5s1.25-.672 1.25-1.5c0-.829-.56-1.5-1.25-1.5zm7.75 1.5c0 .828-.56 1.5-1.25 1.5s-1.25-.672-1.25-1.5c0-.829.56-1.5 1.25-1.5s1.25.671 1.25 1.5zm3.01-4.254c-2.454-1.152-4.551-1.632-7.51-1.632-2.534 0-4.926.504-7.536 1.673-.337.546-.625 1.107-.79 1.522 2.904-1.005 4.789-1.439 8.326-1.426 3.64-.013 5.529.457 8.326 1.426-.17-.425-.468-1.005-.816-1.563zm-10.51-3.246h6v-3.17l-3 2-3-2v3.17zm5.996-4h-5.992l2.996 2 2.996-2z"/></svg>
        </div>
        <Title first="Delivery" second="How we deliver?"/>
      </V>
    </div>
    <div class="overflow-hidden">
      <V oneWay class="animate" style="--animate-r: 3deg; --animate-y: 100%">
        <p class="mt-6 text-lg text-justify text-gray-500">
        Box-lunches.com is located in Seattle’s South Lake Union neighborhood and delivers within the Seattle Metro are.  We also deliver to all of King County with at least 16 hours notice.  Please reach out to us if you are out of the King County area and would like delicious food or meals delivered.
        </p>
      </V>
    </div>
  </div>

  <div class="content py-12 mb-6">
    <Title first="Blog" second="Read our last articles"/>
    <div class="flex flex-col space-y-6 pt-8">
      {#each posts as p}
        <PostCard {...p}/>
      {/each}
    </div>
  </div>

  <V oneWay class="w-full animate" style="--animate-y: 20%">
    <img src="/images/seattle.svg" alt="" class="w-full">
  </V>
</div>
