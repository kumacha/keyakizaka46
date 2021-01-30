<template>
<div class="ariake">
  <div class="ariakedate">
    <p>2016年12月24日・25日</p>
  </div>
  <div class="ariaketext1">
    <p>欅坂46ワンマンライブ in有明コロシアム</p>
  </div>
  <div class="ariaketext2">
    <p>Live開幕直後の平手友梨奈の</p>
  </div>
  <div class="ariaketext3">
    <p>「有明コロシアム、かかってこい」の一言で会場が痺れた</p>
  </div>
  <HistoryLine />
</div>
</template>

<script>
import HistoryLine from '~/components/History/HistoryLine.vue'
export default {
components:{
      HistoryLine
    }
}
</script>

<style>
.ariakedate{
    font-size: 45px;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    padding: 0;
}
.ariake {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fariake%2Fariake6.jpg?alt=media&token=b7569cde-9859-4914-a723-fd9c6528f700);
  }
.ariaketext1 p {
    width: 1400px;
    text-align: center;
    font-size: 60px;
    position: absolute;
    left: 50%;
    top: 30%;
    -ms-transform: translate(-50%, -30%);
    -webkit-transform: translate(-50%, -30%);
    transform: translate(-50%, -30%);
    margin: 0;
    padding: 0;
  }

  .ariaketext2 p {
    width: 600px;
    font-size: 40px;
    position: absolute;
    text-align: center;
    left: 20%;
    top: 60%;
    -ms-transform: translate(-20%, -60%);
    -webkit-transform: translate(-20%, -60%);
    transform: translate(-20%, -60%);
    margin: 0;
    padding: 0;
  }

  .ariaketext3 p {
    width: 1200px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 70%;
    top: 70%;
    -ms-transform: translate(-70%, -70%);
    -webkit-transform: translate(-70%, -70%);
    transform: translate(-70%, -70%);
    margin: 0;
    padding: 0;
  }
</style>