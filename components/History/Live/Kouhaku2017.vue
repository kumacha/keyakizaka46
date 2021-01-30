<template>
<div id="historycontents">
  <div class="kouhaku2017">
      <div class="ariakedate"><p>2017年12月31日</p></div>
      <div class="kouhaku2017text1"><p>第68回ＮＨＫ紅白歌合戦</p></div>
      <div class="kouhaku2017text2"><p>in NHKホール</p></div>
      <div class="kouhaku2017text3"><p>2年連続2回目の紅白歌合戦出場！</p></div>
      <div class="kouhaku2017text4"><p>4th Single「不協和音」を披露</p></div>
      <HistoryLine/>
　　</div>
</div>
</template>

<script>
  export default {

  }
</script>

<style>
  .kouhaku2017 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
  }
  .kouhaku2017text1 p {
    width: 1400px;
    text-align: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .kouhaku2017text2 p {
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

  .kouhaku2017text3 p {
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
  .kouhaku2017text4 p {
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
  .hismore p{
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
  .hismore p :hover{
    opacity: 70%;
}
.hismore p::after {
    position: absolute;
    bottom: 0px;
    left: 5%;
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform .4s;
  }
   .hismore p:hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
</style>