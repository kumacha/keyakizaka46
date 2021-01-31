<template>
  <v-container>
        <div class="fujiyoshi-text">
          <p>
            欅坂46(現：櫻坂46)の2期生であり、大阪府出身の19歳。2018年7月に開催された坂道合同オーディションに合格し、同年12月に欅坂46へ配属された。
            本名を言ってはいけないSHOW ROOM審査では、「夏鈴、あ」と本名を十数回発言している。<br>
            ダンス経験者であることから特技はダンスであり、ライブでは『サイレントマジョリティー』や『二人セゾン』、『ガラスを割れ！』、『黒い羊』のフロントを務め、『君をもう探さない』ではBメロ部分のセンターを務める。
            また、欅坂46の2期生による単独ライブ「おもてなし会」では、『サイレントマジョリティー』や『Nobody』のセンターを務める。<br>
            一見、マイペースに見られがちな彼女だが、欅坂46への情熱は人一倍高い。欅坂46の改名が発表されたライブ『KEYAKIZAKA46 Live Online, but with YOU!』では、
            改名発表後に披露された『誰がその金を鳴らすのか？』にて号泣する様子が見られる。また、表情の起伏が少なく、「クール」や「カッコイイ」といったイメージを
            持たれがちであるが、笑顔の破壊力は凄まじく、笑う際に口元を隠すクセがある。本人は「感情を表に出すことが苦手」と語っており、欅坂46配属当初の宣材写真に対して井上梨名から「初期ぐらい機嫌よくせぇや」とツッコまれている。<br>
            番組MCであるハライチ・澤部に贔屓されており、澤部とメンバーとの対決企画では澤部に対して井上梨名が対策を講じる程である。また、番組内のハロウィンに関する企画では、武元唯衣のパートナー役として海賊のコスプレを披露しているが、佐藤蛾次郎に似ていると番組MCから指摘され、その後はしばらく「藤吉蛾次郎」としてネタにされている。<br>
            よく、井上梨名と共にいる写真が挙げられる。唯一作れる料理は、オムライス。
            </p>
        </div>
        <v-row>
          <v-col cols="12" md="6">
            <div class="picture-title" style="text-align:center;">
              <p>Photos</p>
            </div>
            <div class="carousel">
              <v-carousel width="570px" height="400px" :show-arrows-on-hover="true" cycle="true" interval="3500" >
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
            src: require("@/assets/image/member/fujiyoshi/fujiyoshipv1.png"),
          },
          {
            src: require("@/assets/image/member/fujiyoshi/fujiyoshi1.jpg"),
          },
          {
            src: require("@/assets/image/member/fujiyoshi/fujiyoshi2.jpg"),
          },
          {
            src: require("@/assets/image/member/fujiyoshi/fujiyoshi3.jpg"),
          },
          {
            src: require("@/assets/image/member/fujiyoshi/fujiyoshi4.jpg"),
          },
        ],

        picitems: [{
          src: require("@/assets/image/member/fujiyoshi/fujiyoshi5.jpg"),
        },
        {
          src: require("@/assets/image/member/fujiyoshi/fujiyoshi6.jpg"),
        },
        {
          src: require("@/assets/image/member/fujiyoshi/fujiyoshi7.jpeg"),
        },
        {
          src: require("@/assets/image/member/fujiyoshi/fujiyoshi8.jpg"),
        },
        {
          src: require("@/assets/image/member/fujiyoshi/fujiyoshi9.jpg"),
        },
        ],
      }
    },
    components:{
      GoMember,
    }
}
</script>

<style>
.fujiyoshi-text{
  margin-top: 25px;
  font-size: 20px;
  width: 1200px;
  margin-bottom: 30px;

}
.carousel{
  width:570px;
  height: auto;
}
</style>