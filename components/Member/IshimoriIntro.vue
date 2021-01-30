<template>
  <v-container>
    <div class="ishimori-text">
      <p>
        欅坂46の1期生であり、宮城県出身の23歳。(欅坂46卒業時は、23歳。)
        特技はダンスであり、パフォーマンス能力の高さが評価されている。ライブではダンストラックを担当する場面が多く、鈴本や小林、斉藤、平手と共に激しいダンスを踊っている。特に、『月曜日の朝、スカートを切られた』や『黒い羊』では、ファンからその表現力やパフォーマンス能力の高さが注目されている。<br>
        欅坂46内では、おバカキャラとしての地位を確立しており、冠番組である「欅って、書けない？」で行われた学力テストでは1期生の中で最下位をマークしている。また、2期生加入後に同番組内で行われた学力テストにおいても、最下位から5番目をマークしている。ライブでの小林によるファンに対する煽りでは、「虹花よりバカになれるよな!?」と発言されていることから、メンバーからも学力の低さが認められている。
        さらに、2期生の藤吉からは「話しかけやすい」と親しまれている。<br>
        また、かなりの動物好きであり、クオリティの高いダチョウのモノマネを披露している。特に犬が好きであり、愛犬の「レディ」を溺愛している。個人PVのほとんどに、犬が登場している。<br>
        5thシングル「風に吹かれても」と8thシングル『黒い羊』では、フロント(1列目)を務める。2020年9月30日に、欅坂46を卒業する。
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
            src: require("@/assets/image/member/ishimori/ishimoripv1.png"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimoripv2.png"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimoripv3.png"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimoripv4.png"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimoripv5.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/ishimori/ishimori1.jpg"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimori2.jpg"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimori3.jpg"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimori4.jpg"),
          },
          {
            src: require("@/assets/image/member/ishimori/ishimori5.jpg"),
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
