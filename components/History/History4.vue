<template>
  <div class="histopic4">
      <div class="histopic4date"><p>2016年3月17日</p></div>
      <div class="histopic4text1"><p>「欅坂46生中継！デビューカウントダウンライブ！」</p></div>
      <div class="histopic4text2"><p>in東京国際フォーラム</p></div>
      <div class="histopic4text3"><p>欅坂46結成後　初のライブ！</p></div>
      <div class="histopic4text4"><p>デビューシングルの表題曲「サイレントマジョリティー」などを披露</p></div>
      <div class="hismore"><p>>>MORE</p></div>
      <HistoryLine/>
　　</div>
</template>

<script>
  export default {

  }
</script>

<style>
  .histopic4 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fcountdown2.jpg?alt=media&token=6193a63f-b66c-4657-bde1-4dc32cb80d31);
  }

  .histopic4date p {
    width: 1000px;
    text-align: center;
    font-size: 50px;
    position: absolute;
    right: 150%;
    top: 10%;
    -ms-transform: translate(150%, 10%);
    -webkit-transform: translate(150%, 10%);
    transform: translate(150%, 10%);
    margin: 0;
    padding: 0;
  }

  .histopic4text1 p {
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

  .histopic4text2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 140%;
    top: 45%;
    -ms-transform: translate(-140%, -45%);
    -webkit-transform: translate(-140%, -45%);
    transform: translate(-140%, -45%);
    margin: 0;
    padding: 0;
  }

  .histopic4text3 p {
    width: 1000px;
    text-align: center;
    font-size: 50px;
    position: absolute;
    left: 50%;
    top: 60%;
    -ms-transform: translate(-50%, -60%);
    -webkit-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);
    margin: 0;
    padding: 0;
  }
  .histopic4text4 p {
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
    width: 150px;
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