<script>
  import Title from '../../components/Title.svelte'
  import { fly } from 'svelte/transition'
</script>

<div class="content">
  <div in:fly={{y: -10, duration: 500, delay: 100}}>
    <Title first="Our menu" second="Taste our meals"/>
  </div>
</div>
