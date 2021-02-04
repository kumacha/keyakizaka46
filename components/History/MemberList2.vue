<template>
<v-content>
<div class="memberlist2">
    <div class="membertitle2"><p>欅坂46 2期生</p></div>
  <div class="member2line1">
    <p>井上梨名　関有美子　武元唯衣</p>
  </div>
  <div class="member2line2">
    <p>田村保乃　藤吉夏鈴　松田里奈</p>
  </div>
  <div class="member2line3">
      <p>松平璃子　森田ひかる　山崎天</p>
  </div>
  <div class="membermore"><a href="/member"><p>＞＞MEMBERへ</p></a></div>
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
.memberlist2 {
  width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
}
.membertitle2 p {
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
.member2line1 p {
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
.member2line2 p {
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
.member2line3 p {
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