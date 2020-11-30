<script>
  import V from '../../IntersectingViewport.svelte'
  import PContainer from '../../motion/ParallaxContainer.svelte'
  import PObject from '../../motion/ParallaxObject.svelte'
</script>

<div class="mt-24 bg-gray-100 dark:bg-gray-800 dark:bg-opacity-0 duration-200">
  <V class="flex flex-wrap py-12 -mx-4 content" let:intersecting oneWay>
    <PContainer
      class="w-full lg:w-1/3 animate {intersecting ? 'intersecting' : ''} p-4 -mt-32"
      style="--animate-x: -3rem"
      let:offset
    >
      <div class="w-full overflow-hidden shadow-xl lg:mr-auto h-80 lg:h-7/10 xxl:h-full" style="border-radius: 30px">
        <PObject class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
          <div class="w-full h-full bg-center bg-cover" style="background-image: url(/images/bg3.webp)">
          </div>
        </PObject>
      </div>
    </PContainer>
    <div
      class="w-full p-4 text-justify text-gray-500 md:w-2/3 animate sm:text-xl"
      class:intersecting
      style="--animate-y: 2rem"
    >
      <p class="mb-6">
      We offers pre-packaged individual serving box lunches featuring full hot meals or sandwiches, salads and wraps using the freshest ingredients delivered to home, office or employee lounge.
      </p>
      <p>
      We are a Seattle based catering company providing individually pre-packaged fresh meals; beautifully presented with the corporate client in mind. We provide our clients with multiple menu and packaging alternatives for catered events from breakfast, lunch and dinner options. All of our meals are wrapped in stay-fresh packaging with meal delivery to your office.
      </p>
    </div>
  </V>
</div>
