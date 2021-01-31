<template>
<v-main>
  <div class="LastLive">
  <div class="LastLivedate">
    <p>2020年10月12日・13日</p>
  </div>
  <div class="LastLivetext1">
    <p>『欅坂46 THE LAST LIVE』</p>
  </div>
  <div class="LastLivetext2">
    <p>in 国立代々木競技場第一体育館</p>
  </div>
  <div class="LastLivetext3">
    <p></p>
  </div>
  <div class="LastLivetext4">
    <p></p>
  </div>
  <HistoryLine />
</div>
<div class="LastLive2">
  <div class="LastLivedate">
    <p></p>
  </div>
  <div class="LastLive2text1">
    <p></p>
  </div>
  <div class="LastLive2text2">
    <p></p>
  </div>
  <div class="LastLive2text3">
    <p>欅坂46としての最後のライブを無観客配信ライブとして開催</p>
  </div>
  <div class="LastLive2text4">
    <p></p>
  </div>
  <HistoryLine />
</div>
<div class="LastLive3">
  <div class="LastLivedate">
    <p></p>
  </div>
  <div class="LastLive3text1">
    <p></p>
  </div>
  <div class="LastLive3text2">
    <p></p>
  </div>
  <div class="LastLive2text3">
    <p>1曲1曲が最後のパフォーマンス</p>
  </div>
  <div class="LastLive3text4">
    <p></p>
  </div>
  <HistoryLine />
</div>
<div class="LastLive4">
  <div class="LastLivedate">
    <p></p>
  </div>
  <div class="LastLive3text1">
    <p></p>
  </div>
  <div class="LastLive3text2">
    <p></p>
  </div>
  <div class="LastLive2text3">
    <p>このライブをもって欅坂46としての活動を休止</p>
  </div>
  <div class="LastLive3text4">
    <p></p>
  </div>
  <HistoryLine />
</div>
</v-main>
</template>

<script>
import HistoryLine from '~/components/History/HistoryLine.vue'
export default {
components:{
      HistoryLine
    }
}
</script>

<style>
.LastLivedate{
    font-size: 45px;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    padding: 0;
}
.LastLive {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Flastlive%2FLastlive.jpg?alt=media&token=302c2a08-7722-4b61-9f05-da22de6cd816);
  }
  .LastLive2 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Flastlive%2FLastLive3.jpg?alt=media&token=9145a39d-b378-42e1-916c-9d18e838bdf1);
  }
    .LastLive3 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Flastlive%2FLastLive2.jpg?alt=media&token=45f10d3e-c6fb-4096-82c1-599bfa5e4559);
  }
  .LastLive4 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Flastlive%2FLastsing.jpg?alt=media&token=060d2f7f-4c4a-473f-a0e2-5e7079da7e3e);
  }
.LastLivetext1 p {
    width: 1400px;
    text-align: center;
    font-size: 70px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .LastLivetext2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 150%;
    top: 45%;
    -ms-transform: translate(-150%, -45%);
    -webkit-transform: translate(-150%, -45%);
    transform: translate(-150%, -45%);
    margin: 0;
    padding: 0;
  }

  .LastLivetext3 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 60%;
    -ms-transform: translate(-50%, -60%);
    -webkit-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);
    margin: 0;
    padding: 0;
  }
  .LastLivetext4 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 75%;
    -ms-transform: translate(-50%, -75%);
    -webkit-transform: translate(-50%, -75%);
    transform: translate(-50%, -75%);
    margin: 0;
    padding: 0;
  }
  .LastLive2text1 p {
    width: 1400px;
    text-align: center;
    font-size: 70px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .LastLive2text2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 150%;
    top: 45%;
    -ms-transform: translate(-150%, -45%);
    -webkit-transform: translate(-150%, -45%);
    transform: translate(-150%, -45%);
    margin: 0;
    padding: 0;
  }

  .LastLive2text3 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 55%;
    -ms-transform: translate(-50%, -55%);
    -webkit-transform: translate(-50%, -55%);
    transform: translate(-50%, -55%);
    margin: 0;
    padding: 0;
  }
  .LastLive2text4 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
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