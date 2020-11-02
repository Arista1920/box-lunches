<footer class="py-8 text-gray-500 footer-bg">
  <div class="flex flex-col justify-between -m-4 md:flex-row content">
    <div class="m-4 section">
      <p class="title">Follow us</p>
      <div class="flex items-center mx-auto text-2xl">
        <a
          href="https://www.youtube.com/channel/UC15qcqtEc4H8I1sFQxVwobw"
          class="mx-2 hover:text-gray-300 duration-200"
          rel="noopener"
          target="_blank"
          ><span class="i jam:youtube"></span></a
        >
        <a
          href="https://www.facebook.com/BoxLunchesSeattle/"
          class="mx-2 hover:text-gray-300 duration-200"
          rel="noopener"
          target="_blank"
          ><span class="i jam:facebook"></span></a
        >
        <a
          href="https://www.instagram.com/box_lunches_seattle/"
          class="mx-2 hover:text-gray-300 duration-200"
          rel="noopener"
          target="_blank"
          ><span class="i jam:instagram"></span></a
        >
      </div>
    </div>
    <div class="m-4 section">
      <p class="title">Contact us</p>
      <a href="mailto:info@box-lunches.com" class="mx-auto my-1 hover:underline">info@box-lunches.com</a>
      <a href="tel:+1-877-538-5888" class="mx-auto my-1 hover:underline">(206)258-3778</a>
    </div>
    <div class="m-4 section">
      <p class="title">Address</p>
      <p>1920 Dexter Ave. N Suite 100 Seattle, WA 98109</p>
    </div>
  </div>
</footer>

<style>
  .footer-bg {
    background-color: #222;
  }

  :global(.dark .footer-bg) {
    background-color: rgb(10, 10, 10);
  }

  .section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  @screen md {
    .section {
      width: 25%;
    }
  }

  .title {
    @apply text-xl;
    @apply text-center;
    @apply uppercase;
    @apply font-title;
    @apply text-white;
  }
</style>
