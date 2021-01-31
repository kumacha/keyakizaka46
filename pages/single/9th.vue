<template>
  <v-main>
    <div class="m-btn">
      <v-container>
        <v-btn color="#EEEEEE" depressed elevation="24" outlined text light to="/discography"><span
            id="span">DISCOGRAPHYページへ戻る</span></v-btn>
      </v-container>
    </div>
    <div>
      <v-img class="single-img"
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle_9th.png?alt=media&token=8beaed92-96cc-4aa6-a689-16e0d132c102">
      </v-img>
    </div>

    <div class="jacket">
      <v-img class="type" max-height="250" max-width="250"
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle9-A.jpg?alt=media&token=021e1b2b-42d9-40d6-8351-e2d6ffc89e98">
      </v-img>
      <div class="mask">
        <div class="songs">
          《配信限定》収録曲<br>
          1. 誰がその鐘を鳴らすのか？
        </div>
      </div>
    </div>

    <div class=single-intro>
      2020年8月21日にリリースされた欅坂46の9枚目となるシングルであり、ラストアルバム。配信限定のリリースとなり、欅坂46としての幕引きを感じさせる。<br>
      2ndシングル『世界には愛しかない』を彷彿とさせるような小林由依のポエトリーリーディングから始まるこの楽曲は、相次ぐメンバーの卒業の後、リリースされた。前作、『黒い羊』までセンターを務めた平手友梨奈に象徴されるような1人のセンターを配置したフォーメーションではなく、センターが入れ替わりながらパフォーマンスが展開される。<br>
      「瞳を閉じて 聴いてごらんよ 自分の言いたいことを 声高に言い合ってるだけだ 際限のない自己主張は
      ただのノイズでしかない」の歌詞が表現するように、現実の世界やSNSといったインターネット上で日々発せられる不特定多数からの主張に対して、冷静さを取り戻し、他者の言葉に耳を傾けることを伝えている。
    </div>
  </v-main>
</template>

<script>
  export default {

  }

</script>

<style>
  .single-img {
    margin-top: 20px;
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
  }

  #span {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .jacket {
    text-align: center;
    width: 250px;
    height: 250px;
    overflow: hidden;
    margin: 10px 8px 10px 640px;
    position: relative;
  }

  .jacket .songs {
    font-size: 15px;
    line-height: 25px;
    margin-top: 90px;
    margin-left: -14px;
    margin-right: 15px;
  }

  .jacket .mask {
    width: 250px;
    height: 248px;
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.6);
    -webkit-transition: all 0.6s ease;
    transition: all 0.6s ease;
  }

  .jacket:hover .mask {
    opacity: 1;
    padding-left: 30px;
  }

  .single-intro {
    margin-left: auto;
    margin-right: auto;
    margin-top: 25px;
    font-size: 20px;
    width: 1200px;
    margin-bottom: 40px;
  }

</style>
