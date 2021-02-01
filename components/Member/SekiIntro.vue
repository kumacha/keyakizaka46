<template>
  <v-container>
    <div class="ishimori-text">
      <p>
        欅坂46（現：櫻坂46）の2期生であり、福岡県出身の22歳である。ニックネームは有美子会長・ゆみちゃん・ゆみねえ。有美子会長というのは井上梨名からのタレコミによるメンバーの一人である武元唯衣をめでる会、通称「ゆいちゃんをめでる会」の会長から来ている。そして有美子会長の家はお金持ちであり、同じ二期生の田村保乃の目撃情報によると、家のテレビがかなり大きいとのこと。顔立ちがとても整っていてスタイルも良く、モデル候補である。福岡出身ということで癒される博多弁と朗らかな笑顔が魅力的である。欅坂46ラストライブでは「また生まれ変わってもこのグループに入りたいです。」という言葉が印象的であり、普段のおしとやかな女の子に加えて熱い想いを持っている。櫻坂46の「なぜ恋をして来なかったんだろう？」では色気のあるパフォーマンスが魅力的である。
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
            src: require("@/assets/image/member/seki/sekipv.jpg"),
          },
        ],
        picitems: [{
            src: require("@/assets/image/member/seki/seki1.jpg"),
          },
          {
            src: require("@/assets/image/member/seki/seki2.jpg"),
          },
          {
            src: require("@/assets/image/member/seki/seki3.jpg"),
          },
          {
            src: require("@/assets/image/member/seki/seki4.jpg"),
          },
          {
            src: require("@/assets/image/member/seki/seki5.jpg"),
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
