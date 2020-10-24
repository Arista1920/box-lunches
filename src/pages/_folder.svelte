<script>
  import Navbar, { height } from '../components/navigation/Navbar.svelte'
  import Footer from '../components/Footer.svelte'
</script>

<div class="flex flex-col w-full min-h-screen">
  <Navbar/>
  <main class="flex justify-center flex-grow h-full" style="margin-top: {$height}px">
    <slot/>
  </main>
  <Footer/>
</div>
