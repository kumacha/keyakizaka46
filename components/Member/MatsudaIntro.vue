<template>
  <v-container>
    <div class="ishimori-text">
      <p>
       欅坂46（現：櫻坂46）の２期生であり、宮崎県出身の21歳である。欅坂４６に加入する前は銀行に勤めていた。ニックネームはまつり・まりな。２期生の中ではおかあさんキャラであり、バラエティーでも積極的にガヤを担当したりと、櫻坂46では副キャプテンとして選出されるほどしっかりしている。ネプリーグである事件を起こした張本人ということでその事をよくMCやスタッフにいじられている。また、「欅って書けない？」での２期生運動能力チェックでは記録が普通すぎて、Missダイジェストという称号がついてしまった。よくいじられるのも彼女の愛想がよく、返しが良いことが影響しているのだろう。LIVEでは志田愛佳から「危なっかしい計画」の煽りを引き継いでいる。
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
            src: require("@/assets/image/member/matsuda/matsuda1.jpg"),
          },
          {
            src: require("@/assets/image/member/matsuda/matsuda2.jpg"),
          },
          {
            src: require("@/assets/image/member/matsuda/matsuda3.jpg"),
          },
          {
            src: require("@/assets/image/member/matsuda/matsuda4.jpg"),
          },
          {
            src: require("@/assets/image/member/matsuda/matsuda5.jpg"),
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
