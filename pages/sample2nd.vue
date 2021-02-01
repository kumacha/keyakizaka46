<template>
  <v-main>
    <div class="single_image">
      <div class="single_logo">
        <img
          src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2F9th-logo.png?alt=media&token=4ac2ce3c-30c6-4049-85da-c4561824da9f"
          alt="">
      </div>
      <div class="scroll">
        <div class="roundwrap">
          <p class="round">・</p>
        </div>
        <div class="scrolltext">SCROLL</div>
      </div>
      <div class="singleline"></div>
    </div>
    <div class="outline">
      <div class="single_outline">
        <p>2020年8月21日にリリースされ欅坂46の9枚目となるシングルであり、ラストアルバム。</p>
      </div>
      <div class="single_outline2">
        <p>配信限定のリリースとなり、欅坂46としての幕引きを感じさせる。</p>
      </div>
      <div class="jacket_contents">
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
      </div>
      <HistoryLine />
    </div>
    <div class="single_textbox">
      <div class="single_text">
        <p>2ndシングル『世界には愛しかない』を彷彿とさせるような小林由依のポエトリーリーディングから始まるこの楽曲は、相次ぐメンバーの卒業の後、リリースされた。</p>
      </div>
      <div class="single_text2">
        <p>前作、『黒い羊』までセンターを務めた平手友梨奈に象徴されるような1人のセンターを配置したフォーメーションではなく、センターが入れ替わりながらパフォーマンスが展開される。</p>
      </div>
      <HistoryLine />
    </div>
    <div class="single_movie">
      <div class="movie_contents">
        <v-container>
          <v-row>
            <v-col >
              <v-img height="400px" width="600px"
                src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/gallery%2Fsingle%2Fdarekane.jpg?alt=media&token=376c3ef5-1b2d-44a0-8a1b-155e5ca70b88">
              </v-img>
            </v-col>
          </v-row>
        </v-container>
        <div class="movie_text">
          <p>「瞳を閉じて 聴いてごらんよ 自分の言いたいことを 声高に言い合ってるだけだ 際限のない自己主張は ただのノイズでしかない」<br>
          という歌詞が表現するように、現実の世界やSNSといったインターネット上で日々発せられる不特定多数からの主張に対して、<br>
          冷静さを取り戻し、他者の言葉に耳を傾けることを伝えている。</p>
        </div>
      </div>
    </div>

  </v-main>
</template>

<script>
  import HistoryLine from '~/components/History/HistoryLine.vue'
  export default {
    layout: 'Historydefault',
    components: {
      HistoryLine
    }
  }
</script>

