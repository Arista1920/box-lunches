<script>
  import { onMount } from 'svelte'
  import { fly, fade } from 'svelte/transition'
  import { hslide } from './hslide.js'
  import { beforeUrlChange } from '@roxi/routify'
  import { preferences } from '../../stores/preferences'

  export let slides = [
    {
      content: '1',
      bg: 'linear-gradient(yellow, yellow)',
    },
    {
      content: '2',
      bg: 'linear-gradient(blue, blue)',
    },
    {
      content: '3',
      bg: 'linear-gradient(red, red)',
    },
  ]

  let cur = 0
  export let height = 'auto'
  export let waves

  $: dark = $preferences.darkMode

  function changeSlide(slide) {
    cur = slide
  }

  const clamp = (number, min, max) => Math.min(Math.max(number, min), max)
  const transition_args = {
    duration: 800,
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

<div class="overflow-hidden main">
  <div class="overflow-hidden outer-wrapper" style="height: {height}">
    <div class="relative overflow-hidden inner-wrapper">
      {#each slides as slide, id}
        {#if id === cur}
          <div
            in:hslide={transition_args}
            out:hslide={transition_args}
            class="shadow-2xl slide"
            style="
              background:
                linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7)), {slide.bg}, linear-gradient(rgba(10,10,10,0.7), rgba(10,10,10,0.7));
              background-size: cover;
              background-position: center;
            "
          >
            <h1
              in:fly={{y: 100, duration: 500, delay: 400}}
              out:fly|local={{y: -100, duration: 200}}
              class="w-full p-6 m-auto text-5xl md:text-6xl lg:w-7/10 font-handwritten"
              >
              {#each slide.content as char, i}
                {#if char === '\n'}
                  <br/>
                {:else}
                  <span
                    in:fly={{
                      y: 100,
                      delay: i * (1000 / slide.content.length),
                      duration: 1000
                    }}
                  >{char}</span>
                {/if}
              {/each}
            </h1>
          </div>
        {/if}
      {/each}
      {#if waves}
        <div
          style="
                 position: absolute;
                 bottom: 0;
                 left: 0;
                 width: 100%;
                 overflow: hidden;
                 line-height: 0;
                 transform: rotate(180deg);
                 "
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style="
                   display: block;
                   position: relative;
                   display: block;
                   width: calc(100% + 1.3px);
                   height: 64px;
                   "
          >
          <path class="{dark ? 'dark-path' : 'white-path'}" d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
          <path class="{dark ? 'dark-path' : 'white-path'}" d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
          <path class="{dark ? 'dark-path' : 'white-path'}" d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
          </svg>
        </div>
      {/if}
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

  path {
    transition: fill .2s ease;
  }

  .white-path {
    fill: #fff;
  }

  .dark-path {
    fill: #222;
  }
</style>
