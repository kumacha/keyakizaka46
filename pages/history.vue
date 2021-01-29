<template>
  <v-main>
    <div id="historycontents">
      <HistoryBegin/>
      <HistoryCatch/>
      <Debut/>
      <MemberList/>
      <DebutLive/>
      <FirstSingle/>
      <Tokuyama/>
      <SecondSingle/>
      <ThirdSingle/>
      <Ariake/>
      <Kouhaku2016/>
      <FirstAnniver/>
      <ForthSingle/>
      <Zankan/>
      <Masshiro/>
      <Republic2017/>
      <FifthSingle/>
      <SixthSingle/>
      <SeventhSingle/>
      <EighthSingle/>
      <LastSingle/>
      </div>
  </v-main>
</template>

<script>
import FirstSingle from '~/components/History/Single/FirstSingle.vue'
import SecondSingle from '~/components/History/Single/SecondSingle.vue'
import ThirdSingle from '~/components/History/Single/ThirdSingle.vue'
import ForthSingle from '~/components/History/Single/ForthSingle.vue'
import FifthSingle from '~/components/History/Single/FifthSingle.vue'
import SixthSingle from '~/components/History/Single/SixthSingle.vue'
import SeventhSingle from '~/components/History/Single/SeventhSingle.vue'
import EighthSingle from '~/components/History/Single/EighthSingle.vue'
import LastSingle from '~/components/History/Single/LastSingle.vue'
import Masshiro from '~/components/History/Single/Masshiro.vue'
import Tokuyama from '~/components/History/Tokuyama.vue'
import Ariake from '~/components/History/Ariake.vue'
import Kouhaku2016 from '~/components/History/Kouhaku2016.vue'
import FirstAnniver from '~/components/History/FirstAnniver.vue'
import Zankan from '~/components/History/Zankan.vue'
import MemberList from '~/components/History/MemberList.vue'
import HistoryBegin from '~/components/History/HistoryBegin.vue'
import HistoryCatch from '~/components/History/HistoryCatch.vue'
import Debut from '~/components/History/Debut.vue'
import DebutLive from '~/components/History/DebutLive.vue'
import Republic2017 from '~/components/History/Republic2017.vue'
  export default {
    components:{
      HistoryBegin,
      HistoryCatch,
      Debut,
      DebutLive,
      MemberList,
      FirstSingle,
      Tokuyama,
      Ariake,
      Kouhaku2016,
      FirstAnniver,
      Zankan,
      Masshiro,
      Republic2017,
      SecondSingle,
      ThirdSingle,
      ForthSingle,
      FifthSingle,
      SixthSingle,
      SeventhSingle,
      EighthSingle,
      LastSingle,
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