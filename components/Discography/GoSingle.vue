<template>
  <v-container>
      <p class="gotext">Other Single…</p>
    <v-sheet>
      <v-slide-group v-model="model" class="pa-4" show-arrows width="1100px">
        <v-slide-item v-for="(single, index) in singles" :key="index">
          <v-hover>
            <template v-slot:default="{ hover }">
              <v-card width="250px" height="250px" dark class="single-card" tile :to="single.to" :ripple="true" style="background-color:black;">
                <v-img width="250px" height="250px" class="single-img" :src="single.src"></v-img>
                <v-fade-transition>
                  <v-overlay v-if="hover" absolute color="#555555"></v-overlay>
                </v-fade-transition>
              </v-card>
            </template>
          </v-hover>
        </v-slide-item>
      </v-slide-group>
    </v-sheet>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        singles: [{
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-A.jpg?alt=media&token=51381e49-5708-4fb1-8013-2264862f73ff',
            to: '/single/first'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-A.jpg?alt=media&token=6a9b95e1-151b-4314-8094-a6073b184d7f',
            to: '/single/2nd'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-A.jpg?alt=media&token=9499f8c3-4df5-40f6-a778-00fde3644904',
            to: '/single/3rd'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-A.jpg?alt=media&token=9ab870b0-dd05-4e40-90e4-4141d55b5b0c',
            to: '/single/4th'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle5-A.jpg?alt=media&token=37a5b6f0-ef51-4940-9b35-a9537d6ced59',
            to: '/single/5th'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle6-A.jpg?alt=media&token=79c0ce3d-71c1-466f-9929-854b962fc181',
            to: '/single/6th'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-A.jpg?alt=media&token=128bed58-3074-4107-9bf7-b0fab902d9f0',
            to: '/single/7th'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-A.jpg?alt=media&token=4dd74039-c04a-49c1-a893-477db996e230',
            to: '/single/8th'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle9-A.jpg?alt=media&token=021e1b2b-42d9-40d6-8351-e2d6ffc89e98',
            to: '/single/9th'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum1.jpg?alt=media&token=8ddcb17f-c78c-4b86-9d80-75e16274f299',
            to: '/album/albumfirst'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum2.jpg?alt=media&token=c67721fe-afac-4d86-b5df-90af64266c4f',
            to: '/album/albumsecond'
          },
          {
            src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fsakurazaka46%2F1st-A.jpg?alt=media&token=1f422548-a3b9-44a0-bf4f-09dbe92ce2f0',
            to: '/sakurazaka'
          },
        ],
      }
    },
  }
</script>

<style>
.theme--dark.v-sheet{
  background-color: transparent  !important;
}
.gotext{
    text-align: center;
    font-size: 30px;
}
</style>