<template>
  <v-container>
    <div class="nagasawa-text">
      <p>
        欅坂46(現：櫻坂46)の1期生であり、山形県出身の23歳(卒業当時)。特技はバイオリンであり、かなりの腕前を誇る(本人は「少しだけできる」と評する)。名前の読み方は「ななこ」であり、「ななか」ではないため注意が必要。<br>
        デビュー当初は清楚なイメージやお嬢様の様な雰囲気を醸し出していたが、徐々に独特な感性や奇妙な言動が目立ち始め、独自の世界観やキャラ(サイコパス)を確立した。渡辺梨加(1期生)や松平璃子(2期生)と特に仲が良く、特に渡辺梨加とはパン作りのロケ企画が放送された。アイスやお菓子が好物であり、かなりの偏食家。<br>
        また、少女漫画が好きであり、特に『りぼん』を愛読している。さらに漫画を読むだけでなく、かなりクオリティの高い少女漫画を描くため、『りぼん』に連載を持つ他、賞レースの審査員を務めるほどの実力を持つ。<br>
        メンバーやファンからは「なーこ」の愛称で親しまれており、番組MCからは「長沢君」や「なーこ先生」と呼ばれている。長沢のファンは通称「なーこ教」と呼ばれ、長沢の築く独自の世界観や雰囲気に魅入られ入信する。<br>
        4thシングル『不協和音』では、フロント(1列目)を務める。2020年3月31日に欅坂46を卒業した。<br>
        現在では、ファンクラブやYouTubeチャンネルを開設しており、インターネット上で活動の場を広げている。
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
            src: require("@/assets/image/member/nagasawa/nagasawapv1.png"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawapv2.png"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawapv3.png"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawapv4.png"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawapv5.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/nagasawa/nagasawa1.jpg"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawa2.jpg"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawa3.jpg"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawa4.jpg"),
          },
          {
            src: require("@/assets/image/member/nagasawa/nagasawa5.jpg"),
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
  .nagasawa-text {
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
