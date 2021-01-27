<template>
<div class="tokuyama">
  <div class="date">
    <p>2016年7月17日</p>
  </div>
  <div class="tokuyamatext1">
    <p>初主演ドラマ「徳山大五郎を誰が殺したか？」（テレビ東京）</p>
  </div>
  <div class="tokuyamatext2">
    <p>主題歌に2nd Single「世界には愛しかない」起用</p>
  </div>
  <div class="tokuyamatext3">
    <p>メンバーの初々しい演技に注目</p>
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
.tokuyama {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
  }
.tokuyamatext1 p {
    width: 1400px;
    text-align: center;
    font-size: 50px;
    position: absolute;
    left: 50%;
    top: 30%;
    -ms-transform: translate(-50%, -30%);
    -webkit-transform: translate(-50%, -30%);
    transform: translate(-50%, -30%);
    margin: 0;
    padding: 0;
  }

  .tokuyamatext2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 50%;
    -ms-transform: translate(-50%, -50%);
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    margin: 0;
    padding: 0;
  }

  .tokuyamatext3 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 70%;
    -ms-transform: translate(-50%, -70%);
    -webkit-transform: translate(-50%, -70%);
    transform: translate(-50%, -70%);
    margin: 0;
    padding: 0;
  }
</style>