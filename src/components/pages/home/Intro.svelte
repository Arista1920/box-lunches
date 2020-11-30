<script>
  import Image from '../../Image.svelte'
  import Title from '../../Title.svelte'
  import V from '../../IntersectingViewport.svelte'
  import { preferences } from '../../../stores/preferences'

  $: dark = $preferences.darkMode
</script>

<div class="py-12 content">
  <V let:intersecting oneWay>
    <div class="animate" class:intersecting style="--animate-y: 4rem">
      <Title first="Arista Catering" second="Box Lunches Seattle"/>
      <p class="mt-12 mb-6 text-lg text-center text-gray-500 sm:text-xl">
      We welcome you to a delicious feast of exquisite dishes in Box Lunches. With a wide range of options to choose from, we guarantee you a sumptuous feast experience with our service!
      </p>
      <Image src="separator{dark ? '-dark' : ''}.png" alt="separator" class="mx-auto mt-16 pointer-events-none select-none"/>
    </div>
  </V>
</div>
