<template>
<div id="historycontents">
  <div class="Omote">
      <div class="ariakedate"><p>2019年4月20日-28日</p></div>
      <div class="Omotetext1"><p>欅坂46 二期生「おもてなし会」</p></div>

      <div class="Omotetext3"><p>欅坂46の楽曲を2期生のみで披露！</p></div>
      <div class="Omotetext4"><p>楽曲ごとにセンターが入れ替わり魅力的であった</p></div>
      <HistoryLine/>
　　</div>
</div>
</template>

<script>
  export default {

  }
</script>

<style>
  .Omote {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistoy%2Fomote2.jpg?alt=media&token=8a27d275-57fc-46e5-bb4d-9434bf566d94);
  }
  .Omotetext1 p {
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

  .Omotetext3 p {
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
  .Omotetext4 p {
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