<template>
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
    <p>欅坂46としての最後のライブを無観客配信ライブとして開催</p>
  </div>
  <div class="LastLivetext4">
    <p>このライブをもって欅坂46としての活動を休止</p>
  </div>
  <HistoryLine />
</div>
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
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Frepublic2017a.jpg?alt=media&token=ca1a02f1-2023-4f52-b0f5-735fda9ca342);
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
    width: 1000px;
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
</style>