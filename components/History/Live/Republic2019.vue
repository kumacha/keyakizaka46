<template>
<div class="republic2019">
  <div class="republic2019date">
    <p>2019年7月5日-7日</p>
  </div>
  <div class="republic2019text1">
    <p>欅共和国2019</p>
  </div>
  <div class="republic2019text2">
    <p>in 富士急ハイランド</p>
  </div>
  <div class="republic2019text3">
    <p>このライブで活動休止していた原田葵が復活！</p>
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
.republic2019date{
    font-size: 45px;
    position: absolute;
    top: 20px;
    left: 20px;
    margin: 0;
    padding: 0;
}
.republic2019 {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Frepublic%2Frepublic2018c.jpg?alt=media&token=49a4e885-123d-4d62-9535-2005b54137cd);
  }
.republic2019text1 p {
    width: 1400px;
    text-align: center;
    font-size: 70px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .republic2019text2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 150%;
    top: 45%;
    -ms-transform: translate(-150%, -45%);
    -webkit-transform: translate(-150%, -45%);
    transform: translate(-150%, -45%);
    margin: 0;
    padding: 0;
  }

  .republic2019text3 p {
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
  .republic2019text4 p {
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
</style>