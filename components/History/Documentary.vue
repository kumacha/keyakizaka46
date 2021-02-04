<template>
  <div class="Documentary">
    <div class="ariakedate">
      <p>2020年9月4日</p>
    </div>
    <div class="Documentarytext1">
      <p>『僕たちの嘘と真実 Documentary of 欅坂46』を公開</p>
    </div>
    <div class="Documentarytext2">
      <p>欅坂46、最初で最後のドキュメンタリー映画</p>
    </div>
    <div class="Documentarytext3">
      <p>当初は4月3日に公開予定だったが、新型コロナウイルスの影響により公開延期となり9月公開</p>
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
  .Documentary {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistoy%2Fmovie.jpg?alt=media&token=12f296b2-b69b-4fb7-aaed-5adbdd1339be);
  }
  .Documentarytext1 p {
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

  .Documentarytext2 p {
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

  .Documentarytext3 p {
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