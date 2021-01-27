<template>
  <div class="debut2">
      <div class="date"><p>2015年8月21日</p></div>
      <div class="debuttext1"><p>鳥居坂46・1期生オーディション</p></div>
      <div class="debuttext2"><p>全応募者2万25091名から21名の合格者</p></div>
        <div class="debuttext3"><p>会見後、グループ名を「欅坂46」に変更されることが発表される。</p></div>
        <HistoryLine/>
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
  .debut2 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
  }

  .date p {
    width: 1000px;
    text-align: center;
    font-size: 45px;
    position: absolute;
    right: 150%;
    top: 10%;
    -ms-transform: translate(150%, 10%);
    -webkit-transform: translate(150%, 10%);
    transform: translate(150%, 10%);
    margin: 0;
    padding: 0;
  }

  .debuttext1 p {
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

  .debuttext2 p {
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

  .debuttext3 p {
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