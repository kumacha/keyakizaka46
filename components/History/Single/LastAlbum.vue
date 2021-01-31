<template>
  <div id="historycontents">
    <div class="LastAlbum">
      <div class="ariakedate">
        <p></p>
      </div>
      <div class="LastAlbumtext1">
        <p></p>
      </div>
      <div class="LastAlbumtext2">
        <p></p>
      </div>
      <div class="LastAlbumtext3">
        <p></p>
      </div>
      <div class="discomore">
        <p>Discographyへ</p>
      </div>
      <HistoryLine />
      　　
    </div>
  </div>
</template>

<script>
  export default {

  }
</script>

<style>
  .LastAlbum {
    width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/history%2Fhistoy%2Fbest.png?alt=media&token=4998cc84-cf30-42ff-9836-498b85d4e5e3);
  }

  .LastAlbumtext1 p {
    width: 1600px;
    text-align: center;
    font-size: 65px;
    position: absolute;
    left: 50%;
    top: 35%;
    -ms-transform: translate(-50%, -35%);
    -webkit-transform: translate(-50%, -35%);
    transform: translate(-50%, -35%);
    margin: 0;
    padding: 0;
  }

  .LastAlbumtext2 p {
    width: 1000px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 60%;
    -ms-transform: translate(-50%, -60%);
    -webkit-transform: translate(-50%, -60%);
    transform: translate(-50%, -60%);
    margin: 0;
    padding: 0;
  }

  .LastAlbumtext3 p {
    width: 1400px;
    text-align: center;
    font-size: 40px;
    position: absolute;
    left: 50%;
    top: 75%;
    -ms-transform: translate(-50%, -75%);
    -webkit-transform: translate(-50%, -75%);
    transform: translate(-50%, -75%);
    margin: 0;
    padding: 0;
  }

  .discomore p {
    width: 400px;
    text-align: center;
    font-size: 25px;
    position: absolute;
    left: 100%;
    top: 95%;
    -ms-transform: translate(-100%, -95%);
    -webkit-transform: translate(-100%, -95%);
    transform: translate(-100%, -95%);
    margin: 0;
    padding: 0;
  }
</style>