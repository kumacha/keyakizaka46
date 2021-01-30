<template>
  <v-container>
        <div class="shida-text">
          <p>
            『欅って、書けない？』で走り方をはじめとした動きや佇まいが変わっており、澤部から「尾関スタイル」と命名されている。
            また、番組内での尾関と澤部のカップルかのような掛け合いは見どころである。<br>
            習字の有段者で7歳から14歳まで書道を習っていた。<br>
            欅坂46を知ってファンになれば一度は尾関の事を好きになるといわれており、「おぜかわ」という言葉も存在している。<br>
            ラジオ番組である「欅坂46 こちら有楽町星空放送局」の3代目パーソナリティーを務める。
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
            src: require("@/assets/image/member/ozeki/ozekipv1.jpg"),
          },
          {
            src: require("@/assets/image/member/ozeki/ozekipv2.jpg"),
          },
          {
            src: require("@/assets/image/member/ozeki/ozekipv3.jpg"),
          },
          {
            src: require("@/assets/image/member/ozeki/ozekipv4.jpg"),
          },
          {
            src: require("@/assets/image/member/ozeki/ozekipv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/ozeki/ozeki1.jpg"),
          },
          {
          src: require("@/assets/image/member/ozeki/ozeki2.jpg"),
          },
          {
          src: require("@/assets/image/member/ozeki/ozeki3.jpg"),
          },
          {
          src: require("@/assets/image/member/ozeki/ozeki4.jpg"),
          },
          {
          src: require("@/assets/image/member/ozeki/ozeki5.jpg"),
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