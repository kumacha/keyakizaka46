<template>
    <v-content>
      <v-container>
            <v-row>
              <v-col v-for="(gallery, index) in GallerysTrailerArray" :key="index" cols="12" sm="6">
                <v-img class="gallery-img" v-bind:src="gallery.src" :ripple="true" height="365px" width="500px"></v-img>
                <span v-text="gallery.name"></span>
              </v-col>
            </v-row>
      </v-container>
    </v-content>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        GallerysTrailerArray: [],
      }
    },
    created() {
      const that = this
      const gallerys = firebase.firestore().collection("galleryLive")
      gallerys.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const gallerys = doc.data()
          that.GallerysTrailerArray = [
            ...that.GallerysTrailerArray,
            {
              name: gallerys.name,
              src: gallerys.src
            },
          ]
        })
      })
    },
  }
</script>

<style>

</style>