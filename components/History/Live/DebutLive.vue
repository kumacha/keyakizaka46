<template>
  <div id="historycontents">
    <a name="2016"></a>
    <div class="debutlivek">
      <div class="ariakedate"><p>2016年3月17日</p></div>
      <div class="debutlivetext1">
        <p>「欅坂46生中継！デビューカウントダウンライブ！」</p>
      </div>
      <div class="debutlivetext2"><p>in東京国際フォーラム</p></div>
      <div class="debutlivetext3"><p>欅坂46結成後　初のライブ！</p></div>
      <div class="debutlivetext4">
        <p>デビューシングルの表題曲「サイレントマジョリティー」などを披露</p>
      </div>
      <!-- <div class="hismore"><p>>>MORE</p></div> -->
      <HistoryLine />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.debutlivek {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fcountdown2.jpg?alt=media&token=6193a63f-b66c-4657-bde1-4dc32cb80d31);
}
.debutlivetext1 p {
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

.debutlivetext2 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 210%;
  top: 45%;
  -ms-transform: translate(-210%, -45%);
  -webkit-transform: translate(-210%, -45%);
  transform: translate(-210%, -45%);
  margin: 0;
  padding: 0;
}

.debutlivetext3 p {
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
.debutlivetext4 p {
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
