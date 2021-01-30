<template>
  <v-container>
        <div class="shida-text">
          <p>
            欅坂46の1期生オーディションを受け最終オーディションまで到達したが、母親に長崎に連れ戻されてしまう。<br>
            帰宅後の落ち込んだ長濱の様子に見かねた両親は長濱と乃木坂のLIVEを見に行った。それによって考えを改めた両親は運営に「娘にもう一度チャンスをあげて欲しい」と申し出て、
            運営スタッフによる話し合いの結果、3次審査まで高い評価を得ていた長濱を特例として欅坂46に加入させることが決定した。<br>
            その後、欅坂46のアンダーグループとなるけやき坂46のメンバーとしての活動からスタートした。2017年9月25に欅坂46とけやき坂46の兼任が解除され、欅坂46専任となった。<br>
            『欅って、書けない？』番組内の企画で学力テストを行ったところ1位の好成績を収めるほどの学力の持ち主である。<br>
            自身の1st写真集「ここから」は長濱の写真集は発売初週に約9万8000部を売上げ、乃木坂46の白石麻衣に次いで女性ソロ写真集週間売上部数で歴代2位となった。
            最近はSNSを行っており特にInstagramでは元気な姿を見ることができる。
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
            src: require("@/assets/image/member/nagahama/nagahamapv1.jpg"),
          },
          {
             src: require("@/assets/image/member/nagahama/nagahamapv2.jpg"),
          },
          {
            src: require("@/assets/image/member/nagahama/nagahamapv3.jpg"),
          },
          {
            src: require("@/assets/image/member/nagahama/nagahamapv4.jpg"),
          },
          {
            src: require("@/assets/image/member/nagahama/nagahamapv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/nagahama/nagahama1.jpg"),
          },
          {
          src: require("@/assets/image/member/nagahama/nagahama2.jpg"),
          },
          {
          src: require("@/assets/image/member/nagahama/nagahama3.jpg"),
          },
          {
          src: require("@/assets/image/member/nagahama/nagahama4.jpg"),
          },
          {
          src: require("@/assets/image/member/nagahama/nagahama5.jpg"),
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