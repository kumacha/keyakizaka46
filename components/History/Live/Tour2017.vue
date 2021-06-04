<template>
  <div id="historycontents">
    <div class="Tour2017">
      <div class="ariakedate">
        <p>2017年8月2日-8月30日</p>
      </div>
      <div class="Tour2017text1">
        <p>「欅坂46 全国ツアー2017 真っ白なものは汚したくなる」</p>
      </div>
      <div class="Tour2017text2">
        <p></p>
      </div>
      <div class="Tour2017text3">
        <p>欅坂46結成後　初の全国ツアー！</p>
      </div>
      <div class="Tour2017text4">
        <p>セトリ一発目のエキセントリックは鳥肌もの</p>
      </div>
      <HistoryLine />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.Tour2017 {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Ftour2017%2Ftour2017.jpg?alt=media&token=cc95081e-1265-41f1-be35-63b9b723e575);
}

.Tour2017text1 p {
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

.Tour2017text2 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 150%;
  top: 45%;
  -ms-transform: translate(-150%, -45%);
  -webkit-transform: translate(-150%, -45%);
  transform: translate(-150%, -45%);
  margin: 0;
  padding: 0;
}

.Tour2017text3 p {
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

.Tour2017text4 p {
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

.hismore p {
  width: 400px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 90%;
  top: 95%;
  -ms-transform: translate(-90%, -95%);
  -webkit-transform: translate(-90%, -95%);
  transform: translate(-90%, -95%);
  margin: 0;
  padding: 0;
}

.hismore p :hover {
  opacity: 70%;
}

.hismore p::after {
  position: absolute;
  bottom: 0px;
  left: 5%;
  content: "";
  width: 100%;
  height: 2px;
  background: white;
  transform: scale(0, 1);
  transform-origin: right top;
  transition: transform 0.4s;
}

.hismore p:hover::after {
  transform-origin: left top;
  transform: scale(1, 1);
}
</style>
