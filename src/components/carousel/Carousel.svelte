<script>
  import { onMount } from 'svelte'
  import { fly } from 'svelte/transition'
  import { hslide } from './hslide.js'
  import { beforeUrlChange } from '@roxi/routify'

  let slides = [
    {
      content: 'Don\'t eat less, just eat real.',
      bg: 'url(/images/bg.webp)'
    },
    {
      content: 'Fresh and delicious.',
      bg: 'url(/images/bg.webp)'
    },
  ]

  let cur = 0
  export let height = 'auto'

  function changeSlide(slide) {
    cur = slide
  }

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max)
  const transition_args = {
    duration: 500,
  }

  $beforeUrlChange(() => {
    transition_args.duration = 0
    return true
  })

  export let controls

  function prev(e) {
    let i
    if (cur > 0) {
      i = clamp( --cur, 0, slides.length-1 )
    } else {
      i = slides.length-1
    }
    if (slides[i] != null) {
      cur = i
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

  /*const ARROW_LEFT = 37
  const ARROW_RIGHT = 39
  function handleShortcut(e) {
    if (e.keyCode === ARROW_LEFT ) {
      prev()
    }
    if (e.keyCode === ARROW_RIGHT ) {
      next()
    }
  }*/

</script>

<!--svelte:window on:keyup={handleShortcut} /-->

<div class="main">
  <div class="outer-wrapper" style="height: {height}">
    <div class="overflow-hidden inner-wrapper ">
      {#each slides as slide, id}
        {#if id === cur}
          <div
            in:hslide={transition_args}
            out:hslide={transition_args}
            class="slide"
            style="
              background:
                linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7)), {slide.bg};
              background-size: cover;
              background-position: center;
            "
          >
            <div
              in:fly={{y: 100, duration: 500, delay: 400}}
              out:fly|local={{y: -100, duration: 200}}
              class="w-full p-6 m-auto text-6xl lg:w-7/10"
            >
            {slide.content}
            </div>
          </div>
        {/if}
      {/each}
      {#if controls}
        <div class="controls">
          <button on:click="{()=>prev()}">
            &lt;
          </button>
          <button on:click="{()=>next()}">
            &gt;
          </button>
        </div>
      {/if}
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
    align-items: center;
    display: flex;
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
