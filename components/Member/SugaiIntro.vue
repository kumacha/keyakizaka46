<template>
  <v-container>
        <div class="shida-text">
          <p>
            欅坂46のキャプテンとして選ばれ、グループ名が櫻坂46に改名した後もキャプテンを続投することが決まっている。<br>
            また、自身の1st写真集である「フィアンセ」を発売している。ラジオ番組「レコメン」では月曜レギュラーパーソナリティーを担当している。<br>
            特技は、馬場馬術で高校1年生時には全日本ジュニア馬場馬術大会2011のチルドレンライダー選手権で2位を獲得するほどの実力者である。<br>
            『欅って、書けない?』では、馬術を嗜んでいる事などからお嬢様キャラとされていたが、軽井沢に豪華な別荘を持っていることから
            本物のお嬢様であることが発覚、「菅井様」と呼ばれることも増えた。
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
            src: require("@/assets/image/member/sugai/sugaipv1.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugaipv2.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugaipv3.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugaipv4.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugaipv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/sugai/sugai1.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugai2.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugai3.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugai4.jpg"),
          },
          {
            src: require("@/assets/image/member/sugai/sugai5.jpg"),
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