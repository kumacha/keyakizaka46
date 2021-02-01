<template>
  <v-container>
    <div class="ishimori-text">
      <p>
       欅坂46（現：櫻坂46）の２期生であり、東京都出身の22歳である。ニックネームはりこぴ。2021年1月8日、櫻坂46 1stシングル「Nobody’s fault」の活動をもって卒業することが発表された。欅坂46に加入する前から欅坂46のファンであり、二次審査のときから「私は欅坂46にしか入りたくないです」と言っていたほどである。身長168.5cmととても高くモデルのような体系が特徴的。メンバーで仲が良いのは渡辺梨加であり、トークではよく二人のツーショットの写真が送られてくる。また、同じ2期生である藤吉夏鈴に想いを寄せている。性格は超ポジティブ。特技はドラムと言っているが経験は月二回を二か月のみ習っていただけであったが、「素質あるねって言われた」という自信を元に特技としてアピールしている。
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
            src: require("@/assets/image/member/matsudaira/matsudairapv.jpg"),
          },
        ],          
        picitems: [{
            src: require("@/assets/image/member/matsudaira/matsudaira1.jpg"),
          },
          {
            src: require("@/assets/image/member/matsudaira/matsudaira2.jpg"),
          },
          {
            src: require("@/assets/image/member/matsudaira/matsudaira3.jpg"),
          },
          {
            src: require("@/assets/image/member/matsudaira/matsudaira4.jpg"),
          },
          {
            src: require("@/assets/image/member/matsudaira/matsudaira5.jpg"),
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
  .ishimori-text {
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
