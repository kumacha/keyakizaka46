<template>
  <div id="historycontents">
    <div class="secondsingle">
      <div class="seconddate"><p>2016年8月10日</p></div>
      <div class="secondsingletext1">
        <p>2nd Single 「世界には愛しかない」発売</p>
      </div>
      <div class="secondsingletext2">
        <p>1st singleとは対照的な歌詞や曲調が話題となった。</p>
      </div>
      <div class="secondsingletext3">
        <p>傘を使用したパフォーマンスが特徴的な楽曲である。</p>
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
.seconddate {
  font-size: 35px;
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  padding: 0;
}
.secondsingle {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2F2nd%2Fsekaai-black.jpg?alt=media&token=4d57be6a-b5b6-4ad9-851e-e7bc5e3168f0);
}

.secondsingletext1 p {
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

.secondsingletext2 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 60%;
  -ms-transform: translate(-50%, -60%);
  -webkit-transform: translate(-50%, -60%);
  transform: translate(-50%, -60%);
  margin: 0;
  padding: 0;
}
.secondsingletext3 p {
  width: 1400px;
  text-align: center;
  font-size: 35px;
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
