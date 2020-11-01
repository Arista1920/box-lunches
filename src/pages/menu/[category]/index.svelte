<script>
  import { params } from '@roxi/routify'
  import Title from '../../../components/Title.svelte'
  import { fly } from 'svelte/transition'
  import categories from '../../../lib/categories'
  $: category = categories[$params.category]
</script>

{#if category}
  <div class="content">
    <div in:fly={{y: -10, duration: 500, delay: 100}}>
      <Title first="Our menu" second={category}/>
    </div>
  </div>
{/if}
