<template>
  <div class="backvideo">
    <video
      src="~assets/video/keyaki-backmovie6.mp4"
      type="video/mp4" playsinline loop autoplay muted>
      <img src="~assets/image/slideshow1.png">
    </video>
  </div>
</template>

<script>
export default {

}
</script>

<style>
video {
    position: fixed;
    display: block;
    left: 0;
    top: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    justify-content: center;
    z-index: 0;
  }
</style>