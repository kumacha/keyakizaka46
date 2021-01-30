<template>
  <v-container>
        <div class="shida-text">
          <p>
           ギターができ、歌唱力の高さもファンから評価されており、小林とフォークデュオユニット「ゆいちゃんず」を結成していた。<br>
           人気のあったメンバーでフロント率も高く、初期の欅坂46を支えてきたメンバーの一人であると言える。<br>
           ファッション誌『ar』のレギュラーモデルに就任し、卒業後もレディスインナー“ピーチ・ジョン”の若年女性向け新ブランド
           “GiRLS by PEACH JOHN”のイメージモデルに起用されている。
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
            src: require("@/assets/image/member/imaizumi/imaizumipv1.jpg"),
          },
          {
            src: require("@/assets/image/member/imaizumi/imaizumipv2.jpg"),
          },
          {
            src: require("@/assets/image/member/imaizumi/imaizumipv3.jpg"),
          },
          {
            src: require("@/assets/image/member/imaizumi/imaizumipv4.jpg"),
          },
          {
            src: require("@/assets/image/member/imaizumi/imaizumipv5.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/imaizumi/imaizumi1.jpg"),
          },
          {
          src: require("@/assets/image/member/imaizumi/imaizumi2.jpg"),
          },
          {
          src: require("@/assets/image/member/imaizumi/imaizumi3.jpg"),
          },
          {
          src: require("@/assets/image/member/imaizumi/imaizumi4.jpg"),
          },
          {
          src: require("@/assets/image/member/imaizumi/imaizumi5.jpg"),
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