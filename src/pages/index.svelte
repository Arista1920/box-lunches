<script>
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Carousel from '../components/carousel/Carousel.svelte'

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  metatags.title = svitsConfig.name
</script>

<div class="flex w-full">
  <div class="w-screen bg">
    <Carousel height="85vh"/>
  </div>
</div>
