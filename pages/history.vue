<template>
  <div id="app">
    <v-app id="inspire">
      <v-container>
<v-timeline align-top :dense="$vuetify.breakpoint.smAndDown">
        <v-timeline-item
         v-for="(item, i)
          in items"
           :key="i"
            :color="item.color"
             :icon="item.icon"
              fill-dot>
              <template v-slot:opposite>
                <span>Tus eu perfecto</span>
              </template>
          <v-card :color="item.color" dark>
            <v-img
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/slideshow-pic%2Fslideshow1.jpg?alt=media&token=2b4fc5cb-f34d-407e-a15c-e9e6f55217fa">

            </v-img>
            <v-card-title class="title">
              1st single 「サイレントマジョリティー」
            </v-card-title>
            <v-card-text>
              <p>秋元康総合プロデュース、乃木坂46に続く「坂道シリーズ」第2弾。
                2015年8月21日、乃木坂46結成から4年後の同じ日・同じ場所で結成された
                欅坂46(けやきざかフォーティーシックス)のデビューシングル!</p>
              <v-btn :color="black" class="mx-0" outlined>
                Button
              </v-btn>
            </v-card-text>
          </v-card>
        </v-timeline-item>
      </v-timeline>
      </v-container>
    </v-app>
  </div>
</template>

<script>
  export default {
    data: () => ({
      items: [{
          color: 'red lighten-2',
          icon: 'mdi-star',
        },
        {
          color: 'purple darken-1',
          icon: 'mdi-book-variant',
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-airballoon',
        },
        {
          color: 'indigo',
          icon: 'mdi-buffer',
        },
      ],
    }),
  }
</script>

<style>

</style>