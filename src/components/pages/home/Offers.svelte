<script>
  import Title from '../../Title.svelte'
  import V from '../../IntersectingViewport.svelte'
  import PContainer from '../../motion/ParallaxContainer.svelte'
  import PObject from '../../motion/ParallaxObject.svelte'
  import Tilt from '../../Tilt.svelte'
  import { categories as c } from '../../../content/pages/menu'

  const categories = Object.keys(c).map(k => ({
    url: '/menu/'+k,
    ...c[k],
  }))
</script>

<style>
  .img {
    width: 100%;
    height: 50vh;
    overflow: hidden;
    @apply mb-8;
    @apply shadow-lg;
    @apply duration-200;
  }

  .img-l:hover .img, .img-r:hover .img {
    @apply shadow-xl;
  }

  .img-l .img {
    @apply rounded-tr-xl;
    @apply rounded-br-xl;
  }

  .img-r .img {
    @apply rounded-tl-xl;
    @apply rounded-bl-xl;
  }

  @screen  md {
    .img {
      @apply mx-auto;
      @apply rounded-xl;
    }
  }

  @screen lg {
    .img-l, .img-r {
      @apply transform;
      @apply rotate-3;
    }
    .img-l.first, .img-r {
      @apply transform;
      @apply -rotate-3;
    }
    .img-r.last {
      @apply transform;
      @apply rotate-3;
    }
    .img-l {
      --animate-x: -3rem;
    }
  }
</style>

<div class="py-12 content">
  <Title first="We are delicious" second="What do we offer?"/>
</div>

<div class="relative flex flex-col w-full py-12 pb-24 text-xl font-light text-gray-500 lg:w-8/10 md:px-6 md:m-auto">
  <V class="absolute right-0 h-24 text-gray-700 fill-current dark:text-gray-500 rotate-12 transform w-2/10 -translate-x-4/10" oneWay>
    <div class="animate" style="--animate-time: 1s">
      {#await fetch('/images/arrow.svg') then res}
        {#await res.text() then svg}
          {@html svg}
        {/await}
      {/await}
    </div>
  </V>
  <V class="absolute bottom-0 text-gray-700 fill-current dark:text-gray-500 -rotate-12 transform w-2/10 translate-x-4/10 -translate-y-52 scale-invert">
    <div class="animate" style="--animate-time: 1s">
      {#await fetch('/images/arrow.svg') then res}
        {#await res.text() then svg}
          {@html svg}
        {/await}
      {/await}
    </div>
  </V>
  <V class="flex w-full" oneWay>
    <a class="flex flex-col w-9/10 lg:w-1/2 animate lg:pr-16 img-l first" style="--animate-time: 1s" href={categories[0].url}>
      <Tilt multiplier="5" clickable perspective="200">
        <PContainer let:offset>
          <div class="img">
            <PObject class="w-full img-c" offset={offset} motion={false} style="height: 110%" scaleFactor={10}>
              <div class="w-full h-full bg-center bg-cover" style='background-image: url("{categories[0].image}")'>
              </div>
            </PObject>
          </div>
        </PContainer>
        <div>
          <Title line={false} second={categories[0].title}></Title>
        </div>
      </Tilt>
    </a>
  </V>
  <div class="flex flex-wrap my-16 lg:my-24 lg:-mt-36">
    <V class="flex flex-col ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pr-16 lg:mt-72" oneWay>
      <Tilt multiplier="5" clickable perspective="200">
        <a href={categories[1].url}>
          <div class="animate img-r" style="--animate-time: 1s">
            <PContainer let:offset>
              <div class="img">
                <PObject class="w-full img-c" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
                  <div class="w-full h-full bg-center bg-cover" style='background-image: url("{categories[1].image}")'>
                  </div>
                </PObject>
              </div>
              </PContainer>
              <div>
                <Title line={false} second={categories[1].title}></Title>
              </div>
          </div>
        </a>
      </Tilt>
    </V>

    <V class="flex flex-col mt-16 lg:mr-0 lg:ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pl-16 lg:mt-0" oneWay>
      <Tilt multiplier="5" clickable perspective="200">
        <a href={categories[2].url}>
          <div class="animate img-l" style="--animate-time: 1s">
            <PContainer let:offset>
              <div class="img">
                <PObject class="w-full img-c" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
                  <div class="w-full h-full bg-center bg-cover" style='background-image: url("{categories[2].image}")'>
                  </div>
                </PObject>
              </div>
            </PContainer>
            <div>
              <Title line={false} second={categories[2].title}></Title>
            </div>
          </div>
        </a>
      </Tilt>
    </V>
  </div>

  <div class="flex flex-wrap w-full lg:my-24 lg:-mt-72">
    <!--V class="flex flex-col ml-auto w-9/10 lg:w-1/2 lg:ml-0 lg:pr-16 lg:mt-72" oneWay>
      <Tilt multiplier="5" clickable perspective="200">
        <a href={categories[3].url}>
          <div class="animate img-r" style="- -animate-time: 1s">
            <PContainer let:offset>
              <div class="img">
                <PObject class="w-full img-c" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
                  <div class="w-full h-full bg-center bg-cover" style='background-image: url("{categories[3].image}")'>
                  </div>
                </PObject>
              </div>
            </PContainer>
            <div>
              <Title line={false} second={categories[3].title}></Title>
            </div>
          </div>
        </a>
      </Tilt>
      </V-->
    <div class="hidden w-1/2 lg:block">
    </div>

    <V class="flex flex-col mt-16 ml-auto mr-0 w-9/10 lg:w-1/2 lg:ml-0 lg:pl-16 lg:mt-0" oneWay>
      <Tilt multiplier="5" clickable perspective="200">
        <a href={categories[3].url}>
          <div class="animate img-r last" style="--animate-time: 1s">
            <PContainer let:offset>
              <div class="img">
                <PObject class="w-full img-c" offset={offset} motion={false} style="height: 120%" scaleFactor={10}>
                  <div class="w-full h-full bg-center bg-cover" style='background-image: url("{categories[3].image}")'>
                  </div>
                </PObject>
              </div>
            </PContainer>
            <div>
              <Title line={false} second={categories[3].title}></Title>
            </div>
          </div>
        </a>
      </Tilt>
    </V>
  </div>

  <a
    title="See our complete menu"
    href="/menu"
    class="flex items-center m-auto mt-12 text-xl text-center text-gray-700 lg:mt-0 sm:text-2xl font-title"
    ><span class="hover:underline">See our menu here</span> <span class="i jam:chevron-right"></span></a
  >
</div>
