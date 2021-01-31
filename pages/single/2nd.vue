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
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle_2nd.png?alt=media&token=c84c8a9a-e9d1-47f1-93a9-b80c0785ebdb">
      </v-img>
    </div>

    <div class="jacket-imgs">
      <ul>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-A.jpg?alt=media&token=6a9b95e1-151b-4314-8094-a6073b184d7f">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-A》収録曲<br>
                1. 世界には愛しかない<br>
                2. 語るなら未来を…<br>
                3. 渋谷からPARCOが消えた日<br>
                4. 世界には愛しかない off vocal ver.<br>
                5. 語るなら未来を… off vocal ver.<br>
                6. 渋谷からPARCOが消えた日 off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-B.jpg?alt=media&token=b8a2d198-5cb4-4b03-9ad2-24e736fb7d76">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-B》収録曲<br>
                1. 世界には愛しかない<br>
                2. 語るなら未来を…<br>
                3. また会ってください<br>
                4. 世界には愛しかない off vocal ver.<br>
                5. 語るなら未来を… off vocal ver.<br>
                6. また会ってください off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-C.jpg?alt=media&token=906b14a3-61db-4968-bb31-6540cacff6a4">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-C》収録曲<br>
                1. 世界には愛しかない<br>
                2. 語るなら未来を…<br>
                3. 青空が違う<br>
                4. 世界には愛しかない off vocal ver.<br>
                5. 語るなら未来を… off vocal ver.<br>
                6. 青空が違う off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-D.jpg?alt=media&token=876e45a2-1e6e-4f46-b19d-9f327e068349">
            </v-img>
            <div class="mask">
              <div class="songs">
                《通常盤》収録曲<br>
                1. 世界には愛しかない<br>
                2. ボブディランは返さない<br>
                3. ひらがなけやき<br>
                4. 世界には愛しかない off vocal ver.<br>
                5. ボブディランは返さない off vocal ver.<br>
                6. ひらがなけやき off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="single-intro">
      2016年8月10日に欅坂46の2枚目のシングルとして発売され、また2016年7月から欅坂46のミステリー学園ドラマ『徳山大五郎を誰が殺したか?』の主題歌として使用された。夏を感じさせる清涼感と疾走感、そして「未来には愛しかない」「悲しみなんてその時の空模様」「だれに反対されても心の向きは変えられない」など、その時の心境をポジティブにしてくれる前向きな歌詞が特徴である。
      この楽曲の中でポエトリーリーディングという詩の朗読に挑戦している。アイドルの楽曲としては珍しいこの手法が、楽曲にどのような効果をもたらしているのかを実際に聴いて感じてもらいたい。
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
    margin-left: -5px;
  }

  .jacket-imgs ul li {
    position: relative;
    left: -50%;
    float: left;
    margin-left: 10px;
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
