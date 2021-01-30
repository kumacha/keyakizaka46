<template>
  <v-container>
        <div class="shida-text">
          <p>
            1期生の中で数少ない関西出身メンバーの一人である。<br>
            特徴的な可愛らしく高い声で関西弁を話す姿はとても可愛く、SHOWROOMはそんな小池の姿が見られるのでぜひ見てもらいたい。<br>
            ペンギン好きで坂崎千春・鎌倉文也の『恋するペンギン』を読んでおすすめしている。<br>
            欅坂46のメンバーの中でも土生とは特に仲が良く誰にも渡したくない存在と公表している。<br>
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
            src: require("@/assets/image/member/koike/koikepv1.jpg"),
          },
          {
            src: require("@/assets/image/member/koike/koikepv2.jpg"),
          },
          {
            src: require("@/assets/image/member/koike/koikepv3.jpg"),
          },
          {
             src: require("@/assets/image/member/koike/koikepv4.jpg"),
          },
          {
             src: require("@/assets/image/member/koike/koikepv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/koike/koike1.jpg"),
          },
          {
          src: require("@/assets/image/member/koike/koike2.jpg"),
          },
          {
          src: require("@/assets/image/member/koike/koike3.jpg"),
          },
          {
          src: require("@/assets/image/member/koike/koike4.jpg"),
          },
          {
          src: require("@/assets/image/member/koike/koike5.jpg"),
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