<script>
  import Title from '../../Title.svelte'
  import V from '../../IntersectingViewport.svelte'
  import PContainer from '../../motion/ParallaxContainer.svelte'
  import PObject from '../../motion/ParallaxObject.svelte'
</script>

<div class="py-12 content">
  <Title first="We are delicious" second="What do we offer?"/>
</div>

<div class="flex flex-col w-full py-12 pb-24 overflow-hidden text-xl font-light text-gray-500 lg:w-8/10 md:px-6 md:m-auto">
  <V class="flex w-full" let:intersecting oneWay>
    <div class="flex flex-col w-9/10 lg:w-1/2 animate lg:pr-16" style="--animate-y: -3rem" class:intersecting oneWay>
      <div class="w-full mb-12 overflow-hidden media rounded-tr-3xl md:rounded-3xl rounded-br-3xl" style="height: 70vh;">
        <img src="/images/uploads/palacinke.webp" alt="Breakfast Boxes" class="object-cover w-full h-full">
      </div>
      <div>
        <Title first="Breakfasts" second="Breakfast Boxes"></Title>
      </div>
    </div>
  </V>
  <div class="flex flex-wrap my-24 lg:my-24 lg:-mt-36">
    <V class="flex flex-col ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pr-16 lg:mt-72" let:intersecting oneWay>
      <div class="animate" style="--animate-y: -3rem" class:intersecting>
        <div class="w-full mb-12 overflow-hidden rounded-tl-3xl rounded-bl-3xl md:rounded-3xl" style="height: 80vh;">
          <img src="/images/uploads/palacinke.webp" alt="Breakfast Boxes" class="object-cover w-full h-full">
        </div>
        <div>
          <Title first="Sandwiches" second="Sandwich Box Lunches"></Title>
        </div>
      </div>
    </V>

    <V class="flex flex-col mt-24 lg:mr-0 lg:ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pl-16 lg:mt-0" let:intersecting oneWay>
      <div class="animate" style="--animate-y: -3rem" class:intersecting>
        <div class="w-full mb-12 overflow-hidden media rounded-tr-3xl md:rounded-3xl rounded-br-3xl" style="height: 80vh;">
          <img src="/images/uploads/palacinke.webp" alt="Breakfast Boxes" class="object-cover w-full h-full">
        </div>
        <div>
          <Title first="Meals" second="Box Meals"></Title>
        </div>
      </div>
    </V>
  </div>

  <V class="flex justify-end w-full lg:-mt-60" let:intersecting>
    <div class="flex flex-col animate w-9/10 lg:pl-16 lg:w-1/2" style="--animate-y: -3rem" class:intersecting>
      <div class="">
        <div class="w-full mb-12 overflow-hidden media rounded-tl-3xl md:rounded-3xl rounded-bl-3xl" style="height: 80vh;">
          <img src="/images/uploads/palacinke.webp" alt="Breakfast Boxes" class="object-cover w-full h-full">
        </div>
        <div>
          <Title first="Salads" second="Salad Box Lunches"></Title>
        </div>
      </div>
    </div>
  </V>
</div>
