<script>
  import Navbar, { height, transparent } from '../components/navigation/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import { isActive, isChangingPage } from '@roxi/routify/runtime'
  import { afterPageLoad } from '@roxi/routify'
  import NProgress from 'nprogress'

  NProgress.configure({
    // Pass in your configuration here, below is just how I like it
    // Full list: https://github.com/rstacruz/nprogress#configuration
    minimum: 0.16,
    showSpinner: false,
  })

  $: {
    if ($isChangingPage) {
      NProgress.start()
    } else {
      NProgress.done()
    }
  }


  let padded
  $afterPageLoad(() => {
    $transparent = $isActive('/index') || $isActive('/menu/:category/:meal')
    padded = !$transparent
  })
</script>

<div class="flex flex-col w-full min-h-screen">
  <Navbar/>
  <main class="flex justify-center flex-grow w-full h-full overflow-hidden" style="margin-top: {padded ? $height : 0}px">
    <slot/>
  </main>
  <Footer/>
</div>
