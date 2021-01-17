<template>
<v-content>
  <v-container>
    <v-carousel height="500px" max-height="400px" :show-arrows-on-hover="true" cycle="true"
    interval="3500" progress="true">
      <v-carousel-item class="slideshow" v-for="(item,i) in items" :key="i" :src="item.src" hide-delimiter-background>
      </v-carousel-item>
    </v-carousel>
  </v-container>
</v-content>
</template>
<script>
  export default {
    data() {
      return {
        items: [{
            src: require("@/assets/image/slideshow1.jpg"),
          },
          {
            src: require("@/assets/image/slideshow2.jpg"),
          },
          {
            src: require("@/assets/image/slideshow3.jpg"),
          },
          {
            src: require("@/assets/image/slideshow4.jpg"),
          },
          {
            src: require("@/assets/image/slideshow5.jpg"),
          },
          {
            src: require("@/assets/image/slideshow6.jpg"),
          },
          {
            src: require("@/assets/image/slideshow7.jpg"),
          },
          {
            src: require("@/assets/image/slideshow8.jpg"),
          },
          {
            src: require("@/assets/image/slideshow9.jpg"),
          },
        ],
      }
    },

  }
</script>

<style>

</style>