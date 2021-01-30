<template>
  <v-container>
        <div class="shida-text">
          <p>
            欅坂46加入時は15歳で人懐っこいキャラである為、1期生の中では妹的な立ち位置である。
            学業専念のため活動休止していたが、欅共和国2019より活動再開し、復帰後もメンバーから愛されている。<br>            パフォーマンスにおいては、小さい頃から習っているバレエの経験を活かしたダンスで魅力を放っている。
            『欅って、書けない？』番組内の企画で学力テストを行ったところ3位の好成績を収めた。<br>
            欅坂46の中でも特に垢ぬけて可愛くなったメンバーの一人である。
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
            src: require("@/assets/image/member/harada/haradapv1.jpg"),
          },
          {
            src: require("@/assets/image/member/harada/haradapv2.jpg"),
          },
          {
            src: require("@/assets/image/member/harada/haradapv3.jpg"),
          },
          {
            src: require("@/assets/image/member/harada/haradapv4.jpg"),
          },
          {
            src: require("@/assets/image/member/harada/haradapv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/harada/harada1.jpg"),
          },
          {
          src: require("@/assets/image/member/harada/harada2.jpg"),
          },
          {
          src: require("@/assets/image/member/harada/harada3.jpg"),
          },
          {
          src: require("@/assets/image/member/harada/harada4.jpg"),
          },
          {
          src: require("@/assets/image/member/harada/harada5.jpg"),
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