<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Carousel from '../components/carousel/Carousel.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  const slides = [
    {
      content: 'Don\'t eat less,\njust eat real.',
      bg: 'url(/images/bg.webp)'
    },
    {
      content: 'Fresh and delicious.',
      bg: 'url(/images/bg.webp)'
    },
  ]

  metatags.title = svitsConfig.name
</script>

<div class="flex w-full min-h-screen">
  <div class="w-screen">
    <Carousel height="100vh" slides={slides}/>
    <div class="h-screen"></div>
  </div>
</div>
