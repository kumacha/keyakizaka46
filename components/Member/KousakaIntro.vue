<template>
  <v-container>
    <div class="kousaka-text">
      <p>
        坂道グループ初の三重県出身2002年生まれの高校３年生。
        2018年8月に３坂道合同オーディションに合格したが、その年には配属されず翌年2019年9月に坂道研修生としてプロフィールが公式サイトに掲載された。
        2020年２月SHOWROOM配信にて欅坂46へ二期生として配属が発表された。<br>
        声が低く、笑った時に前歯が出るのが特徴。楽屋ではテンションが低く同期の増本綺良に絡まれた際には得意の毒舌で増本を撃退。だが、増本との仲は良く、「きらまり」というコンビ名がファンの間で浸透している。<br>
        新二期生(もはや死語)の他のメンバーのキャラが濃く埋もれてしまいがちだが、毒舌キャラを持っている。また、本人はミーグリで否定していたが、運動音痴キャラもちょくちょく顔を出している(「欅って書けない？」での二期生の体力測定企画や紅白歌合戦にて)。<br>
        また、母親がヘヴィメタが好きで、好きなバンド名の名前をそのまま娘に付け「茉里乃」という名前になったそう。<br>
        オーディション時から同じく二期生の森田ひかるのことが好きで最近森田のガチ恋ブログをアップした。最近は一期生の上村莉菜のことが好きでブログやメッセージでたびたびツーショットが送られてくる。<br>
        櫻坂46の1stシングルでは二期生の藤吉夏鈴がセンターを務める「なぜ、恋をして来なかったんだろう？」や「Plastic regret」にて３列目のポジションを務める。
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
            src: require("@/assets/image/member/kousaka/kousakapv1.png"),
          },
          {
            src: require("@/assets/image/member/kousaka/kousaka1.jpg"),
          },
        ],

        picitems: [{
            src: require("@/assets/image/member/kousaka/kousaka2.jpg"),
          },
          {
            src: require("@/assets/image/member/kousaka/kousaka3.jpg"),
          },
          {
            src: require("@/assets/image/member/kousaka/kousaka4.jpg"),
          },
          {
            src: require("@/assets/image/member/kousaka/kousaka5.jpg"),
          },
          {
            src: require("@/assets/image/member/kousaka/kousaka6.jpg"),
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
  .kousaka-text {
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
