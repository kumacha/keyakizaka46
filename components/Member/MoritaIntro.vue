<template>
  <v-container>
        <div class="shida-text">
          <p>
           欅坂46の中でも一番身長が低いが、パフォーマンスにおいては小ささを感じさせないパワフルなダンスをする。<br>
           櫻坂46のセンターを担っており、小動物のような可愛さや、吸い込まれるような大きな目が印象的な透明感たっぷりのルックスは、
           オーディションのころからファンの中では話題になり、現在も人気のあるメンバーの一人である。<br>
           『欅って、書けない？』の「2期生の中で1番ドSなメンバー」というお題で1位となったのが森田で、
           スタッフがつまづいたのを見て一人だけにやにやしている映像を紹介されている。
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
            src: require("@/assets/image/member/morita/moritapv1.jpg"),
          },
        ],
        picitems:[{
          src: require("@/assets/image/member/morita/morita1.jpg"),
          },
          {
          src: require("@/assets/image/member/morita/morita2.jpg"),
          },
          {
          src: require("@/assets/image/member/morita/morita3.jpg"),
          },
          {
          src: require("@/assets/image/member/morita/morita4.jpg"),
          },
          {
          src: require("@/assets/image/member/morita/morita5.jpg"),
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