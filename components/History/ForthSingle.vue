<template>
<div id="historycontents">
  <div class="forthsingle">
      <div class="date"><p>2017年4月5日</p></div>
      <div class="forthsingletext1"><p>4th Single 「不協和音」発売</p></div>
      <div class="forthsingletext2"><p>初週売上約26万2000枚、オリコン1位獲得</p></div>
      <div class="forthsingletext3"><p>女性アーティストのデビューシングル初週売上歴代1位。</p></div>
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
.forthsingle {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/slideshow-pic%2Fslideshow4.jpg?alt=media&token=3171adf3-99b4-415a-85aa-0cfcdcd5cfaf);
  }

  .forthsingletext1 p {
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

  .forthsingletext2 p {
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
  .forthsingletext3 p {
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