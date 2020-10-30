<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Carousel from '../components/carousel/Carousel.svelte'
  import Image from '../components/Image.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  const slides = [
    {
      content: 'Don\'t eat less,\njust eat real.',
      bg: 'url(/images/bg.webp)',
    },
    {
      content: 'Fresh and delicious.',
      bg: 'url(/images/bg.webp)',
    },
    {
      content: 'Box Lunches Seattle.',
      bg: 'url(/images/bg.webp)',
    },
  ]

  metatags.title = svitsConfig.name
</script>

<div class="flex w-full min-h-screen">
  <div class="w-screen">
    <Carousel height="75vh" slides={slides} waves/>
    <div class="py-16 content">
      <h1
        class="flex flex-col m-auto text-center -z-10"
      ><span
          class="-mb-8 text-5xl leading-tight text-gray-200 select-none sm:-mb-12 -z-10 dark:opacity-25 sm:text-8xl dark:text-gray-700 font-handwritten"
          >Arista Catering</span
        >
        <span
          class="text-4xl text-center text-gray-700 sm:text-6xl dark:text-gray-500 font-title"
          >Box Lunches Seattle</span
        >
        <span class="w-32 m-auto bg-green-500" style="height: 2px"></span></h1
      >
      <p class="my-6 text-lg text-center text-gray-500 sm:text-xl">
          We welcome you to a delicious feast of exquisite dishes in Box Lunches. With a wide range of options to choose from, we guarantee you a sumptuous feast experience with our service!
      </p>
      <Image src="separator.png" alt="separator" class="m-auto pointer-events-none select-none"/>
    </div>
  </div>
</div>
