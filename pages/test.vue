<template>
  <v-responsive class="overflow-y-auto" max-height="400">
    <div class="pa-6 text-center">
      スクロールするとでてくるよ
    </div>
    <v-responsive height="200vh" class="text-center pa-2">
      <v-responsive min-height="50vh"></v-responsive>
      <v-lazy v-model="isActive" :options="{
          threshold: 1.0
        }" min-height="200" transition="fade-transition">
        <v-card class="mx-auto" max-width="336" hover="true" loading="true">
          <v-img src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/1st-pic%2F1st-rika.jpg?alt=media&token=aa2ffa20-8dc8-40e6-89b7-ce3a59491d41"></v-img>
          <v-card-title>渡辺梨加</v-card-title>
          <v-card-text>
            テキストだよ～
          </v-card-text>
        </v-card>
      </v-lazy>
    </v-responsive>
  </v-responsive>
</template>
<style scoped>
body {
    position: relative;
    overflow-y: scroll;
    -ms-overflow-style: none;
    /* IE, Edgeのスクロールバー削除 */
    scrollbar-width: none;
    /* Firefoxのスクロールバー削除 */
  }

  body::-webkit-scrollbar {
    /* Chrome, Safariのスクロールバー削除 */
    display: none;
  }
</style>