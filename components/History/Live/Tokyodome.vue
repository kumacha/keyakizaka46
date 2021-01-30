<template>
  <div id="historycontents">
    <div class="Tokyodome">
      <div class="ariakedate">
        <p>2019年9月18日・9月19日</p>
      </div>
      <div class="Tokyodometext1">
        <p>欅坂46 LIVE at 東京ドーム 〜ARENA TOUR 2019 FINAL〜</p>
      </div>
      <div class="Tokyodometext2">
        <p>in 東京ドーム</p>
      </div>
      <div class="Tokyodometext3">
        <p>欅坂46、初の東京ドーム公演！</p>
      </div>
      <div class="Tokyodometext4">
        <p>1年9か月ぶりの不協和音を披露！伝説のライブ！</p>
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
  .Tokyodome {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Ftour2017%2Ftour2017.jpg?alt=media&token=cc95081e-1265-41f1-be35-63b9b723e575);
  }

  .Tokyodometext1 p {
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

  .Tokyodometext2 p {
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

  .Tokyodometext3 p {
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

  .Tokyodometext4 p {
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