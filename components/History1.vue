<template>
  <div class="histopic1">
        <div class="historytitle"><p>HISTORY</p></div>
        <div class="histopic1text1"><p>欅坂46、5年間の軌跡</p></div>
        <div class="histopic1text2"><p>僕たちの嘘と真実</p></div>
        <div class="scroll">
        <div class="roundwrap"><p class="round">・</p></div>
        <div class="scrolltext">SCROLL</div>
        </div>
        <div class="historyline"></div>
      </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
    padding: 0px;
  }
  .histopic1{
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistory6.jpg?alt=media&token=74d3e84c-e3de-496a-ad8e-46048c312802);
  }
  /* 画像の上に文字 */
  .historytitle p {
    text-align: center;
    font-size: 120px;
    position: absolute;
    left: 50%;
    top: 30%;
    -ms-transform: translate(-50%, -30%);
    -webkit-transform: translate(-50%, -30%);
    transform: translate(-50%, -30%);
    margin: 0;
    padding: 0;
  }
  /*以下で線を表示*/
.historytitle p:before {
  content: '';
  position: absolute;
  left: 50%;
  bottom: 20px;/*線の上下位置*/
  display: inline-block;
  width: 150px;/*線の長さ*/
  height: 1px;/*線の太さ*/
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);/*位置調整*/
  background-color: white;/*線の色*/
}
.histopic1text1 p {
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 55%;
  -ms-transform: translate(-50%, -55%);
  -webkit-transform: translate(-50%, -55%);
  transform: translate(-50%, -55%);
  margin: 0;
  padding: 0;
}
.histopic1text2 p {
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 65%;
  -ms-transform: translate(-50%, -65%);
  -webkit-transform: translate(-50%, -65%);
  transform: translate(-50%, -65%);
  margin: 0;
  padding: 0;
}
.scroll{
  position: absolute;
  left: 50%;
  top: 90%;
  -ms-transform: translate(-50%, -90%);
  -webkit-transform: translate(-50%, -90%);
  transform: translate(-50%, -90%);
  margin: 0;
  padding: 0;
}
/* 丸の取り囲むやつ */
.roundwrap{
  width: 30px;
  height: 70px;
  border: solid;
  border-color: white;
  border-radius: 40px;
  position: relative;
  left: 27%;
}
/* マルのcss */
.round {
  color:white;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  left: -50%;
  top: 0%;
  -ms-transform: translate(50%, -0%);
  -webkit-transform: translate(50%, -0%);
  transform: translate(50%, -0%);
  margin: 0;
  padding: 0;
  animation: move-y .7s infinite alternate ease-in-out;
}
/* マルのアニメーション */
@keyframes move-y {
  from {
    transform: translateY(-15px);
  }
  to {
    transform: translateY(10px);
  }
}
.historyline{
  width: 1px;
  height: 200px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 130%;
  -ms-transform: translate(-50%, -130%);
  -webkit-transform: translate(-50%, -130%);
  transform: translate(-50%, -130%);
  margin: 0;
  padding: 0;
  z-index: 100;
}

</style>