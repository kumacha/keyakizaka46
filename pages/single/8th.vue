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
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle_8th.png?alt=media&token=2405bfbc-1f35-4473-8160-93eb1966fa86">
      </v-img>
    </div>

    <div class="jacket-imgs">
      <ul>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-A.jpg?alt=media&token=4dd74039-c04a-49c1-a893-477db996e230">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-A》収録曲<br>
                1. 黒い羊<br>
                2. 君に話しておきたいこと<br>
                3. Nobody<br>
                4. 黒い羊 off vocal ver.<br>
                5. 君に話しておきたいこと off vocal ver.<br>
                6. Nobody off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-B.jpg?alt=media&token=92ec643a-65ed-4fb6-8073-dc2e19f2d5d2">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-B》収録曲<br>
                1. 黒い羊<br>
                2. 君に話しておきたいこと<br>
                3. 抱きしめてやる<br>
                4. 黒い羊 off vocal ver.<br>
                5. 君に話しておきたいこと off vocal ver.<br>
                6. 抱きしめてやる off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-C.jpg?alt=media&token=f86737bb-8fb4-45eb-bf86-adc495f051d6">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-C》収録曲<br>
                1. 黒い羊<br>
                2. 君に話しておきたいこと<br>
                3. ヒールの高さ<br>
                4. 黒い羊 off vocal ver.<br>
                5. 君に話しておきたいこと off vocal ver.<br>
                6. ヒールの高さ off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-D.jpg?alt=media&token=16a8a1d5-8a7d-4ba4-aac2-e6841f228220">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-D》収録曲<br>
                1. 黒い羊<br>
                2. 君に話しておきたいこと<br>
                3. ごめんね クリスマス<br>
                4. 黒い羊 off vocal ver.<br>
                5. 君に話しておきたいこと off vocal ver.<br>
                6. ごめんね クリスマス off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-E.jpg?alt=media&token=0255956d-b4d0-48ef-9056-b72274ccd8b2">
            </v-img>
            <div class="mask">
              <div class="songs">
                《通常盤》収録曲<br>
                1. 黒い羊<br>
                2. 君に話しておきたいこと<br>
                3. 否定した未来<br>
                4. 黒い羊 off vocal ver.<br>
                5. 君に話しておきたいこと off vocal ver.<br>
                6. 否定した未来 off vocal ver.<br>
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
    margin-left: -25px;
  }

  .jacket-imgs ul li {
    position: relative;
    left: -50%;
    float: left;
    margin-left: 10px;
  }

</style>
