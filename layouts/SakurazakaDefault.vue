<template>
  <v-app dark>
    <div class="g-nav">
      <Navigationh />
    </div>
    <Sakurazakavideo/>
    <Nuxt/>
  </v-app>
</template>

<script>
  import Navigationh from '~/components/Layouts/Navigationh.vue'
  import Sakurazakavideo from '~/components/Layouts/Sakurazakavideo.vue'
  export default {
    components: {
      Navigationh,
      Sakurazakavideo
    }
  }
</script>

<style>
  p {
    color: white;
  }

  #app {
    font-family:
      YuMincho,
      /* Mac用 */
      'Yu Mincho',
      /* Windows用 */
      serif;
  }

  .v-application p {
    margin-bottom: 0px;
  }

  body {
    position: relative;
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* IE, Edgeのスクロールバー削除 */
    scrollbar-width: none;
    /* Firefoxのスクロールバー削除 */
    background-color: black;
  }

  body::-webkit-scrollbar {
    /* Chrome, Safariのスクロールバー削除 */
    display: none;
  }
</style>
