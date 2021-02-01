<template>
  <v-container>
    <div class="ishimori-text">
      <p>
       欅坂46（現：櫻坂46）の1期生であり、東京都出身の24歳である。ニックネームはしーちゃん・さとし。欅坂46の活動休止と共に2020年10月13日にグループを卒業した。自他ともに認める「話の長い人」であり、「欅って書けない？」の企画で付けられたキャッチコピーが「おしゃべり足長星人」や「足長ダル絡み美大生」などと存在する。2期生の武元唯衣の推しメンであり、冠番組内でのペアロケメンバーを決める企画で両想いとなり後日ロケを行ったり、バレンタイン企画では武元が佐藤詩織を本命に指名されている。バレエ経験があり、「二人セゾン」の「道端咲いている雑草にも名前があるなんて忘れてた～気づかれず踏まれても悲鳴をあげない存在」の部分のダンスが見所であり、一番キレがあると言っても過言ではないくらいである。卒業後は自身のInstagramのアカウントを開設し、自身の芸術の道に進んでいる。 
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
            src: require("@/assets/image/member/sato/sato1.jpg"),
          },
          {
            src: require("@/assets/image/member/sato/sato2.jpg"),
          },
          {
            src: require("@/assets/image/member/sato/sato3.jpg"),
          },
          {
            src: require("@/assets/image/member/sato/sato4.jpg"),
          },
          {
            src: require("@/assets/image/member/sato/sato5.jpg"),
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
