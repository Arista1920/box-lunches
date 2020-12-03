<script>
  import Navbar, { height, transparent } from '../components/navigation/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import { isActive } from '@roxi/routify/runtime'
  $: $transparent = $isActive('/index') || $isActive('/menu/:category/:meal')
</script>

<div class="flex flex-col w-full min-h-screen">
  <Navbar/>
  <main class="flex justify-center flex-grow h-full overflow-hidden" style="margin-top: {!$transparent ? $height : 0}px">
    <slot/>
  </main>
  <Footer/>
</div>
