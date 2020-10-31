<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Carousel from '../components/carousel/Carousel.svelte'
  import Image from '../components/Image.svelte'
  import Title from '../components/Title.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

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

<div class="w-full min-h-screen">
  <Carousel height="95vh" slides={slides} waves/>
  <div class="py-12 content">
    <Title first="Arista Catering" second="Box Lunches Seattle"/>
    <p class="my-6 text-lg text-center text-gray-500 sm:text-xl">
        We welcome you to a delicious feast of exquisite dishes in Box Lunches. With a wide range of options to choose from, we guarantee you a sumptuous feast experience with our service!
    </p>
    <Image src="separator{dark ? '-dark' : ''}.png" alt="separator" class="m-auto pointer-events-none select-none"/>
  </div>
</div>
