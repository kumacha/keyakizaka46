<template>
<v-main>


  <div class="sakura-intro">
    <v-img v-bind:src="require('@/assets/image/history/sakurazaka46/sakurazaka1.jpg')">
    </v-img>
    </div>
  </v-main>
</template>

<script>
export default {
  layout: 'SakurazakaDefault',
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

  .sakura-intro {
    text-align: center;
    margin: auto;
  }
</style>