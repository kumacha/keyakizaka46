<template>
  <v-container>
        <div class="shida-text">
          <p>
            欅坂46結成時の最年少メンバーとして活動を始め、1stシングル「サイレントマジョリティー」からセンターを務め、
            脱退するまで欅坂46の「絶対的センター」だった平手は欅坂46の顔だったと言っても過言ではない。<br>
            気持ちを込めて全身全霊で踊るパフォーマンスは、「憑依型」と評価されるほどでまさに曲の主人公になりきり
            心身を削って表現されるダンスは多くのファンを魅了してきた。<br>
            楽曲パフォーマンスなどからクールなイメージがあるかもしれないが、特に『欅って、書けない?』などの冠番組開始当初は笑顔が印象的な少女だった。
            ファンの間では平手が愛らしく笑う様子を「キャロてち」と表現されている。
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
            src: require("@/assets/image/member/hirate/hiratepv1.jpg"),
          },
          {
            src: require("@/assets/image/member/hirate/hiratepv2.jpg"),
          },
          {
            src: require("@/assets/image/member/hirate/hiratepv3.jpg"),
          },
          {
            src: require("@/assets/image/member/hirate/hiratepv4.jpg"),
          },
          {
            src: require("@/assets/image/member/hirate/hiratepv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/hirate/hirate1.jpg"),
          },
          {
          src: require("@/assets/image/member/hirate/hirate2.jpg"),
          },
          {
          src: require("@/assets/image/member/hirate/hirate3.jpg"),
          },
          {
          src: require("@/assets/image/member/hirate/hirate4.jpg"),
          },
          {
          src: require("@/assets/image/member/hirate/hirate5.jpg"),
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