<template>
  <v-container>
    <div class="inoue-text">
      <p>
        欅坂46(現：櫻坂46)の2期生であり、兵庫県出身の20歳。上村莉奈・松田里奈に続く、第三のリナである。<br>
        首が長いことから、自身の描いた「いのきりん」というイラストがブログにたびたび登場する。特技はテニスであり、中学生時代は部長を務めた経験を持つ。また絶対音感を特技として挙げているが、真相は定かではない。<br>
        ファンやメンバーからは「いのりちゃん」の愛称で親しまれているが、本人は「井上」を自身のニックネームとして挙げている。<br>
        関西出身であり、吉本興業のお笑いが好きなことから、番組内では積極的なコメントやボケで周囲を楽しませている。特に、番組内ではMCのハライチ・澤部に代わって原田や武元と共に番組MCを務める姿が目立つ。
        また滑舌が悪く、特に「ザ行」の滑舌が絶望的である。井上自身はもう気にしていないと得意げに発言しているが、むしろ周囲が井上の滑舌イジリに飽きているらしい(武元談)。明るい笑顔やはつらつとした言動が目立つ一方、自身のキャラに悩むこともあるという。<br>
        高校の卒業式では、先生の計らいによって井上の入場曲に『二人セゾン』が流されたエピソードを紹介しており、「本当に恥ずかしかった」と語っている。<br>
        トーク力に定評があり、尾関がメインパーソナリティーを務めるラジオ番組「櫻坂46 こちら有楽町星空放送局(通称：こち星)」では、体調不良の尾関に代わってメインパーソナリティーを務めた。
        さらに、トーク力や運動神経だけでなく学力も高く、番組内の学力テストでは5位の実力を示した。番組内ではポンコツっぷりが取り上げられているが、滑舌を除くあらゆる方面に対してオールラウンドな能力を示す点が井上の強みである。<br>
        ライブのアナウンスでは会場内の喫煙を許可し、番組では右腕から繰り出す井上アッパーで澤部を沈めた。
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
          src: require("@/assets/image/member/inoue/inouepv1.png"),
        }, ],

        picitems: [{
            src: require("@/assets/image/member/inoue/inoue1.jpg"),
          },
          {
            src: require("@/assets/image/member/inoue/inoue2.jpg"),
          },
          {
            src: require("@/assets/image/member/inoue/inoue3.jpg"),
          },
          {
            src: require("@/assets/image/member/inoue/inoue4.jpg"),
          },
          {
            src: require("@/assets/image/member/inoue/inoue5.jpg"),
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
  .inoue-text {
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
