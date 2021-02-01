<template>
  <v-content>
   <v-container>
         <div class="aboutpicmain">
      <v-img width="auto" height="450px"
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/about%2Faboutmain.jpg?alt=media&token=1467a745-c3be-4a0b-aae3-63a66b6a67db">
      </v-img>
      <p>欅坂46とは</p>
    </div>
      <v-row>
        <v-col class="aboutpic1">
          <v-img width="650px" height="400px" class="pic1"
          src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/about%2Faboutpic1.jpg?alt=media&token=9148965b-c5d8-4f22-9f46-06dac37449a9">
          </v-img>
        </v-col>
        <v-col class="abouttext1">
          <div class="text1" width="650px" height="400px">
          <p>
            2015年8月21日乃木坂46の関連グループとして、応募総数2万2509人の中、約1000分の1の狭き門をくぐり抜けた21人によって構成された欅坂46。<br>
            AKB48の公式ライバルとして結成された乃木坂46の妹分になるのか、ライバルとなるのかというチームの立ち位置や、
            どのようなチームカラーになっていくのかファンから期待されていた。
          </p>
          </div>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="abouttext2">
          <div class="text1">
          <p>
           彼女たちのデビュー曲である「サイレントマジョリティー」は、今までのTHEアイドルのようなイメージとは異なる迫力のある曲調と
           「自分らしさ」を歌った力強い楽曲でした。その後も、高度でクールなパフォーマンスやダークな楽曲と共に活動していきアイドルに
           対するイメージを大きく変化させ「アイドルを超えた存在」とまで言われるようになった。
          </p>
          </div>
        </v-col>
        <v-col class="aboutpic2">
          <v-img width="650px"  height="400px"
          src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/about%2Faboutpic2.jpg?alt=media&token=fb3a0862-7ea0-4648-af5f-67eacfe849da">
          </v-img>
        </v-col>
      </v-row>  

            <v-row>
        <v-col class="aboutpic3">
          <v-img width="650px" height="400px" class="pic3" 
          src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/about%2Faboutpic3.jpg?alt=media&token=54b9c5d2-c4f8-4179-af72-d25a72895b6e">
          </v-img>
        </v-col>
        <v-col class="abouttext3">
          <div class="text1" width="650px" height="400px">
          <p>
            2019年2月発売の8枚目シングル「黒い羊」以後、新しい楽曲が発売されていなかった状況や、
            結成当時からグループを支えてきた中核メンバーの卒業が相次ぎ、その中でも“絶対的センター”としてグループを代表する
            メンバーでもあった平手友梨奈の脱退、新メンバーの加入が契機となり改名、櫻坂46として心機一転新たなスタートを切ろうとしている。
          </p>
          </div>
        </v-col>
      </v-row>


    </v-container>
  </v-content>


</template>

<script>
export default {
}
</script>

<style>
.aboutpicmain {
  position: relative;
}

.aboutpicmain p {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  position: absolute;
  top: 30%;
  left: 33%;
  font-size: 90px;
  color: white
}

.text1{
  text-shadow: 3px 3px 2px #0f0f0f;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: 25px; 
  line-height: 45px;
}
.text1::first-letter{
   font-size: 3em; 
   float: left;
   padding: 10px;
}

.aboutpic1{
  margin-top: 3%;
}
.abouttext1{
  margin-top: 3%;
}
.aboutpic2{
  margin-top: 5%;
}
.abouttext2{
  margin-top: 5%;
}
.aboutpic3{
  margin-top: 5%;
}
.abouttext3{
  margin-top: 5%;
}
</style>