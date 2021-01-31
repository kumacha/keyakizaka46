<template>
<div id="historycontents">
  <div class="firstsingle">
      <div class="firstdate"><p>2016年4月6日</p></div>
      <div class="firstsingletext1"><p>1st Single 「サイレントマジョリティー」発売</p></div>
      <div class="firstsingletext3"><p>初週売上約26万2000枚、オリコン1位獲得</p></div>
      <div class="firstsingletext4"><p>女性アーティストのデビューシングル初週売上歴代1位。</p></div>
      <div class="discomore"><p>＞＞DISCOGRAPHY</p></div>
      <HistoryLine/>
　　</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
.firstdate{
  font-size: 45px;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    padding: 0;
}
.firstsingle {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/slideshow-pic%2Fslideshow1.jpg?alt=media&token=2b4fc5cb-f34d-407e-a15c-e9e6f55217fa);
  }

  .firstsingletext1 p {
    width: 1600px;
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

  .firstsingletext3 p {
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
  .firstsingletext4 p {
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