<template>
  <v-container>
    <div class="ishimori-text">
      <p>
       欅坂46（現：櫻坂46）の２期生であり、東京都出身の21歳である。ニックネームはれなぁ～・もりれな。努力家であり、トークではマメに連絡をしてくれる。毎日ほぼ必ず１０通以上のメッセージを送信している。そしてなんといっても顔立ちの良さである。坂道シリーズを通してもトップクラスの美形である。おしとやかで品があり、常に落ち着いていて穏やかな様子である。いわば品のあるぶりっ子キャラである。「そこ曲がったら櫻坂？」ではかくし芸としてテーブルクロス引きに挑戦し、見事難易度が高い技に成功していた。選抜に選ばれていなかったが、この前の放送でキャラを認知させ、今後ファンが増えていきそうである。
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
                  picitems: [{
            src: require("@/assets/image/member/masumoto/masumoto1.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto2.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto3.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto4.jpg"),
          },
          {
            src: require("@/assets/image/member/masumoto/masumoto5.jpg"),
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
