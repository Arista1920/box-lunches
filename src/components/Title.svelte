<script>
  export let first
  export let second
</script>

<h1
  class="flex flex-col m-auto text-center -z-10"
>
  {#if first}
    <span
      class="-mb-8 text-5xl leading-tight text-gray-200 select-none sm:-mb-12 -z-10 dark:opacity-25 sm:text-8xl dark:text-gray-500 font-handwritten"
      >{first}</span
    >
  {/if}
  {#if second}
    <span
      class="text-4xl text-center text-gray-700 sm:text-6xl dark:text-gray-500 font-title"
      >{second}</span
    >
  {/if}
  <span class="w-32 m-auto bg-green-500" style="height: 2px"></span></h1
>
