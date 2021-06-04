<template>
  <div id="historycontents">
    <div class="Kado">
      <div class="ariakedate"><p>2019年10月9日</p></div>
      <div class="Kadotext1">
        <p>「角を曲がる」が各ストリーミングサービス限定で配信開始</p>
      </div>
      <div class="Kadotext2">
        <p>東京ドーム公演で初披露した平手友梨奈ソロ曲。</p>
      </div>
      <div class="Kadotext3">
        <p>周囲への期待に対する葛藤を歌った歌詞が話題となる。</p>
      </div>
      <div class="discomore"><p>Discographyへ</p></div>
      <HistoryLine />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Kado {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fmusic%2Fkado.jpg?alt=media&token=3143c5f3-8214-4030-8d15-31026acb0eca);
}

.Kadotext1 p {
  width: 1400px;
  text-align: center;
  font-size: 45px;
  position: absolute;
  left: 50%;
  top: 35%;
  -ms-transform: translate(-50%, -35%);
  -webkit-transform: translate(-50%, -35%);
  transform: translate(-50%, -35%);
  margin: 0;
  padding: 0;
}

.Kadotext2 p {
  width: 1000px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 60%;
  -ms-transform: translate(-50%, -60%);
  -webkit-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
  margin: 0;
  padding: 0;
}
.Kadotext3 p {
  width: 1400px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 75%;
  -ms-transform: translate(-50%, -75%);
  -webkit-transform: translate(-50%, -75%);
  transform: translate(-50%, -75%);
  margin: 0;
  padding: 0;
}
.discomore p {
  width: 400px;
  text-align: center;
  font-size: 25px;
  position: absolute;
  left: 100%;
  top: 95%;
  -ms-transform: translate(-100%, -95%);
  -webkit-transform: translate(-100%, -95%);
  transform: translate(-100%, -95%);
  margin: 0;
  padding: 0;
}
</style>
