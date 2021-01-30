<template>
  <v-container>
        <div class="shida-text">
          <p>
           『欅って、書けない？』の企画でメンバー同士による「憧れているスタイル」ランキングの投票で1位を獲得している。
           女性ファッション誌「non-no」の専属モデルに選ばれ、欅坂46のメンバーで一番早く雑誌の専属モデルに選ばれた。<br>
           自身の1st写真集である「無口」は、2019年4月22日・29日付のオリコン週間BOOKランキングで2週連続1位、2019年4月度のオリコン月間BOOKランキングの写真集部門で1位を獲得した。<br>
           原田との姉妹のような関係はファンからも人気で、原田もお姉ちゃんみたいで大好きだと述べている。
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
            src: require("@/assets/image/member/risa/risapv1.jpg"),
          },
          {
            src: require("@/assets/image/member/risa/risapv2.jpg"),
          },
          {
            src: require("@/assets/image/member/risa/risapv3.jpg"),
          },
          {
            src: require("@/assets/image/member/risa/risapv4.jpg"),
          },
          {
            src: require("@/assets/image/member/risa/risapv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/risa/risa1.jpg"),
          },
          {
          src: require("@/assets/image/member/risa/risa2.jpg"),
          },
          {
          src: require("@/assets/image/member/risa/risa3.jpg"),
          },
          {
          src: require("@/assets/image/member/risa/risa4.jpg"),
          },
          {
          src: require("@/assets/image/member/risa/risa5.jpg"),
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