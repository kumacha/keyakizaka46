<template>
  <v-container>
        <div class="shida-text">
          <p>
           人見知りが激しく、小さい頃から集団行動が苦手で1人で過ごすのを好み、インドア派で休日は自宅で過ごすことが多い。<br>
           LIVEではドSなあおりをすることから埼玉の狂犬という異名を持っている。<br>
           中学3年生から始めたギターは上手く歌唱力も高い為、今泉佑唯とフォークデュオユニット「ゆいちゃんず」を結成していた。<br>
           ダンスも上手いため紅白歌合戦では平手に代わり代役センターをこなしている。
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
            src: require("@/assets/image/member/kobayashi/kobayashipv1.jpg"),
          },
          {
            src: require("@/assets/image/member/kobayashi/kobayashipv2.jpg"),
          },
          {
            src: require("@/assets/image/member/kobayashi/kobayashipv3.jpg"),
          },
          {
            src: require("@/assets/image/member/kobayashi/kobayashipv4.jpg"),
          },
          {
            src: require("@/assets/image/member/kobayashi/kobayashipv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/kobayashi/kobayashi1.jpg"),
          },
          {
          src: require("@/assets/image/member/kobayashi/kobayashi2.jpg"),
          },
          {
          src: require("@/assets/image/member/kobayashi/kobayashi3.jpg"),
          },
          {
          src: require("@/assets/image/member/kobayashi/kobayashi4.jpg"),
          },
          {
          src: require("@/assets/image/member/kobayashi/kobayashi5.jpg"),
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