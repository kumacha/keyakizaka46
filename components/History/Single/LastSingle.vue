<template>
  <div id="historycontents">
    <div class="lastsingle">
      <div class="ariakedate"><p>2020年8月21日</p></div>
      <div class="lastsingletext1">
        <p>Last Single 「誰がその鐘を鳴らすのか？」発売</p>
      </div>
      <div class="lastsingletext2"><p>欅坂46としての最後のアルバム</p></div>
      <div class="lastsingletext3">
        <p>2期生を含めたメンバー全員によるパフォーマンスが特徴。</p>
      </div>
      <div class="discomore">
        <a href="/discography"><p>＞＞DISCOGRAPHY</p></a>
      </div>
      <HistoryLine />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.lastsingle {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/slideshow-pic%2Fslideshow9.jpg?alt=media&token=9a038398-8b30-40d1-99f1-eea26c07d9df);
}

.lastsingletext1 p {
  width: 1400px;
  text-align: center;
  font-size: 45px;
  position: absolute;
  left: 50%;
  top: 35%;
  -ms-transform: translate(-50%, -35%);
  -webkit-transform: translate(-50%, -35%);
  transform: translate(-50%, -35%);
  margin: 0;
  padding: 0;
}

.lastsingletext2 p {
  width: 1000px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 60%;
  -ms-transform: translate(-50%, -60%);
  -webkit-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
  margin: 0;
  padding: 0;
}
.lastsingletext3 p {
  width: 1400px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 75%;
  -ms-transform: translate(-50%, -75%);
  -webkit-transform: translate(-50%, -75%);
  transform: translate(-50%, -75%);
  margin: 0;
  padding: 0;
}
.discomore p {
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
