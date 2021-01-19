<template>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-for="(gallery, index) in GallerysCouplingArray" :key="index">
                <v-img class="gallery-img" v-bind:src="gallery.src" :ripple="true" height="412.5px" width="550px"></v-img>
                <span v-text="gallery.name"></span>
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
        GallerysCouplingArray: [],
      }
    },
    created() {
      const that = this
      const gallerys = firebase.firestore().collection("galleryCoupling").orderBy("array", "asc")
      gallerys.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const gallerys = doc.data()
          that.GallerysCouplingArray = [
            ...that.GallerysCouplingArray,
            {
              name: gallerys.name,
              src: gallerys.src,
              array: gallerys.array,
            },
          ]
        })
      })
    },
  }
</script>

<style>

</style>