<template>
  <div class="zankan">
    <div class="ariakedate">
      <p>2017年5月18日</p>
    </div>
    <div class="zankantext1">
      <p>欅坂46主演のドラマ「残酷な観客達」が放送</p>
    </div>
    <div class="zankantext2">
      <p>主題歌に4th Singleカップリング曲「エキセントリック」起用</p>
    </div>
    <div class="zankantext3">
      <p>独特な世界観とギャグに注目</p>
    </div>
    <HistoryLine />
  </div>
</template>

<script>
import HistoryLine from "~/components/History/HistoryLine.vue";
export default {
  components: {
    HistoryLine
  }
};
</script>

<style>
.zankan {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fzankan.jpg?alt=media&token=3a3a542a-86c2-4897-a753-9d3229a647ff);
}
.zankantext1 p {
  width: 1400px;
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 30%;
  -ms-transform: translate(-50%, -30%);
  -webkit-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  margin: 0;
  padding: 0;
}

.zankantext2 p {
  width: 1400px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  -ms-transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  margin: 0;
  padding: 0;
}

.zankantext3 p {
  width: 1400px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 70%;
  -ms-transform: translate(-50%, -70%);
  -webkit-transform: translate(-50%, -70%);
  transform: translate(-50%, -70%);
  margin: 0;
  padding: 0;
}
</style>
