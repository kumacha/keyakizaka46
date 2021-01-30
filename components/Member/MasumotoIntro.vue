<template>
  <v-container>
    <div class="masumoto-text">
      <p>
        欅坂46(現：櫻坂46)の2期生であり、小池美波(1期生)や井上梨名(2期生)と同じ兵庫県出身の18歳。特技はルービックキューブであり、腕前はかなり高い(平均タイムは約37秒《本人談》)。<br>
        特に幸阪茉里乃(2期生)と仲が良い様子が目立ち、冠番組である「そこ曲がったら櫻坂？」では幸阪と共にマジックショーを披露した。<br>
        独特の雰囲気や言葉遣いを展開するため、良く言えば独自の世界観を築いており、悪く言えば頭のネジや歯車が数本消失している。夢は「『すごい人』になること」であり、誰が見てもすごいと感じる人になりたいと考えている。<br>
        冠番組である「欅って書けない？」や「そこ曲がったら櫻坂？」では、先述した独自の世界観や言葉遣いを遺憾なく発揮している。基本的に人の話を聞いていない節があり、番組内のルールブレイカーとして活躍する。
        <br>好きな炊飯器は、5合。幸阪と上村を取り合い、号泣する。<br>
        また、虫を殺さないほどの優しさを持っているが、実際は「虫は意見しない(喋らない)ため、自身が上に立てていると感じるから殺さない」という理由のため。<br>
        筋トレを行っているらしく、腕相撲には自身があるそうだが、幸阪からは「骨」と評されている。自宅の洗濯機からは、魚肉ソーセージの臭いが漂う。
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
          src: require("@/assets/image/member/masumoto/masumotopv1.png"),
        }, ],

        picitems: [{
            src: require("@/assets/image/member/masumoto/masumoto1.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto2.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto3.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto4.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto5.jpg"),
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
  .masumoto-text {
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
