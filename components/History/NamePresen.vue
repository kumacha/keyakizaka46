<template>
  <div class="NamePresen">
    <div class="ariakedate">
      <p>2020年9月20日</p>
    </div>
    <div class="NamePresentext1">
      <p>新グループ名「櫻坂46」をサプライズ発表</p>
    </div>
    <div class="NamePresentext2">
      <p>東京・渋谷のスクランブル交差点の街頭ビジョンで発表された</p>
    </div>
    <div class="NamePresentext3">
      <p>9月21日午前6時、新グループ名を公式サイトで発表</p>
    </div>
    <HistoryLine />
  </div>
</template>

<script>
  import HistoryLine from '~/components/History/HistoryLine.vue'
  export default {
    components: {
      HistoryLine
    }
  }
</script>

<style>
  .NamePresen {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
  }

  .NamePresentext1 p {
    width: 1000px;
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

  .NamePresentext2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 45%;
    -ms-transform: translate(-50%, -45%);
    -webkit-transform: translate(-50%, -45%);
    transform: translate(-50%, -45%);
    margin: 0;
    padding: 0;
  }

  .NamePresentext3 p {
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