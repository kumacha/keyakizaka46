<template>
  <div class="Online">
    <div class="Onlinedate">
      <p>2020年7月16日</p>
    </div>
    <div class="Onlinetext1">
      <p>『KEYAKIZAKA46 Live Online, but with YOU!』</p>
    </div>
    <div class="Onlinetext2">
      <p>in ONLINE</p>
    </div>
    <div class="Onlinetext3">
      <p>初の無観客ワンマンライブ！</p>
    </div>
    <div class="Onlinetext4">
      <p>
        10月開催のラストライブで「欅坂46」としての5年間の歴史に幕を閉じ、
        <br />
        新しいグループ名となり再出発することが発表された
      </p>
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
.Onlinedate {
  font-size: 35px;
  position: absolute;
  top: 20px;
  left: 20px;
  margin: 0;
  padding: 0;
}
.Online {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Flastlive%2Fonline2.jpg?alt=media&token=b67b1a6a-c9fb-49d2-949b-0dcc1eaf1809);
}
.Onlinetext1 p {
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

.Onlinetext2 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 150%;
  top: 45%;
  -ms-transform: translate(-150%, -45%);
  -webkit-transform: translate(-150%, -45%);
  transform: translate(-150%, -45%);
  margin: 0;
  padding: 0;
}

.Onlinetext3 p {
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
.Onlinetext4 p {
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
</style>
