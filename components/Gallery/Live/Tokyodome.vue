<template>
  <v-main>
      <div class="global_wrapper">
  <div class="youtube">
    <img
      src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/gallery%2Flive%2Ftokyodome2.jpg?alt=media&token=468698db-dd13-4be5-87ac-d4a901b4123d"
      alt=""
      width="560"
      height="315"
      class="thumb"
    />
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/c_4x91rrW3g?controls=0?enablejsapi=1"
      frameborder="0"
      allowfullscreen
      autoplay
      playsinline
      class="movie"
    ></iframe>
  </div>
</div>
<p>欅坂46　LIVE at 東京ドーム ～ARENA TOUR 2019 FINAL～</p>
  </v-main>
</template>

<script>
$(function() {
  //Mobile判定
  var mobile = false;
  var ua = navigator.userAgent;
  if (
    ua.indexOf("iPhone") > 0 ||
    ua.indexOf("iPod") > 0 ||
    ua.indexOf("iPad") > 0 ||
    (ua.indexOf("Android") > 0 && ua.indexOf("Mobile") > 0)
  ) {
    mobile = true;
  }
  //スマホの場合muted属性追加
  if (mobile) {
    $("iframe").each(function() {
      $(this).attr("muted", "");
    });
  }
  $(".thumb").click(function() {
    var player = $(this).next("iframe")[0].contentWindow;
    player.postMessage('{"event":"command","func":"playVideo","args":""}', "*");
    $(this).hide();
  });
});
</script>

<style>
.global_wrapper {
  width: 560px;
  margin: 0 auto;
}

.youtube {
  position: relative;
  width: 560px;
  height: 315px;
}

.player {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.thumb {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
}
</style>