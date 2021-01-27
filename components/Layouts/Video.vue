<template>
  <div class="backvideo">
    <video
      src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/unizon.mp4?alt=media&token=c18a8871-81be-46c2-884d-1febace64525"
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