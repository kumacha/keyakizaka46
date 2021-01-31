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
      <Tour2017/>
      <FifthSingle/>
      <Kouhaku2017/>
      <SixthSingle/>
      <Secondyear/>
      <Republic2018/>
      <Tour2018/>
      <SeventhSingle/>
      <Memberadd/>
      <MemberList2/>
      <Kouhaku2018/>
      <EighthSingle/>
      <Thirdyear/>
      <Omote/>
      <Thirdyear2/>
      <Republic2019/>
      <Tour2019/>
      <Tokyodome/>
      <Kado/>
      <Kouhaku2019/>
      <Memberadd2/>
      <MemberList3/>
      <Online/>
      <LastSingle/>
      <Documentary/>
      <NamePresen/>
      <LastAlbum/>
      <LastLive/>
      <Sakurazaka46/>

      </div>
  </v-main>
</template>

<script>
import Tokuyama from '~/components/History/Tokuyama.vue'
import Zankan from '~/components/History/Zankan.vue'
import MemberList from '~/components/History/MemberList.vue'
import MemberList2 from '~/components/History/MemberList2.vue'
import MemberList3 from '~/components/History/MemberList3.vue'
import Memberadd from '~/components/History/Memberadd.vue'
import Memberadd2 from '~/components/History/Memberadd2.vue'
import Omote from '~/components/History/Live/Omote.vue'
import HistoryBegin from '~/components/History/HistoryBegin.vue'
import HistoryCatch from '~/components/History/HistoryCatch.vue'
import Debut from '~/components/History/Debut.vue'
import FirstSingle from '~/components/History/Single/FirstSingle.vue'
import SecondSingle from '~/components/History/Single/SecondSingle.vue'
import ThirdSingle from '~/components/History/Single/ThirdSingle.vue'
import ForthSingle from '~/components/History/Single/ForthSingle.vue'
import FifthSingle from '~/components/History/Single/FifthSingle.vue'
import SixthSingle from '~/components/History/Single/SixthSingle.vue'
import SeventhSingle from '~/components/History/Single/SeventhSingle.vue'
import EighthSingle from '~/components/History/Single/EighthSingle.vue'
import LastSingle from '~/components/History/Single/LastSingle.vue'
import Kado from '~/components/History/Single/Kado.vue'
import Masshiro from '~/components/History/Single/Masshiro.vue'
import LastAlbum from '~/components/History/Single/LastAlbum.vue'
import Ariake from '~/components/History/Live/Ariake.vue'
import Kouhaku2016 from '~/components/History/Live/Kouhaku2016.vue'
import Kouhaku2017 from '~/components/History/Live/Kouhaku2017.vue'
import Kouhaku2018 from '~/components/History/Live/Kouhaku2018.vue'
import Kouhaku2019 from '~/components/History/Live/Kouhaku2019.vue'
import FirstAnniver from '~/components/History/Live/FirstAnniver.vue'
import Secondyear from '~/components/History/Live/Secondyear.vue'
import Thirdyear from '~/components/History/Live/Thirdyear.vue'
import Thirdyear2 from '~/components/History/Live/Thirdyear2.vue'
import DebutLive from '~/components/History/Live/DebutLive.vue'
import Republic2017 from '~/components/History/Live/Republic2017.vue'
import Republic2018 from '~/components/History/Live/Republic2018.vue'
import Republic2019 from '~/components/History/Live/Republic2019.vue'
import Tour2017 from '~/components/History/Live/Tour2017.vue'
import Tour2018 from '~/components/History/Live/Tour2018.vue'
import Tour2019 from '~/components/History/Live/Tour2019.vue'
import Tokyodome from '~/components/History/Live/Tokyodome.vue'
import Online from '~/components/History/Live/Online.vue'
import LastLive from '~/components/History/Live/LastLive.vue'
import Documentary from '../components/History/Documentary.vue'
import NamePresen from '../components/History/NamePresen.vue'
import Sakurazaka46 from '../components/History/Sakurazaka46.vue'
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
      Kouhaku2017,
      Kouhaku2018,
      Kouhaku2019,
      FirstAnniver,
      Secondyear,
      Thirdyear,
      Thirdyear2,
      Zankan,
      Masshiro,
      LastAlbum,
      Tour2017,
      Tour2018,
      Tour2019,
      Tokyodome,
      Online,
      LastLive,
      Republic2017,
      Republic2018,
      Republic2019,
      SecondSingle,
      ThirdSingle,
      ForthSingle,
      FifthSingle,
      SixthSingle,
      SeventhSingle,
      EighthSingle,
      Kado,
      LastSingle,
      Documentary,
      NamePresen,
      MemberList2,
      MemberList3,
      Memberadd,
      Memberadd2,
      Omote,
      Sakurazaka46

    },
    layout: 'Historydefault',
    mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 10000)
      })
    }
  }
</script>

<style>
#historycontents p {text-shadow: 3px 3px 2px #0f0f0f; }
</style>