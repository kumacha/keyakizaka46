<template>
  <v-container>
    <div class="uemura-text">
      <p>
        欅坂46(現：櫻坂46)の1期生であり、千葉県出身の23歳。長い黒髪と切り揃えられた前髪が特徴であり、番組当初に紹介された真っ白な私服から、通称「千葉の妖精」と呼ばれる。<br>
        デビュー当時は特技としてトランペットを披露するものの腕前は絶望的であり、番組内では「ブハブハ」と称されていた。<br>
        趣味にサッカー観戦を挙げており、Jリーグのチーム「柏木レイソル」のファンであることを公言している。様々な選手のサインが入ったユニフォームを持っているなど、かなり熱狂的なファンである模様。過去には、日向坂46の影山優佳と共にサッカーに関する対談企画も開催された。<br>
        高校生時代はケンタッキー・フライド・チキンで3年間アルバイトをしていたことを明かしており、ケンタッキーの50周年企画ではインタビューや写真が掲載された。<br>
        4thシングル『不協和音』では、フロント(1列目)を務めている。
      </p>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <div class="picture-title" style="text-align:center;">
          <p>Photos</p>
        </div>
        <div class="carousel">
          <v-carousel width="570px" height="400px" :show-arrows-on-hover="true" cycle="true" interval="3500">
            <v-carousel-item class="slideshow" v-for="(picitem,k) in picitems" :key="k" :src="picitem.src"
              hide-delimiter-background>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
      <v-col cols="12" md="6">
        <div class="picture-title" style="text-align:center;">
          <p>Promotion Video</p>
        </div>
        <div class="carousel2">
          <v-carousel width="570px" height="400px" :show-arrows-on-hover="true" cycle="true" interval="3500">
            <v-carousel-item class="slideshow" v-for="(pvitem,i) in pvitems" :key="i" :src="pvitem.src"
              hide-delimiter-background>
            </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
  import GoMember from '~/components/Member/GoMember.vue'
  export default {
    data() {
      return {
        pvitems: [{
            src: require("@/assets/image/member/uemura/uemurapv1.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv2.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv3.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv4.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv5.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/uemura/uemura1.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura2.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura3.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura4.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura5.jpg"),
          },
        ],
      }
    },
    components: {
      GoMember,
    }
  }

</script>

<style>
  .uemura-text {
    margin-top: 25px;
    font-size: 25px;
    width: 1200px;
    margin-bottom: 30px;

  }

  .carousel {
    width: 570px;
    height: auto;
  }

</style>
