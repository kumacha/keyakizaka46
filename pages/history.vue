<template>
  <v-content>
    <v-container>
      <div class="top-history">
      <v-row>
        <v-col cols="12" sm="12">
            <v-img v-bind:src="image1_src" max-width="1600px" max-height="auto" class="hispic1">
            </v-img>
        </v-col>
      </v-row>
      <div class="historytext">
        <p>HISTORY</p>
      </div>
      </div>
    </v-container>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        image1_src: 'https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistory6.jpg?alt=media&token=74d3e84c-e3de-496a-ad8e-46048c312802'
      }
    }

  }
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Cinzel:wght@500&family=Open+Sans&display=swap");
  .container {
    padding: 0px;
  }

  .top-history p{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: 70px;
    position: absolute;
    text-align: center;
    top: 30%;
  }
  .historytext{
    text-align: center;
  }
</style>