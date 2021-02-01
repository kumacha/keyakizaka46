<template>
  <v-container>
    <div class="yamasaki-text">
      <p>
        欅坂46(現：櫻坂46)の2期生であり、大阪府出身の15歳。欅坂46では最年少であり、可能性の具現化の様な存在。ファンやメンバーからは、「てんちゃん」や「おてん」、「てんてん」の愛称で親しまれている。名字の山﨑は「﨑」であり、「崎」ではない点に注意が必要。<br>
        自身が人から期待された経験が少なく、さらにファンからの期待を受けて輝くアイドルに魅せられ、アイドルを志したと語っている。<br>
        最年少とは思えないような大人びた雰囲気を持ち、クールな一面が目立つが、年相応の無邪気さや純粋さも見せる。その顔立ちと身長からか、冠番組である「欅って、書けない？」のハロウィン企画では、男装姿が披露され話題を呼んだ。好きな動物は蛇であり、苦手な動物はヒヨコやハムスターといった小動物であるという独特の感性を持つ。<br>
        ライブでは、『大人は信じてくれない』のセンターを務め、そのポテンシャルを十二分に発揮した。<br>
        絵を描くことが趣味として挙げられており、番組内では眼をモチーフにした不気味なイラストが紹介されている。画力はかなり高く、菅井などに感心されている。また、尾関と特に仲が良く、2人でディズニーランドへ出かけたエピソードが紹介されている。
        現在はカメラに熱中しており、ブログ内でも「てんカメ」といったコーナーを設け、自身のカメラで撮影したメンバーやPV撮影の風景の写真をアップしている。<br>
        年上の増本綺良に対して寛容な態度やしっかりとした対応を行うことから、増本に懐かれる。増本からは、夜の公園で花いちもんめに誘われる。
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
          <a href="https://youtu.be/g114GkvmtxI"><v-carousel width="570px" height="400px" :show-arrows-on-hover="true" cycle="true" interval="3500">
            <v-carousel-item class="slideshow" v-for="(pvitem,i) in pvitems" :key="i" :src="pvitem.src"
              hide-delimiter-background>
            </v-carousel-item>
          </v-carousel></a>
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
          src: require("@/assets/image/member/yamasaki/yamasakipv1.png"),
        }, ],

        picitems: [{
            src: require("@/assets/image/member/yamasaki/yamasaki1.jpg"),
          },
          {
            src: require("@/assets/image/member/yamasaki/yamasaki2.jpg"),
          },
          {
            src: require("@/assets/image/member/yamasaki/yamasaki3.jpg"),
          },
          {
            src: require("@/assets/image/member/yamasaki/yamasaki4.jpg"),
          },
          {
            src: require("@/assets/image/member/yamasaki/yamasaki5.jpg"),
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
  .yamasaki-text {
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
