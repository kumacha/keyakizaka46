<template>
  <v-container>
        <div class="shida-text">
          <p>
            『欅って、書けない？』の企画でメンバー同士による「憧れのダンスセンス」ランキングの投票で1位を獲得し、
            メンバーからは「ムダがなくキレがあり細やかな動きと独自性のある動き」と声が上がっておりレベルの高さを裏付けている。
            そして、強い意志を感じさせる迫真のパフォーマンスをすることから人気が高く代役センターを務めることが多い。
            料理が上手で番組の企画で「かにクリームコロッケ」を作った時は「作ったことがない」と言いながら手際よく料理をし、
            試食したMCを驚かせる程完成度の高いコロッケを作り上げた。
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
            src: require("@/assets/image/member/suzumoto/suzumotopv1.jpg"),
          },
          {
            src: require("@/assets/image/member/suzumoto/suzumotopv2.jpg"),
          },
          {
            src: require("@/assets/image/member/suzumoto/suzumotopv3.jpg"),
          },
          {
            src: require("@/assets/image/member/suzumoto/suzumotopv4.jpg"),
          },
          {
            src: require("@/assets/image/member/suzumoto/suzumotopv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/suzumoto/suzumoto1.jpg"),
          },
          {
          src: require("@/assets/image/member/suzumoto/suzumoto2.jpg"),
          },
          {
          src: require("@/assets/image/member/suzumoto/suzumoto3.jpg"),
          },
          {
          src: require("@/assets/image/member/suzumoto/suzumoto4.jpg"),
          },
          {
          src: require("@/assets/image/member/suzumoto/suzumoto5.jpg"),
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