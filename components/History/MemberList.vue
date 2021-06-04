<template>
  <v-content>
    <div class="memberlist">
      <div class="membertitle"><p>欅坂46 1期生</p></div>
      <div class="memberline1">
        <p>
          石森虹花　今泉佑唯　上村莉菜　尾関梨香　織田奈那　小池美波　小林由依
        </p>
      </div>
      <div class="memberline2">
        <p>
          斎藤冬優花　佐藤詩織　志田愛佳　菅井友香　鈴本美愉　長沢菜々香　長濱ねる
        </p>
      </div>
      <div class="memberline3">
        <p>
          土生瑞穂　原田葵　平手友梨奈　守屋茜　米谷奈々未　渡辺梨加　渡辺理佐
        </p>
      </div>
      <div class="membermore">
        <a href="/member"><p>＞＞MEMBERへ</p></a>
      </div>
    </div>
    <HistoryLine />
  </v-content>
</template>

<script>
import HistoryLine from "~/components/History/HistoryLine.vue";
export default {
  components: {
    HistoryLine
  },
  methods: {
    pushMember() {
      this.$router.push("/member");
    }
  }
};
</script>

<style>
.memberlist {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-size: cover;
  background-position: center center;
  background-color: transparent;
}
.membertitle p {
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 25%;
  -ms-transform: translate(-50%, -25%);
  -webkit-transform: translate(-50%, -25%);
  transform: translate(-50%, -25%);
  margin: 0;
  padding: 0;
}
.memberline1 p {
  width: 1400px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 45%;
  -ms-transform: translate(-50%, -45%);
  -webkit-transform: translate(-50%, -45%);
  transform: translate(-50%, -45%);
  margin: 0;
  padding: 0;
}
.memberline2 p {
  width: 1400px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 55%;
  -ms-transform: translate(-50%, -55%);
  -webkit-transform: translate(-50%, -55%);
  transform: translate(-50%, -55%);
  margin: 0;
  padding: 0;
}
.memberline3 p {
  width: 1400px;
  text-align: center;
  font-size: 30px;
  position: absolute;
  left: 50%;
  top: 65%;
  -ms-transform: translate(-50%, -65%);
  -webkit-transform: translate(-50%, -65%);
  transform: translate(-50%, -65%);
  margin: 0;
  padding: 0;
}
.membermore p {
  width: 400px;
  text-align: center;
  font-size: 20px;
  position: absolute;
  left: 100%;
  top: 80%;
  -ms-transform: translate(-100%, -80%);
  -webkit-transform: translate(-100%, -80%);
  transform: translate(-100%, -80%);
  margin: 0;
  padding: 0;
}
</style>
