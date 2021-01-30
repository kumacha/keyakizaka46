<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col v-for="(gallery, index) in GallerysTrailerArray" :key="index" cols="12" sm="6">
          <div class="global_wrapper">
            <div class="youtube">
              <img class="thumb" v-bind:src="gallery.src" data-video="0tkzaClk6Ho" height="315" width="560"/>
              <iframe width="560" height="315" v-bind:src="gallery.url" frameborder="0" allowfullscreen autoplay
                playsinline class="movie"></iframe>
                </div>
          </div>
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
              src: gallerys.src,
              url: gallerys.url,
            },
          ]
        })
      })
    },
  }
  $(function () {
    //Mobile判定
    var mobile = false;
    var ua = navigator.userAgent;
    if (
      ua.indexOf("iPhone") > 0 ||
      ua.indexOf("iPod") > 0 ||
      ua.indexOf("iPad") > 0 ||
      (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
    ) {
      mobile = true;
    }
    //スマホの場合muted属性追加
    if (mobile) {
      $("iframe").each(function () {
        $(this).attr("muted", "");
      });
    }
    $(".v-responsive__content").click(function () {
      var player = $(this).next("iframe")[0].contentWindow;
      player.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
      $(this).hide();
    });
  });
</script>

<style>
.global_wrapper {
  width: 560px;
  margin: 0 auto;
}

.youtube {
  position: relative;
  width: 560px;
  height: 315px;
}

.player {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}
</style>