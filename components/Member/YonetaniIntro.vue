<template>
  <v-container>
    <div class="yonetani-text">
      <p>
        欅坂46の1期生であり、大阪府出身の20歳。(欅坂46卒業時は、18歳。)<br>
        特技はバドミントンであり、メンバーや番組MCからは「よねさん」や「よね」の愛称で親しまれていた。母親のような面倒見の良さや、どこか達観した雰囲気を持つことから、欅坂46では母親的存在として親しまれていた。<br>
        微生物が好きであることを公言しており、冠番組である「欅って、書けない？」では微生物について動きや見た目の可愛さを力説する場面が目立った。ちなみに、米谷の好きな微生物は1位がボルボックス、2位がミカヅキモ、3位がミドリムシである。
        勉強熱心な一面もあり、先述した微生物も含め生物が好きであり、筆箱には遺伝子を模したストラップを付けるほどである。<br>
        さらに潔癖性であり、間接キスなどが苦手であると語っており、番組内でも度々いじられている。
        また、絶叫系の乗り物やお化け屋敷が得意であり、冠番組である「KEYABINGO!」ではお化け屋敷内で『ハナミズキ』(一青窈)を動じることなく歌い上げる姿が映されていた。<br>
        4thシングル『不協和音』では、フロント(1列目)を務める。<br>
        2018年12月17日に学業への専念を目的として、欅坂46を卒業した。
      </p>
    </div>
    <v-row>
      <v-col cols="12" md="6">
        <div class="picture-title" style="text-align:center;">
          <p>Photos</p>
        </div>
        <div class="carousel">
          <v-carousel width="570px" height="400px" :show-arrows-on-hover="true" cycle="true" interval="3500">
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
            src: require("@/assets/image/member/yonetani/yonetanipv1.png"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetanipv2.png"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetanipv3.png"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetanipv4.png"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetanipv5.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/yonetani/yonetani1.jpg"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetani2.jpg"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetani3.jpg"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetani4.jpg"),
          },
          {
            src: require("@/assets/image/member/yonetani/yonetani5.jpg"),
          },
        ],
      }
    },
    components: {
      GoMember,
    }
  }

</script>

<style>
  .yonetani-text {
    margin-top: 25px;
    font-size: 20px;
    width: 1200px;
    margin-bottom: 30px;

  }

  .carousel {
    width: 570px;
    height: auto;
  }

</style>
