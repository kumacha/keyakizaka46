<template>
  <v-container>
        <div class="shida-text">
          <p>
            ショートヘアで茶髪が目立つメンバーかつ欅坂随一のバラエティーキャラ。よくメンバーをいじることが多い。
            冠番組ではリアクションが大きく、ガヤ担当。
            渡辺理佐や長濱ねると仲が良く、プライベートでも遊ぶ仲である。
            ライブでは煽り担当で、欅共和国2017の危なっかしい計画での「来年も欅共和国も来たいか～？！絶対来いよ～！」の煽りが印象的である。
            </p>
        </div>
        <div class="carouselcontainer">
          <div class="picture-title" style="text-align:center;">
            <p>Photos</p>
          </div>
          <div class="pic-carousel">
            <div class="carousel-size">
            <v-carousel :show-arrows-on-hover="true" cycle="true" interval="3500">
              <v-carousel-item class="slideshow" v-for="(picitem,k) in picitems" :key="k" :src="picitem.src"
                hide-delimiter-background>
              </v-carousel-item>
            </v-carousel>
            </div>
          </div>
          <div class="picture-title" style="text-align:center;">
            <p>Promotion Video</p>
          </div>
          <div class="pv-carousel">
            <v-carousel :show-arrows-on-hover="true" cycle="true" interval="3500">
              <v-carousel-item class="slideshow" v-for="(pvitem,i) in pvitems" :key="i" :src="pvitem.src"
                hide-delimiter-background>
              </v-carousel-item>
            </v-carousel>
          </div>
        </div>
  </v-container>

</template>

<script>
import GoMember from '~/components/Member/GoMember.vue'
export default {
  data() {
      return {
        pvitems: [{
            src: require("@/assets/image/member/shida/shidapv1.jpg"),
          },
          {
            src: require("@/assets/image/member/shida/shidapv2.jpg"),
          },
          {
            src: require("@/assets/image/member/shida/shidapv3.jpg"),
          },
          {
            src: require("@/assets/image/member/shida/shidapv4.jpg"),
          },
          {
            src: require("@/assets/image/member/shida/shidapv5.jpg"),
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
.carouselcontainer {
    text-align: center;
    position: absolute;
    left: 50%;
    top: 150%;
    -ms-transform: translate(-50%, -30%);
    -webkit-transform: translate(-50%, -30%);
    transform: translate(-50%, -30%);
    margin: 0;
    padding: 0;
  }
.pic-carousel {
  text-align: center;
  position: absolute;
  left: 120%;
  top: 35%;
  -ms-transform: translate(-120%, -35%);
  -webkit-transform: translate(-120%, -35%);
  transform: translate(-120%, -35%);
  margin: 0;
  padding: 0;
}
.pv-carousel{
  width: 500px;
  height: 400px;
  text-align: center;
  position: absolute;
  left: -40%;
  top: 35%;
  -ms-transform: translate(40%, -35%);
  -webkit-transform: translate(40%, -35%);
  transform: translate(40%, -35%);
  margin: 0;
  padding: 0;
}
</style>