<template>
<div id="historycontents">
  <div class="single">
      <div class="date"><p>2016年4月6日</p></div>
      <div class="singletext1"><p>1st Single サイレントマジョリティー発売</p></div>
      <div class="singletext2"><p>初週売上約26万2000枚、オリコン1位獲得</p></div>
      <div class="singletext3"><p>女性アーティストのデビューシングル初週売上歴代1位。</p></div>
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
.single {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url();
  }

  .singletext1 p {
    width: 1400px;
    text-align: center;
    font-size: 70px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .singletext2 p {
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
  .singletext3 p {
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