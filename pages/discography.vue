<template>
  <v-content>
    <v-container>
        <img id="first-img" v-bind:src="img_src" @mouseover="hover = true"
        @mouseleave="hover = false" :class="{active: hover}">
        <img id="second-img" v-bind:src="second_src" >
    </v-container>
  </v-content>
</template>

<script>
export default {
  data(){
    return{
      img_src: require("@/assets/image/slideshow1.jpg"),
      second_src: require("@/assets/image/slideshow2.jpg"),
      hover: true,
    }
  }
}
</script>

<style>
 img{
  width: 150px;
  height: 500px;
  object-fit: cover;
  text-align: center;
}
.active{
  opacity: 50%;
  width: auto;
  height: 500px;
}

</style>