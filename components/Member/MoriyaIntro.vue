<template>
  <v-container>
    <div class="moriya-text">
      <p>
        欅坂46(現：櫻坂46)の1期生であり、宮城県出身の23歳。欅坂46では、キャプテン・菅井友香と共に副キャプテンを務める。美容や健康に対する意識がとても強く、特に食事に対するこだわりが強いため、長沢菜々香から「妖怪
        無添加探し」と称されている。<br>
        身体能力が高く、負けず嫌いな性格のため、周囲からは「軍曹」の愛称で親しまれている。また、ロケ企画に対する思いが強く、常にロケに行くチャンスを伺っている。先述した負けず嫌いな性格やロケへの想いが重なり、ロケの争奪を賭けた番組内の運動会企画では、最後のリレー対決で敗北し、号泣する。<br>
        さらに、番組内では2期生がそれぞれ選んだ1期生に対して義理チョコや本命チョコを渡すバレンタイン企画が開催された。その際、キャプテンである菅井友香が2期生(2020年2月時点)9人中、8人からチョコを貰うが、副キャプテンである守屋は驚愕の0個であった。この想定外の事態を受け、番組では緊急で守屋特集回が組まれた。<br>
        3rdシングル『二人セゾン』では、初のフロント(1列目)を務める。さらに、2019年6月には写真集『潜在意識』を発売した。
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
            src: require("@/assets/image/member/moriya/moriyapv1.png"),
          },
          {
            src: require("@/assets/image/member/moriya/moriyapv2.png"),
          },
          {
            src: require("@/assets/image/member/moriya/moriyapv3.png"),
          },
          {
            src: require("@/assets/image/member/moriya/moriyapv4.png"),
          },
          {
            src: require("@/assets/image/member/moriya/moriyapv5.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/moriya/moriya1.jpg"),
          },
          {
            src: require("@/assets/image/member/moriya/moriya2.jpg"),
          },
          {
            src: require("@/assets/image/member/moriya/moriya3.jpg"),
          },
          {
            src: require("@/assets/image/member/moriya/moriya4.jpg"),
          },
          {
            src: require("@/assets/image/member/moriya/moriya5.jpg"),
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
  .moriya-text {
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
