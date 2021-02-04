<template>
<v-main>
  <div class="keyakikoero"></div>
  <div class="sake"></div>
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
</v-main>
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
.keyakikoero{
  width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fsakurazaka46%2Fkeyakikoero.jpg?alt=media&token=f765eec0-a5aa-4f50-bed6-438aadc4d426);
}
.sake{
  width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fsakurazaka46%2Fsake.jpg?alt=media&token=9fc1f77c-ae58-40fb-96e8-800079917985)
}
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
    width: 1400px;
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