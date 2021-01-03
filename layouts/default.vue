<template>
<v-main>
<div class="overall">
    <div class="g-nav">
      <Navigation/>
      
      </div>
    <div class="backvideo">
      <video src="../pages/unizon.mp4" type="video/mp4" playsinline loop autoplay muted>
      <img src="../assets/image/slideshow1.png">
       </video>
     
 </div>
    <Nuxt />
  </div>
  </v-main>
</template>

<script>
import Navigation from '~/components/Navigation.vue'
export default {
  components: {
    Navigation,
  }
}
</script>

<style>

p {
  color: white;
}
body{
    position: relative;
    overflow-y: scroll;
        -ms-overflow-style: none;    /* IE, Edgeのスクロールバー削除 */
        scrollbar-width: none;       /* Firefoxのスクロールバー削除 */
}
body::-webkit-scrollbar {  /* Chrome, Safariのスクロールバー削除 */
  display:none;
}
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
    opacity: 100%;
}

</style>
