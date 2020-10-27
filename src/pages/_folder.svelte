<script>
  import Navbar, { height } from '../components/navigation/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
  import { isActive } from '@roxi/routify/runtime'
  $: transparent = $isActive('/index')
</script>

<div class="flex flex-col w-full min-h-screen">
  <Navbar transparent={transparent} />
  <main class="flex justify-center flex-grow h-full" style="margin-top: {!transparent ? $height : 0}px">
    <slot/>
  </main>
  <Footer/>
</div>
