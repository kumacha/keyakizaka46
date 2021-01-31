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
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle_3rd.png?alt=media&token=9bc8d88c-46ea-4803-b077-0d9771bd8429">
      </v-img>
    </div>

    <div class="jacket-imgs">
      <ul>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-A.jpg?alt=media&token=9499f8c3-4df5-40f6-a778-00fde3644904">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-A》収録曲<br>
                1. 二人セゾン<br>
                2. 大人は信じてくれない<br>
                3. 制服と太陽<br>
                4. 二人セゾン　off vocal ver.<br>
                5. 大人は信じてくれない off vocal ver.<br>
                6. 制服と太陽 off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-B.jpg?alt=media&token=51481cc2-c2f0-40dd-9e3a-8c4966146951">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-B》収録曲<br>
                1. 二人セゾン<br>
                2. 大人は信じてくれない<br>
                3. 誰よりも高く跳べ！<br>
                4. 二人セゾン　off vocal ver.<br>
                5. 大人は信じてくれない off vocal ver.<br>
                6. 誰よりも高く跳べ！ off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-C.jpg?alt=media&token=33b3c098-e65e-4e2f-83dd-624750ca9cc0">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-C》収録曲<br>
                1. 二人セゾン<br>
                2. 大人は信じてくれない<br>
                3. 僕たちの戦争<br>
                4. 二人セゾン　off vocal ver.<br>
                5. 大人は信じてくれない off vocal ver.<br>
                6. 僕たちの戦争 off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-D.jpg?alt=media&token=c0520f3b-b93d-4823-b256-d30ca4c83aff">
            </v-img>
            <div class="mask">
              <div class="songs">
                《通常盤》収録曲<br>
                1. 二人セゾン<br>
                2. 大人は信じてくれない<br>
                3. 夕陽1/3<br>
                4. 二人セゾン　off vocal ver.<br>
                5. 大人は信じてくれない off vocal ver.<br>
                6. 夕陽1/3 off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="single-intro">
      2016年11月30日に欅坂46の3枚目のシングル曲として発売。「セゾン」はフランス語で季節を意味しており、二人セゾンは二人の季節という意味になる。加えて、歌詞には「春夏で恋をして」「秋冬で去っていく」と春夏秋冬を通じて始まり終わった恋の描写がされている。
      曲の内容としては、内容は恋人と過ごした日々とその経験から得られたものをセゾン、つまり季節になぞらえて歌われている。そして、「出会い」や「別れ」を恐れる人たちに向けた別れは決してマイナスではなく、自分が前に進んでいる証拠といったメッセージが込められた応援ソングになっている。
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
    margin-left: -20px;
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
