<script>
  import Title from '../../Title.svelte'
  import V from '../../IntersectingViewport.svelte'
  import PContainer from '../../motion/ParallaxContainer.svelte'
  import PObject from '../../motion/ParallaxObject.svelte'
</script>

<style>
  .img {
    width: 100%;
    height: 70vh;
    overflow: hidden;
    @apply shadow-lg;
    @apply mb-8;
  }

  .img-l {
    @apply rounded-tr-3xl;
    @apply rounded-br-3xl;
  }

  .img-r {
    @apply rounded-tl-3xl;
    @apply rounded-bl-3xl;
  }

  @screen  md {
    .img {
      @apply rounded-3xl;
    }
  }
</style>

<div class="py-12 content">
  <Title first="We are delicious" second="What do we offer?"/>
</div>

<div class="flex flex-col w-full py-12 pb-24 overflow-hidden text-xl font-light text-gray-500 lg:w-8/10 md:px-6 md:m-auto">
  <V class="flex w-full" oneWay>
    <div class="flex flex-col w-9/10 lg:w-1/2 animate lg:pr-16" style="--animate-time: 1s">
      <PContainer let:offset>
        <div class="img img-l">
          <PObject class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
            <div class="w-full h-full bg-center bg-cover" style="background-image: url(/images/uploads/palacinke.webp)">
            </div>
          </PObject>
        </div>
      </PContainer>
      <div>
        <Title first="Breakfasts" second="Breakfast Boxes"></Title>
      </div>
    </div>
  </V>
  <div class="flex flex-wrap my-16 lg:my-24 lg:-mt-36">
    <V class="flex flex-col ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pr-16 lg:mt-72" oneWay>
      <div class="animate" style="--animate-time: 1s">
        <PContainer let:offset>
          <div class="img img-r">
            <PObject class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
              <div class="w-full h-full bg-center bg-cover" style="background-image: url(/images/uploads/palacinke.webp)">
              </div>
            </PObject>
          </div>
        </PContainer>
        <div>
          <Title first="Sandwiches" second="Sandwich Box Lunches"></Title>
        </div>
      </div>
    </V>

    <V class="flex flex-col mt-16 lg:mr-0 lg:ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pl-16 lg:mt-0" oneWay>
      <div class="animate" style="--animate-time: 1s">
        <PContainer let:offset>
          <div class="img img-l">
            <PObject class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
              <div class="w-full h-full bg-center bg-cover" style="background-image: url(/images/uploads/palacinke.webp)">
              </div>
            </PObject>
          </div>
        </PContainer>
        <div>
          <Title first="Meals" second="Box Meals"></Title>
        </div>
      </div>
    </V>
  </div>

  <div class="flex flex-wrap lg:my-24 lg:-mt-72">
    <V class="flex flex-col ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pr-16 lg:mt-72" oneWay>
      <div class="animate" style="--animate-time: 1s">
        <PContainer let:offset>
          <div class="img img-r">
            <PObject class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
              <div class="w-full h-full bg-center bg-cover" style="background-image: url(/images/uploads/palacinke.webp)">
              </div>
            </PObject>
          </div>
        </PContainer>
        <div>
          <Title first="Salads" second="Salad Box Lunches"></Title>
        </div>
      </div>
    </V>

    <V class="flex flex-col mt-16 lg:mr-0 lg:ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pl-16 lg:mt-0" oneWay>
      <div class="animate" style="--animate-time: 1s">
        <PContainer let:offset>
          <div class="img img-l">
            <PObject class="w-full" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
              <div class="w-full h-full bg-center bg-cover" style="background-image: url(/images/uploads/palacinke.webp)">
              </div>
            </PObject>
          </div>
        </PContainer>
        <div>
          <Title first="BBQ" second="BBQ Box Meals"></Title>
        </div>
      </div>
    </V>
  </div>
</div>
