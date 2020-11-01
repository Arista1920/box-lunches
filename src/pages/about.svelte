<script>
  import { transparent } from '../components/navigation/Navbar.svelte'
  import svitsConfig from '../../svits.config'
  import { preferences } from '../stores/preferences'
  import { metatags } from '@roxi/routify'
  import Title from '../components/Title.svelte'
  import { fly } from 'svelte/transition'
  import Image from '../components/Image.svelte'

  metatags.title = 'About us | ' + svitsConfig.name

  // import { getCollection } from '../collections'

  $: dark = $preferences.darkMode

  const inArgs = {y: -10, duration: 500, delay: 100}
</script>

<div class="content" in:fly={inArgs}>
  <div class="hidden mb-6 md:mb-24 md:block">
    <Title first="About us" second="Know us"/>
  </div>
  <div class="flex flex-col items-center mb-12 md:flex-row">
    <div class="py-6 md:w-1/2">
      <Title first="Know us" second="Who we are"/>
    </div>
    <p class="text-lg text-justify text-gray-500 md:w-1/2">
    <strong>Box Lunches</strong> is a Seattle based catering company providing individually pre-packaged fresh meals; beautifully presented with the corporate client in mind. We provide our clients with multiple menu and packaging alternatives for catered events from breakfast, lunch and dinner options. All of our meals are wrapped in stay-fresh packaging with meal delivery to your office.
    </p>
  </div>
  <div class="flex flex-col items-center mb-12 md:flex-row-reverse">
    <div class="py-6 md:w-1/2">
      <Title first="Since 2010" second="Our history"/>
    </div>
    <p class="text-lg text-justify text-gray-500 md:w-1/2">
    Established in 2010, <strong>Box Lunches Seattle</strong> was established with the goal of providing lost cost and convenient lunches for corporate events. With many options as well as vegan & gluten-free alternatives we aim to satisfy everyone’s cravings and diet restrictions.
    </p>
  </div>
</div>
