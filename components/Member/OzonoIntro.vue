<template>
  <v-container>
    <div class="ozono-text">
      <p>
        欅坂46(現：櫻坂46)の2期生であり、鹿児県出身の20歳。特技は心理学の勉強を活かしたカウンセリングや携帯電話のバイブレーションのモノマネであり、中でもカウンセリングはかなりの腕前である。<br>
        メンバー唯一の鹿児島県出身であり、同県出身の芸人・サンシャイン池崎は「地元が同じだから好き」であるという。好きな漢字は「嫁」であり、是非ともお嫁さんになって幸せな生活を送って欲しい。<br>
        また、1期生にも積極的にコミュニケーションを取っている様子が2期生から報告されており、「ぐいぐいのぞの」と称されている。<br>
        学校でいじめを受けた過去があり、その際に聴いた『エキセントリック』に救われたため、欅坂46を志したという。SHOW ROOM審査時には過去のエピソードを涙ながらに語っており、注目を集めた。<br>
        番組内では独自のワードセンスを活かしたメモを取るキャラとしての地位を確立しており、「大園玲 今週のメモ」(全1回)というコーナーが用意された。その独自のワードセンスを用いるコメントでは、幸阪茉里乃を「知らん・分からん・全然ちゃう」の3語で表現する幸阪3段活用を披露した。また、番組MCの土田晃之やハライチ・澤部からも評価されている。特に、新型コロナウィルス流行によるリモート収録によってそのポテンシャルが発揮され、大きく活躍した。<br>
        また、反射神経と身体の柔軟性には自身があり、反復横跳びでは2期生の中で2位、柔軟性を測るブリッジでは1位を記録している。メンバー想いの面もあり、大沼晶保が反復横跳びで1位を取った際には涙を流している。ちなみに、先述したように大沼の記録(1位)を追い詰めたのは大園(2位)であり、番組MCの土田には「怖い」と評されている。<br>
        ホッチキスの針のモノマネが上手く、渡邉理佐やハライチ・澤部から評価されている。ダンスの時は髪まで踊り、漫才の時は腕時計を外す。

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
          src: require("@/assets/image/member/ozono/ozonopv1.png"),
        }, ],

        picitems: [{
            src: require("@/assets/image/member/ozono/ozono1.png"),
          },
          {
            src: require("@/assets/image/member/ozono/ozono2.png"),
          },
          {
            src: require("@/assets/image/member/ozono/ozono3.jpg"),
          },
          {
            src: require("@/assets/image/member/ozono/ozono4.jpg"),
          },
          {
            src: require("@/assets/image/member/ozono/ozono5.jpg"),
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
  .ozono-text {
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