<style>
  .single_image {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/slideshow-pic%2Fslideshow9.jpg?alt=media&token=9a038398-8b30-40d1-99f1-eea26c07d9df);
  }

  .single_logo {
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }

  .scroll {
    position: absolute;
    left: 50%;
    top: 90%;
    -ms-transform: translate(-50%, -90%);
    -webkit-transform: translate(-50%, -90%);
    transform: translate(-50%, -90%);
    margin: 0;
    padding: 0;
  }

  /* 丸の取り囲むやつ */
  .roundwrap {
    width: 30px;
    height: 70px;
    border: solid;
    border-color: white;
    border-radius: 40px;
    position: relative;
    left: 27%;
  }

  /* マルのcss */
  .round {
    color: white;
    font-size: 50px;
    display: inline-block;
    position: absolute;
    left: -50%;
    top: 0%;
    -ms-transform: translate(50%, -0%);
    -webkit-transform: translate(50%, -0%);
    transform: translate(50%, -0%);
    margin: 0;
    padding: 0;
    animation: move-y .7s infinite alternate ease-in-out;
  }

  /* マルのアニメーション */
  @keyframes move-y {
    from {
      transform: translateY(-15px);
    }

    to {
      transform: translateY(10px);
    }
  }

  .singleline {
    width: 1px;
    height: 200px;
    background-color: white;
    position: absolute;
    left: 50%;
    top: 130%;
    -ms-transform: translate(-50%, -130%);
    -webkit-transform: translate(-50%, -13%);
    transform: translate(-50%, -130%);
    margin: 0;
    padding: 0;
    z-index: 100;
  }

  .outline {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
  }

  .single_outline {
    text-shadow: 3px 3px 2px #0f0f0f;
    font-size: 25px;
    width: 1000px;
    left: 5%;
    top: 25%;
    position: absolute;
    -ms-transform: translate(-5%, -25%);
    -webkit-transform: translate(-5%, -25%);
    transform: translate(-5%, -25%);
    margin: 0;
    padding: 0;
  }

  .single_outline2 {
    text-shadow: 3px 3px 2px #0f0f0f;
    font-size: 25px;
    width: 1000px;
    left: 140%;
    top: 35%;
    position: absolute;
    -ms-transform: translate(-140%, -35%);
    -webkit-transform: translate(-140%, -35%);
    transform: translate(-140%, -35%);
    margin: 0;
    padding: 0;
  }

  .jacket_contents {
    width: 1600px;
    left: 55%;
    top: 70%;
    position: absolute;
    -ms-transform: translate(-55%, -70%);
    -webkit-transform: translate(-55%, -70%);
    transform: translate(-55%, -70%);
    margin: 0;
    padding: 0;
  }

  #span {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .jacket {
    left: 41%;
    width: 250px;
    height: 250px;
    overflow: hidden;
    margin: 10px 8px 10px 16px;
    position: relative;
  }

  .jacket .songs {
    font-size: 10px;
    line-height: 20px;
    margin-top: 55px;
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


  .jacket-imgs {
    position: relative;
    overflow: hidden;
  }

  .jacket-imgs ul {
    list-style: none;
    position: relative;
    left: 50%;
    float: left;
    margin-left: -25px;
  }

  .jacket-imgs ul li {
    position: relative;
    left: -50%;
    float: left;
    margin-left: 10px;
  }

  .single_textbox {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2F9th%2F9th.jpg?alt=media&token=6f4beaac-63cb-460b-b12f-fa3fbb3f50ef);
  }

  .single_text {
    text-shadow: 3px 3px 2px #0f0f0f;
    font-size: 25px;
    width: 1400px;
    left: 45%;
    top: 25%;
    position: absolute;
    -ms-transform: translate(-45%, -25%);
    -webkit-transform: translate(-45%, -25%);
    transform: translate(-45%, -25%);
    margin: 0;
    padding: 0;
  }

  .single_text2 {
    text-shadow: 4px 4px 4px #0f0f0f;
    font-size: 25px;
    width: 1450px;
    left: 100%;
    top: 80%;
    position: absolute;
    -ms-transform: translate(-100%, -80%);
    -webkit-transform: translate(-100%, -80%);
    transform: translate(-100%, -80%);
    margin: 0;
    padding: 0;
  }

  .single_text3 {
    font-size: 23px;
    width: 1600px;
    left: 0%;
    top: 80%;
    position: absolute;
    -ms-transform: translate(-0%, -80%);
    -webkit-transform: translate(-0%, -80%);
    transform: translate(-0%, -80%);
    margin: 0;
    padding: 0;
  }

  .single_movie {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
  }

  .movie_contents {
    font-size: 22px;
    left: 50%;
    top: 45%;
    position: absolute;
    -ms-transform: translate(-50%, -45%);
    -webkit-transform: translate(-50%, -45%);
    transform: translate(-50%, -45%);
    margin: 0;
    padding: 0;
  }

  .movie_text {
    text-shadow: 3px 3px 2px #0f0f0f;
    width: 1600px;
    left: 30%;
    top: 130%;
    position: absolute;
    -ms-transform: translate(-30%, -130%);
    -webkit-transform: translate(-30%, -130%);
    transform: translate(-30%, -130%);
    margin: 0;
    padding: 0;
  }
</style>