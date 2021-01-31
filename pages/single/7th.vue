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
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle_7th.png?alt=media&token=b74ae779-aac6-4763-b626-f260b9effb07">
      </v-img>
    </div>

    <div class="jacket-imgs">
      <ul>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-A.jpg?alt=media&token=128bed58-3074-4107-9bf7-b0fab902d9f0">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-A》収録曲<br>
                1. アンビバレント<br>
                2. Student Dance<br>
                3. I'm out<br>
                4. アンビバレント　off vocal ver.<br>
                5. Student Dance　off vocal ver.<br>
                6. I'm out　off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-B.jpg?alt=media&token=d3984e85-9542-4006-8993-15876a9c463b">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-B》収録曲<br>
                1. アンビバレント<br>
                2. Student Dance<br>
                3. ハッピーオーラ<br>
                4. アンビバレント　off vocal ver.<br>
                5. Student Dance　off vocal ver.<br>
                6. ハッピーオーラ　off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-C.jpg?alt=media&token=a68e2bec-5a22-4a62-8023-9c702754d952">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-C》収録曲<br>
                1. アンビバレント<br>
                2. Student Dance<br>
                3. 302号室<br>
                4. アンビバレント　off vocal ver.<br>
                5. Student Dance　off vocal ver.<br>
                6. 302号室　off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-D.jpg?alt=media&token=b872d5b6-33df-4f76-a3fd-2039755ba2bb">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-D》収録曲<br>
                1. アンビバレント<br>
                2. Student Dance<br>
                3. 音楽室に片想い<br>
                4. アンビバレント　off vocal ver.<br>
                5. Student Dance　off vocal ver.<br>
                6. 音楽室に片想い　off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-E.jpg?alt=media&token=fd424091-17a7-4591-94d4-d2569c945d7e">
            </v-img>
            <div class="mask">
              <div class="songs">
                《通常盤》収録曲<br>
                1. アンビバレント<br>
                2. Student Dance<br>
                3. 日が昇るまで<br>
                4. アンビバレント　off vocal ver.<br>
                5. Student Dance　off vocal ver.<br>
                6. 日が昇るまで　off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </v-main>
</template>

<script>
  export default {

  }

</script>

<style>
  .single1-img {
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
    margin-left: -25px;
  }

  .jacket-imgs ul li {
    position: relative;
    left: -50%;
    float: left;
    margin-left: 10px;
  }

</style>
