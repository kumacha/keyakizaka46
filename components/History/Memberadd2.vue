<template>
  <div class="Memberadd2">
    <div class="ariakedate">
      <p>2018年11月29日</p>
    </div>
    <div class="Memberadd2text1">
      <p>坂道研修生 配属発表 SHOWROOM</p>
    </div>
    <div class="Memberadd2text2">
      <p>配信で坂道研修生から欅坂46の新2期生として6名の加入が発表される</p>
    </div>
    <!-- <div class="Memberadd2text3">
      <p>会見後、グループ名を「欅坂46」に変更されることが発表される。</p>
    </div> -->
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
  .Memberadd2 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Flastlive%2Fshowroom.jpg?alt=media&token=cc6575e4-4eae-4ced-9ca2-b046a74bc9d8);
  }

  .Memberadd2text1 p {
    width: 1000px;
    text-align: center;
    font-size: 50px;
    position: absolute;
    left: 50%;
    top: 40%;
    -ms-transform: translate(-50%, -40%);
    -webkit-transform: translate(-50%, -40%);
    transform: translate(-50%, -40%);
    margin: 0;
    padding: 0;
  }

  .Memberadd2text4 p {
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

  .Memberadd2text2 p {
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