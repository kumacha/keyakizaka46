<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col v-for="(gallery, index) in GallerysSingleArray" :key="index" cols="12" sm="6">
          <v-hover v-slot="{ hover }">
            <v-card :elevation="hover ? 12 : 2" :class="{ 'on-hover': hover }" height="315px" width="560px"
              style="background-color:transparent;">
              <a :href="gallery.url">
              <v-img class="galleryitem" v-bind:src="gallery.src" :ripple="true" height="315px" width="560px"></v-img>
              </a>
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
  $(function() {
//   Mobile判定
//   var mobile = false;
//   var ua = navigator.userAgent;
//   if (
//     ua.indexOf("iPhone") > 0 ||
//     ua.indexOf("iPod") > 0 ||
//     ua.indexOf("iPad") > 0 ||
//     (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
//   ) {
//     mobile = true;
//   }
//   スマホの場合muted属性追加
//   if (mobile) {
//     $("iframe").each(function() {
//       $(this).attr("muted", "");
//     });
//   }
  $(".galleryitem").click(function() {
    var player = $(this).next("iframe")[0].contentWindow;
    player.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    $(this).hide();
  });
});
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
              type: gallerys.type
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