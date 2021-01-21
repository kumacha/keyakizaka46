<template>
    <v-content>
      <v-container>
            <v-row>
              <v-col v-for="(gallery, index) in GallerysSingleArray" :key="index" cols="12" sm="6">
                <v-hover v-slot="{ hover }">
                <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" height="365px" width="500px">
                <v-img class="gallery-img" v-bind:src="gallery.src" :ripple="true" height="365px" width="500px"></v-img>
                <v-card-title class="title white--text">
                  <v-row class="fill-height flex-column" justify="space-between">
                    <div class="align-self-center">
                      <v-btn v-for="(icon, index) in icons" :key="index" :class="{ 'show-btns': hover }"
                        :color="transparent" icon>
                        <v-icon :class="{ 'show-btns': hover }" :color="transparent">
                          {{ icon }}
                        </v-icon>
                      </v-btn>
                    </div>
                  </v-row>
                </v-card-title>
                </v-card>
          </v-hover>
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
.v-card {
    transition: opacity .2s ease-in-out;
  }

  .v-card:not(.on-hover) {
    opacity: 1.0;
  }

</style>