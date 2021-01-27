<template>
<v-content>
<div class="catch">
  <div class="catchtext1">
    <p>5年と1か月と24日</p>
  </div>
  <div class="catchtext2">
    <p>1882日の欅坂46のすべて</p>
  </div>
  <HistoryLine/>
</div>
</v-content>
</template>

<script>
import HistoryLine from '~/components/History/HistoryLine.vue'
export default {
  components: {
    HistoryLine,
  }
}
</script>

<style>
.catch{
  width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/test.mp4?alt=media&token=62c4a856-b408-442d-9928-cdc894672617);
}
.catchtext1 p {
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
.catchtext2 p {
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