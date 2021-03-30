<script>
  import { url as urll } from '@roxi/routify/runtime'
  import { metatags, prefetch } from '@roxi/routify'
  import { fly } from 'svelte/transition'
  import Title from '../../components/Title.svelte'
  import Image from '../../components/Image.svelte'
  import menu from '../../content/pages/menu'
  import V from '../../components/IntersectingViewport.svelte'
  import { calendar } from '../../lib/dayjs'
  import svitsConfig from '../../../svits.config'
  import PostCard from '../../components/PostCard.svelte'

  import { getCollection } from '../../collections'

  const PAGESIZE = 1
  let page = 1
  let isAsc = false

  const total = getCollection('posts').elements.length

  const getPosts = () => getCollection(
    'posts',
    {
      field: 'date',
      order: isAsc ? 'asc' : 'desc',
      isDate: true
    })
    .paginate(PAGESIZE, page)
    .elements

  let posts = getPosts()

  const loadMore = () => () => {
    if (posts.length > total ) {
      return
    }
    page++
    const newPosts = getPosts()
    posts = [
      ...posts,
      ...newPosts
    ]
  }

  const changeOrder = () => () => {
    page = 1
    isAsc = !isAsc
    posts = getPosts()
  }

  metatags.title = 'Our blog | ' + svitsConfig.name
</script>

<div class="content">
  <div in:fly={{y: -10, duration: 500, delay: 100}}>
    <Title first="Arista Catering" second="Our blog"/>
    <p
      class="mt-12 mb-6 text-lg text-center text-gray-500 sm:text-xl"
      >{menu.description}</p
    >
    <div
      class="flex flex-col my-12 text-gray-700 category dark:text-gray-500"
      in:fly={{x: -20, duration: 500}}
    >
      <div
        class="category-link"
      >
        <span class="title">Articles</span>
        <div class="flex items-center no-underline cursor-pointer" on:click={changeOrder}>
          <span class="text-sm sm:text-base hover:underline">Order - { isAsc ? 'Olders first' : 'Newers first' }</span>
          <span class="ml-2 text-xs i jam:chevron-down sm:text-sm transform duration-200" class:rotate-180={!isAsc}></span>
        </div>
      </div>
      <span class="w-full m-auto bg-green-500" style="height: 2px"></span>
      <div class="py-4 flex flex-col space-y-6">
        {#each posts as p}
          <PostCard {...p} />
        {/each}
        <V on:intersect={loadMore} style="width: 100%; height: 0px;" />
      </div>
    </div>
  </div>
</div>

<style>
  .category-link {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @apply font-title;
    @apply text-2xl;
  }

  .category-link:hover .title {
    text-decoration: underline;
  }

  .post-image {
    height: 40vh;
  }

  @screen sm {
    .post-details, .post-image {
      height: 50vh;
    }
    .category-link {
      @apply text-4xl;
    }
  }
</style>
