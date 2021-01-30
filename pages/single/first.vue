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
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle-1st.png?alt=media&token=c4ebb812-0173-4e99-b980-86ab8ceb5cd3">
      </v-img>
    </div>

<div class="jacket-imgs">
    <ul>
      <li>
        <div class="jacket">
          <v-img class="typeA" max-height="250" max-width="250"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-A.jpg?alt=media&token=51381e49-5708-4fb1-8013-2264862f73ff">
          </v-img>
          <div class="mask">
            <div class="songs">
              TYPE-A《収録曲》<br>
              1. サイレントマジョリティー<br>
              2. 手を繋いで帰ろうか<br>
              3. 山手線<br>
              4. サイレントマジョリティー off vocal ver.<br>
              5. 手を繋いで帰ろうか off vocal ver.<br>
              6. 山手線 off vocal ver.<br>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="jacket">
          <v-img class="typeA" max-height="250" max-width="250"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-B.jpg?alt=media&token=e823bc5a-c7f3-44bd-9e31-70bf88fb2039">
          </v-img>
          <div class="mask">
            <div class="songs">
              TYPE-B《収録曲》<br>
              1. サイレントマジョリティー<br>
              2. 手を繋いで帰ろうか<br>
              3. 渋谷川<br>
              4. サイレントマジョリティー off vocal ver.<br>
              5. 手を繋いで帰ろうか off vocal ver.<br>
              6. 渋谷川 off vocal ver.<br>
            </div>
          </div>
        </div>
      </li>

      <li>
      <li>
        <div class="jacket">
          <v-img class="typeA" max-height="250" max-width="250"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-C.jpg?alt=media&token=cbbc7921-423c-4559-a9f7-04c89ce98a90">
          </v-img>
          <div class="mask">
            <div class="songs">
              TYPE-C《収録曲》<br>
              1. サイレントマジョリティー<br>
              2. 手を繋いで帰ろうか<br>
              3. 乗り遅れたバス<br>
              4. サイレントマジョリティー off vocal ver.<br>
              5. 手を繋いで帰ろうか off vocal ver.<br>
              6. 乗り遅れたバス off vocal ver.<br>
            </div>
          </div>
        </div>
      </li>

      <li>
        <div class="jacket">
          <v-img class="typeA" max-height="250" max-width="250"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-D.jpg?alt=media&token=4899fdfe-96c6-443f-be13-c559f2d9c75e">
          </v-img>
          <div class="mask">
            <div class="songs">
              通常盤《収録曲》<br>
              1. サイレントマジョリティー<br>
              2. 手を繋いで帰ろうか<br>
              3. キミガイナイ<br>
              4. サイレントマジョリティー off vocal ver.<br>
              5. 手を繋いで帰ろうか off vocal ver.<br>
              6. キミガイナイ off vocal ver.<br>
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
  .m-btn {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .single-img {
    margin-top: 40px;
    max-width: 800px;
    margin-left: auto;
    margin-right: auto;
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
    margin-top: 75px;
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
	overflow: hidden; /* ulでリスト全体を右に50%移動している分幅が広がりスクロールバーが表示されるのを防ぐ */
}
 
.jacket-imgs ul {
  list-style: none;
	position: relative;
	left: 50%; /* ulを右に50%移動 */
	float: left;
	margin-left: -5px;/* liのmarginの半分をネガティブマージン（しないと右にずれる） */
}
 
.jacket-imgs ul li {
	position: relative;
	left: -50%; /* 左に50%移動 */
	float: left;
	margin-left: 10px;
}
</style>
