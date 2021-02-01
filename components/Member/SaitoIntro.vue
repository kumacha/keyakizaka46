<template>
  <v-container>
    <div class="ishimori-text">
      <p>
        欅坂46（現：櫻坂46）の1期生であり、東京都出身の22歳である。ニックネームはふーちゃん。欅坂46に加入する前からダンス経験があり、グループの中でもダンスが上手で、メンバーに振り付けを教えていることもあるためダンスリーダーとしての位置である。メンバーの中では長濱ねると特に仲が良く、『欅って書けない？』の企画で両想いとなり、2人で長濱ねるの故郷である長崎県五島列島を一緒に旅行した。更に欅坂46のブログ番長であり、ブログの更新率は一番高くグループの現状を知るには彼女のブログを見ることがマストであった。メンバーの事をよく見ていてグループの母親的存在。ポジティブでメンバーやファン想いで努力家なふーちゃんはこれからも櫻坂の母親的な存在として欠かせない。櫻坂46の「Buddies」での笑顔パフォーマンスはファンの間で話題となっていた。
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
        picitems: [{
            src: require("@/assets/image/member/saito/saito1.jpg"),
          },
          {
            src: require("@/assets/image/member/saito/saito2.jpg"),
          },
          {
            src: require("@/assets/image/member/saito/saito3.jpg"),
          },
          {
            src: require("@/assets/image/member/saito/saito4.jpg"),
          },
          {
            src: require("@/assets/image/member/saito/saito5.jpg"),
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
  .ishimori-text {
    margin-top: 25px;
    font-size: 20px;
    width: 1200px;
    margin-bottom: 30px;

  }

  .carousel {
    width: 570px;
    height: auto;
  }

</style>
