<template>
  <v-container>
    <v-timeline>
      <v-timeline-item v-for="(item, i)
          in items" :key="i" :color="item.color" :icon="mdi-star" fill-dot>
        <template v-slot:opposite>
          <span v-text="item.period"></span>
        </template>
        <v-card class="elevation-2" :color="item.color">
          <v-img class="cardimg" :src="item.src"></v-img>
          <v-card-title class="cardtitle" v-text="item.title">
          </v-card-title>
          <v-card-text v-text="item.text"></v-card-text>
          <!-- <v-btn :color="black" class="mx-0" outlined></v-btn> -->
        </v-card>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
    data: () => ({
      items: [{
          period: '2015/8/21',
          title: '欅坂46結成',
          text: '全応募者2万2509名から22名の合格者が決定される。直後1名が辞退し、21名で活動開始。',
          color: 'green',
          src: require("@/assets/image/history/20150821.jpg"),
        },
        {
          period: '2015/10/5',
          title: '冠番組『欅って書けない？』（テレビ東京）を放送開始',
          text: 'メンバーのバラエティな一面が見られる番組。発売を控えているシングル表題曲の選抜メンバーの発表等もある。',
          color: 'green',
          src: require("@/assets/image/history/keyakake.jpg"),
        },
        {
          period: '2015/11/14-2015/11/15',
          title: '『お見立て会』（Zepp DiverCity）を開催',
          text: 'ファンを前に初のお披露目イベントであった。',
          color: 'green',
          src: require("@/assets/image/history/omitate.jpg"),
        },
        {
          period: '2015/11/30',
          title: '長濱ねる加入が発表',
          text: '同時にアンダーグループとして『けやき坂46』（現・日向坂46）の設立、同グループのメンバーの追加募集することも発表された。',
          color: 'green',
          src: require("@/assets/image/history/nerujoin.jpg"),
        },
        {
          period: '',
          title: '',
          text: '',
          color: 'green',
          src: '',
        },
        {
          period: '',
          title: '',
          text: '',
          color: 'green',
          src: '',
        },
        {
          period: '',
          title: '',
          text: '',
          color: 'green',
          src: '',
        },
        {
          period: '',
          title: '',
          text: '',
          color: 'green',
          src: '',
        },
      ],
    }),
  }
</script>