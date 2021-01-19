<template>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-for="(gallery, index) in GallerysTrailerArray" :key="index">
                <v-img class="gallery-img" v-bind:src="gallery.src" :ripple="true" height="412.5px" width="550px"></v-img>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
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