<template>
  <v-container>
    <div class="endo-text">
      <p>
        欅坂46(現：櫻坂46)の2期生であり、神奈川県出身の21歳。特技はダンスであり、中学3年生までの13年間ダンスを続けていた。その実力は折り紙付きであり、補欠ながらも世界大会に出場する程である。メンバーからは、「ひかりん」の愛称で親しまれている。<br>
        高校生の頃に聴いた『太陽ノック』(乃木坂46)に感化され、2018年7月に開催された坂道合同オーディションへ参加を決意する。その後、坂道研修生時代を経て、欅坂46に2期生(新2期生)として配属される。<br>
        趣味は漫画やアニメの鑑賞と話しており、番組内では自身の好きな漫画である『ワンダンス』(講談社)の魅力を熱く語る姿が目立った。また、自身のブログでも漫画やアニメの紹介をしており、かなりの漫画・アニメ好きであることが伺える。<br>
        「そこ曲がったら櫻坂？」にてメンバーが円陣の掛け声を考案する企画では、「Just Trust Yourself　櫻坂46！」という英語混じりの掛け声を考案し、スタジオ内を驚かせた。さらに、実際に決定された掛け声に「Just
        Trust Yourself」の部分が採用され、注目を浴びた。<br>
        同番組内の楽屋の隠し撮り企画では、「コルセットが爆発する戦隊モノ」という独特のコントを展開しながら楽屋を暴れ回る増本を、完全に無視する様子が撮影され、「今までに会ったことのない人種」と話している。
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
            src: require("@/assets/image/member/endo/endopv1.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/endo/endo1.jpg"),
          },
          {
            src: require("@/assets/image/member/endo/endo2.jpg"),
          },
          {
            src: require("@/assets/image/member/endo/endo3.jpg"),
          },
          {
            src: require("@/assets/image/member/endo/endo4.jpg"),
          },
          {
            src: require("@/assets/image/member/endo/endo5.jpg"),
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
  .endo-text {
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
