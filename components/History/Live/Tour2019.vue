<template>
  <div id="historycontents">
    <div class="Tour2019">
      <div class="ariakedate">
        <p>2018年8月16日-9月6日</p>
      </div>
      <div class="Tour2019text1">
        <p>「欅坂46 夏の全国アリーナツアー2019」</p>
      </div>
      <div class="Tour2019text2">
        <p></p>
      </div>
      <div class="Tour2019text3">
        <p>4箇所10公演</p>
      </div>
      <div class="Tour2019text4">
        <p>平手復活時の避雷針は伝説</p>
      </div>
      <HistoryLine />
      　　
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .Tour2019 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/tour2019.jpg?alt=media&token=1ff5c4ad-0586-449d-bd00-1aeebd4d56bb);
  }

  .Tour2019text1 p {
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

  .Tour2019text2 p {
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

  .Tour2019text3 p {
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

  .Tour2019text4 p {
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