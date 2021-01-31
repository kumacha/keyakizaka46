<template>
  <v-main>
    <div class="m-btn">
      <v-container>
        <v-btn color="#EEEEEE" depressed elevation="24" outlined text light to="/discography"><span
            id="span">DISCOGRAPHYページへ戻る</span></v-btn>
      </v-container>
    </div>
    <div>
      <v-img class="single-img"
        src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbumfirst.png?alt=media&token=00775ec3-732d-4e81-a979-5810472c0da9">
      </v-img>
    </div>
  </v-main>
</template>

<script>
export default {

}
</script>

<style>
.m-btn {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .single-img {
    max-width: 1150px;
    margin-left: auto;
    margin-right: auto;
  }
</style>