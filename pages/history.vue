<template>
  <v-content>
    <div id="historycontents">
      <HistoryBegin/>
      <HistoryCatch/>
      <Debut/>
      <MemberList/>
      <DebutLive/>
      <FirstSingle/>
      <SecondSingle/>
      <ThirdSingle/>
      <ForthSingle/>
      <FifthSingle/>
      <SixthSingle/>
      <SeventhSingle/>
      <EighthSingle/>
      <LastSingle/>
      </div>
  </v-content>
</template>

<script>
import FirstSingle from '~/components/History/FirstSingle.vue'
import SecondSingle from '~/components/History/SecondSingle.vue'
import ThirdSingle from '~/components/History/ThirdSingle.vue'
import ForthSingle from '~/components/History/ForthSingle.vue'
import FifthSingle from '~/components/History/FifthSingle.vue'
import SixthSingle from '~/components/History/SixthSingle.vue'
import SeventhSingle from '~/components/History/SeventhSingle.vue'
import EighthSingle from '~/components/History/EighthSingle.vue'
import LastSingle from '~/components/History/LastSingle.vue'
import MemberList from '~/components/History/MemberList.vue'
import HistoryBegin from '~/components/History/HistoryBegin.vue'
import HistoryCatch from '~/components/History/HistoryCatch.vue'
import Debut from '~/components/History/Debut.vue'
import DebutLive from '~/components/History/DebutLive.vue'
  export default {
    components:{
      HistoryBegin,
      HistoryCatch,
      Debut,
      DebutLive,
      MemberList,
      FirstSingle,
      SecondSingle,
      ThirdSingle,
      ForthSingle,
      FifthSingle,
      SixthSingle,
      SeventhSingle,
      EighthSingle,
      LastSingle
    },
    layout: 'Historydefault',
    }
</script>

<style>
#historycontents p {text-shadow: 3px 3px 2px #0f0f0f; }
.date p {
    width: 1000px;
    text-align: center;
    font-size: 45px;
    position: absolute;
    right: 160%;
    top: 5%;
    -ms-transform: translate(160%, 5%);
    -webkit-transform: translate(160%, 5%);
    transform: translate(160%, 5%);
    margin: 0;
    padding: 0;
  }
</style>