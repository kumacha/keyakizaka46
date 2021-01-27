<template>
<div id="historycontents">
  <div class="masshiro">
      <div class="date"><p>2017年7月19日</p></div>
      <div class="masshirotext1"><p>1stアルバム「真っ白なものは汚したくなる」発売</p></div>
      <div class="masshirotext2"><p>初週売上約26万2000枚、オリコン1位獲得</p></div>
      <div class="masshirotext3"><p>女性アーティストのデビューシングル初週売上歴代1位。</p></div>
      <div class="discomore"><p>Discographyへ</p></div>
      <HistoryLine/>
　　</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.masshiro {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fmasshiro2.jpg?alt=media&token=eaca4d6e-229d-4793-96c9-ad3c8299bfbc);
  }

  .masshirotext1 p {
    width: 1600px;
    text-align: center;
    font-size: 65px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .masshirotext2 p {
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
  .masshirotext3 p {
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
  .discomore p{
    width: 400px;
    text-align: center;
    font-size: 25px;
    position: absolute;
    left: 100%;
    top: 95%;
    -ms-transform: translate(-100%, -95%);
    -webkit-transform: translate(-100%, -95%);
    transform: translate(-100%, -95%);
    margin: 0;
    padding: 0;
  }
</style>