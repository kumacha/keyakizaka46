<template>
  <div class="backvideo">
    <video
      src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/kekaki-backmovie3.mp4?alt=media&token=4a3e2190-e199-425a-9a39-5759ae2bff78"
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