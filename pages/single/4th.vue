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
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle_4th.png?alt=media&token=0d733d53-9260-44b2-b73c-014a9b21a166">
      </v-img>
    </div>

    <div class="jacket-imgs">
      <ul>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-A.jpg?alt=media&token=9ab870b0-dd05-4e40-90e4-4141d55b5b0c">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-A》収録曲<br>
                1. 不協和音<br>
                2. W-KEYAKIZAKAの詩<br>
                3. 微笑みが悲しい<br>
                4. 不協和音 off vocal ver.<br>
                5. W-KEYAKIZAKAの詩　off vocal ver.<br>
                6. 微笑みが悲しい off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-B.jpg?alt=media&token=9f8f6107-34e9-4f2a-b072-f0fb32fd41e7">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-B》収録曲<br>
                1. 不協和音<br>
                2. W-KEYAKIZAKAの詩<br>
                3. チューニング<br>
                4. 不協和音 off vocal ver.<br>
                5. W-KEYAKIZAKAの詩　off vocal ver.<br>
                6. チューニング off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-C.jpg?alt=media&token=31443a8b-b86c-44e4-92e4-e2d65d38a2c9">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-C》収録曲<br>
                1. 不協和音<br>
                2. W-KEYAKIZAKAの詩<br>
                3. 割れたスマホ<br>
                4. 不協和音 off vocal ver.<br>
                5. W-KEYAKIZAKAの詩　off vocal ver.<br>
                6. 割れたスマホ　off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-D.jpg?alt=media&token=fa96d306-1dad-468e-b0c9-76c5365d1f4b">
            </v-img>
            <div class="mask">
              <div class="songs">
                《TYPE-D》収録曲<br>
                1. 不協和音<br>
                2. W-KEYAKIZAKAの詩<br>
                3. 僕たちは付き合っている<br>
                4. 不協和音 off vocal ver.<br>
                5. W-KEYAKIZAKAの詩　off vocal ver.<br>
                6. 僕たちは付き合っている off vocal ver.<br>
              </div>
            </div>
          </div>
        </li>

        <li>
          <div class="jacket">
            <v-img class="type" max-height="250" max-width="250"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-E.jpg?alt=media&token=e679adde-e422-457a-a9d9-6ebf76b5ca6a">
            </v-img>
            <div class="mask">
              <div class="songs">
                《通常盤》収録曲<br>
                1. 不協和音<br>
                2. W-KEYAKIZAKAの詩<br>
                3. エキセントリック<br>
                4. 不協和音 off vocal ver.<br>
                5. W-KEYAKIZAKAの詩　off vocal ver.<br>
                6. エキセントリック off vocal ver.<br>
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
