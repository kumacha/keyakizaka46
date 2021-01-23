<template>
  <v-content>
    <div id="app">
      <div class="top-history">
      <div class="hispic1">
        <div class="historytext">
          <p>HISTORY</p>
        </div>
        <div class="historycatch">
          <p>欅坂46、5年間の軌跡</p>
        </div>
        <div class="historycatch2">
          <p>僕たちの嘘と真実</p>
        </div>
      </div>
    </div>
    </div>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        image1_src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistory6.jpg?alt=media&token=74d3e84c-e3de-496a-ad8e-46048c312802'
      }
    }

  }
</script>

<style>
  .container {
    padding: 0px;
  }
  #app{
    font-family :
	YuMincho,    /* Mac用 */
	'Yu Mincho', /* Windows用 */
	serif;
  }
  .hispic1{
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistory6.jpg?alt=media&token=74d3e84c-e3de-496a-ad8e-46048c312802);
  }
  
  /* 画像の上に文字 */
  .historytext p {
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
.historytext p:before {
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
.historycatch p {
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
.historycatch2 p {
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
</style>