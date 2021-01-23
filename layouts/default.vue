<template>
  <v-app>
    <div class="g-nav">
      <Navigation />
    </div>
    <Video />
    <Nuxt />
  </v-app>
</template>

<script>
  import Navigation from '~/components/Navigation.vue'
  import Video from '~/components/Video.vue'
  export default {
    components: {
      Navigation,
      Video,
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
  }

  body::-webkit-scrollbar {
    /* Chrome, Safariのスクロールバー削除 */
    display: none;
  }
</style>
