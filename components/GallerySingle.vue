<template>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-for="(gallery, index) in GallerysSingleArray" :key="index">
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
        GallerysSingleArray: [],
      }
    },
    created() {
      const that = this
      const gallerys = firebase.firestore().collection("gallery").orderBy("number", "asc")
      gallerys.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const gallerys = doc.data()
          that.GallerysSingleArray = [
            ...that.GallerysSingleArray,
            {
              name: gallerys.name,
              src: gallerys.src,
              single: gallerys.single,
              number: gallerys.number,
              title: gallerys.title,
              url: gallerys.url,
              type:gallerys.type
            },
          ]
        })
      })
    },
  }
</script>

<style>

</style>