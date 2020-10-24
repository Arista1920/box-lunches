<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { hslide } from './hslide.js'

  let slides = [
    { content: '1', bg: 'url(/images/bg.webp)' },
    { content: '2', bg: 'url(https://bestof2019.johanronsse.be/images/albums/mac-miller-divine-feminine.jpg)' },
    { content: '3', bg: 'url(https://bestof2019.johanronsse.be/images/albums/marc-martell-thunderbolt-and-lightning.jpg)' },
    { content: '4', bg: 'orange' },
  ]

  let cur = 0
  export let height = 'auto'

  function changeSlide(slide) {
    cur = slide
  }

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max)
  const transition_args = {
    duration: 200,
  }

  function prev(e) {
    if (cur > 0) {
      cur = clamp( --cur, 0, slides.length-1 )
    } else {
      cur = slides.length-1
    }
  }

  function next(e) {
    if (cur < slides.length-1) {
      cur = clamp( ++cur, 0, slides.length-1 )
    } else {
      cur = 0
    }
  }

  let interval
  onMount(() => {
    interval = () => setInterval(next, 5000)
  })
  $: if (interval) interval();

  const ARROW_LEFT = 37
  const ARROW_RIGHT = 39
  function handleShortcut(e) {
    if (e.keyCode === ARROW_LEFT ) {
      prev()
    }
    if (e.keyCode === ARROW_RIGHT ) {
      next()
    }
  }

</script>

<svelte:window on:keyup={handleShortcut} />

<div class="main">
  <div class="outer-wrapper" style="height: {height}">
    <div class="inner-wrapper">
      {#each slides as slide, id}
        {#if id === cur}
          <div
            style="background:{slide.bg}; background-size: cover; background-position: center;"
                   class="slide"
                   in:hslide|local={{duration: 500}}
                   out:hslide|local={{duration: 500}}
                   >
                   <div in:fly={{y: 100, duration: 500, delay: 400}}>
                     {slide.content}
                   </div>
          </div>
        {/if}
      {/each}
      <div class="controls">
        <button on:click="{()=>prev()}">
                          &lt;
        </button>
        <button on:click="{()=>next()}">
          &gt;
        </button>
      </div>
    </div>
  </div>
</div>

<style>

  .main {
    width: 100%;
    font-size: 62.5%;
  }

  button {
    background: transparent;
    color: #FFF;
    border-color: transparent;
    width: 3.2rem;
    height: 3.2rem;
    background: rgba(0,0,0,0.3);
  }

  button:hover,
  button:focus{
    background: rgba(0,0,0,0.5);
  }

  .outer-wrapper {
    width: 100%;
    display: relative;
  }

  .inner-wrapper {
    height: 100%;
    width: 100%;
    display: flex;
  }

  .controls button:first-child {
    position: absolute;
    left: 0;
    top: 50%;
    @apply my-auto;
  }

  .controls button:last-child {
    position: absolute;
    right: 0;
    top: 50%;
    @apply my-auto;
  }

  .slide {
    flex: 1 0 auto;
    width: 100%;
    height: 100%;
    background: red;
    align-items: center;
    justify-content: center;
    display: flex;
    text-align: center;
    font-weight: bold;
    font-size: 2rem;
    color: white;
  }

  .controls {
    text-align: center;
    width: 100%;
    display: block;
    @apply font-bold;
  }
</style>
