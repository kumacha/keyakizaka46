<template>
  <div class="Memberadd">
    <div class="ariakedate">
      <p>2018年11月29日</p>
    </div>
    <div class="Memberaddtext1">
      <p>「坂道合同オーディション」の合格者39名の配属先が発表</p>
    </div>
    <div class="Memberaddtext2">
      <p>2期生として9名が配属される。</p>
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
.Memberadd {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
  background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistoy%2Fgoudou.png?alt=media&token=a5876eaa-edb1-4848-80a6-ecb31b438314);
}

.Memberaddtext1 p {
  width: 1400px;
  text-align: center;
  font-size: 40px;
  position: absolute;
  left: 50%;
  top: 40%;
  -ms-transform: translate(-50%, -40%);
  -webkit-transform: translate(-50%, -40%);
  transform: translate(-50%, -40%);
  margin: 0;
  padding: 0;
}

.Memberaddtext2 p {
  width: 1000px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 65%;
  -ms-transform: translate(-50%, -65%);
  -webkit-transform: translate(-50%, -65%);
  transform: translate(-50%, -65%);
  margin: 0;
  padding: 0;
}

.Memberaddtext3 p {
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
