<template>
  <v-container>
        <div class="shida-text">
          <p>
           欅坂46の中でもスタイルがとても良く、女性ファッション誌「JJ」の専属モデルを担っている。
           また、『欅って、書けない？』の企画でメンバー同士による「ファッションセンス」ランキングの投票で1位を獲得している。<br>
           同番組内のメンバー同士で妄想ドラマを作るという企画では男性役を多く演じ、その顔立ちの良さがよく分かる。<br>
           筋金入りの天然で番組内では発言で周囲困惑させ、その天然さ加減が垣間見える。
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
            <div class="carousel">
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
            src: require("@/assets/image/member/habu/habupv1.jpg"),
          },
          {
            src: require("@/assets/image/member/habu/habupv2.jpg"),
          },
          {
            src: require("@/assets/image/member/habu/habupv3.jpg"),
          },
          {
            src: require("@/assets/image/member/habu/habupv4.jpg"),
          },
          {
            src: require("@/assets/image/member/habu/habupv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/habu/habu1.jpg"),
          },
          {
          src: require("@/assets/image/member/habu/habu2.jpg"),
          },
          {
          src: require("@/assets/image/member/habu/habu3.jpg"),
          },
          {
          src: require("@/assets/image/member/habu/habu4.jpg"),
          },
          {
          src: require("@/assets/image/member/habu/habu5.jpg"),
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
.shida-text{
  margin-top: 25px;
  font-size: 20px;
  width: 1200px;

}
.carousel{
  width:570px;
  height: auto;
}
</style>