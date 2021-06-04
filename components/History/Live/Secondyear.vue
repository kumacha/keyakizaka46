<template>
  <div id="historycontents">
    <div class="Secondyear">
      <div class="ariakedate"><p>2018年4月6日-8日</p></div>
      <div class="Secondyeartext1"><p>欅坂46 2nd YEAR ANNIVERSATY LIVE</p></div>
      <div class="Secondyeartext2">
        <p>in 武蔵野の森総合スポーツプラザ メインアリーナ</p>
      </div>
      <div class="Secondyeartext3">
        <p>センター平手不在で迎えた2周年記念ライブ</p>
      </div>
      <div class="Secondyeartext4">
        <p>多くのメンバーがセンターを経験した</p>
      </div>
      <HistoryLine />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Secondyear {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Faniverlive%2FSecondyear.jpg?alt=media&token=97f7c3a8-65ca-4985-b7ad-e68f409ac2a6);
}
.Secondyeartext1 p {
  width: 1400px;
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 35%;
  -ms-transform: translate(-50%, -35%);
  -webkit-transform: translate(-50%, -35%);
  transform: translate(-50%, -35%);
  margin: 0;
  padding: 0;
}

.Secondyeartext2 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 110%;
  top: 45%;
  -ms-transform: translate(-110%, -45%);
  -webkit-transform: translate(-110%, -45%);
  transform: translate(-110%, -45%);
  margin: 0;
  padding: 0;
}

.Secondyeartext3 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 60%;
  -ms-transform: translate(-50%, -60%);
  -webkit-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
  margin: 0;
  padding: 0;
}
.Secondyeartext4 p {
  width: 1400px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 75%;
  -ms-transform: translate(-50%, -75%);
  -webkit-transform: translate(-50%, -75%);
  transform: translate(-50%, -75%);
  margin: 0;
  padding: 0;
}
</style>
