<template>
  <v-container>
    <div class="uemura-text">
      <p>
        坂道グループ初の滋賀県出身の大学1年生
        2018年３坂道合同オーディションに合格し、その年の12月欅坂46（現櫻坂46）に二期生として配属。
        幼少期の頃から習っていたためダンスが得意で、欅坂46の冠番組「欅って書けない？」にて紹介される前に歌番組に数々出演していた。
        関西出身のためノリがとてもよく、同じ二期生の松田里奈とナイフの刺しあいコント(「欅って書けない」二期生楽屋隠し撮り企画より)など楽屋でよくふざけ合っている。
        話も上手いため、「欅って書けない？」や櫻坂46冠番組「そこ曲がったら、櫻坂？」ではたびたび話を振られるだけでなく、２期生のみ出演する企画や、櫻坂新センター森田ひかるを紹介する企画、さらに欅坂46初となる東京ドームライブにおいてM
        Cを任されるなど、櫻坂46二期生のバラエティ担当である。
        彼女の特徴はなんと言ってもその童顔。19歳とは思えない程の童顔でお姉さん的存在のメンバーによく可愛がられている。あまりにも可愛がられすぎて、一期生では菅井友香が会長を務める「ゆいちゃんをめでるかい」や二期生では関有美子が会長を務める「唯衣ちゃんを愛でる会」などが存在するほどである。また、一期生で童顔といえば尾関梨香だが、あまりにも後ろ姿が似すぎてスタッフでもわからないほど。「欅って書けない？」での学力テスト(中２範囲)企画において、数学で満点を叩き出し合計点数でグループ内２位になるなど頭も良く、東大王などのクイズ番組にも出演し爪痕を残している。
        櫻坂46の1stシングルでは二期生の森田ひかるがセンターを務める表題曲「Nobady’s fault」や「最終の地下鉄に乗って」「ブルームーンキス」にて３列目のポジションを務める。
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
            src: require("@/assets/image/member/uemura/uemurapv1.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv2.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv3.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv4.png"),
          },
          {
            src: require("@/assets/image/member/uemura/uemurapv5.png"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/uemura/uemura1.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura2.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura3.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura4.jpg"),
          },
          {
            src: require("@/assets/image/member/uemura/uemura5.jpg"),
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
  .uemura-text {
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
