<script>
  export let first
  export let second
  export let line = true
  export let lettering = false
</script>

<h1
  class="flex flex-col m-auto text-center -z-10"
>
  {#if first}
    <span
      class="-mb-3 text-5xl leading-none text-gray-300 select-none sm:-mb-8 -z-10 dark:opacity-25 sm:text-8xl dark:text-gray-500 font-handwritten"
      >{first}</span
    >
  {/if}
  {#if second}
    <span
      class="text-4xl leading-none text-center text-gray-700 sm:text-6xl dark:text-gray-500 font-title"
      class:font-title={!lettering}
      class:font-handwritten={lettering}
      >{second}</span
    >
  {/if}
  {#if line}
    <span class="w-32 m-auto bg-green-500" style="height: 2px"></span>
  {/if}</h1
>
