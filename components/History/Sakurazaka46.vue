<template>
  <div class="Sakura">
    <div class="ariakedate">
      <p>2020年10月14日</p>
    </div>
    <div class="Sakuratext1">
      <p @click="Gosakura()">To be continued…</p>
    </div>
    <div class="Sakuratext2">
      <p></p>
    </div>
    <div class="Sakuratext3">
      <p></p>
    </div>
  </div>
</template>

<script>
  import HistoryLine from '~/components/History/HistoryLine.vue'
  export default {
    components: {
      HistoryLine
    },
    methods:{
      Gosakura(){
        this.$router.push('/sakurazaka')
      }
    }
  }
</script>

<style>
  .Sakura {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fsakurazaka46%2Fsakurazaka.jpg?alt=media&token=780cefa6-c4ee-4051-8c4f-ae48886291ea);
  }
  .Sakuratext1 p {
    width: 1000px;
    text-align: center;
    font-size: 50px;
    position: absolute;
    left: 150%;
    top: 100%;
    -ms-transform: translate(-150%, -100%);
    -webkit-transform: translate(-150%, -100%);
    transform: translate(-150%, -100%);
    margin: 0;
    padding: 0;
  }

  .Sakuratext2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 45%;
    -ms-transform: translate(-50%, -45%);
    -webkit-transform: translate(-50%, -45%);
    transform: translate(-50%, -45%);
    margin: 0;
    padding: 0;
  }

  .Sakuratext3 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
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