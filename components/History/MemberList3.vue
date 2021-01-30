<template>
<v-content>
<div class="memberlist3">
    <div class="membertitle3"><p>欅坂46 新2期生</p></div>
  <div class="member3line1">
    <p>遠藤光莉　大園玲　大沼晶保</p>
  </div>
  <div class="member3line2">
    <p>幸阪茉里乃　増本綺良　守屋麗奈</p>
  </div>
  <div class="membermore"><p>MEMBERへ</p></div>
</div>
<HistoryLine/>
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
.memberlist3 {
  width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
}
.membertitle3 p {
    text-align: center;
    font-size: 70px;
    position: absolute;
    left: 50%;
    top: 25%;
    -ms-transform: translate(-50%, -25%);
    -webkit-transform: translate(-50%, -25%);
    transform: translate(-50%, -25%);
    margin: 0;
    padding: 0;
  }
.member3line1 p {
    width: 1400px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 45%;
  -ms-transform: translate(-50%, -45%);
  -webkit-transform: translate(-50%, -45%);
  transform: translate(-50%, -45%);
  margin: 0;
  padding: 0;
}
.member3line2 p {
    width: 1400px;
  text-align: center;
  font-size: 35px;
  position: absolute;
  left: 50%;
  top: 55%;
  -ms-transform: translate(-50%, -55%);
  -webkit-transform: translate(-50%, -55%);
  transform: translate(-50%, -55%);
  margin: 0;
  padding: 0;
}
.member3line3 p {
    width: 1400px;
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
.membermore p{
    width: 400px;
    text-align: center;
    font-size: 25px;
    position: absolute;
    left: 100%;
    top: 75%;
    -ms-transform: translate(-100%, -75%);
    -webkit-transform: translate(-100%, -75%);
    transform: translate(-100%, -75%);
    margin: 0;
    padding: 0;
  }
</style>