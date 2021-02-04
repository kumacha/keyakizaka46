<template>
<v-main>
     <div class="btn"><a href="">Button</a></div>
<div class="cursor"></div>
<div class="follower"></div>
</v-main>
</template>
<script>
var
cursor = $(".cursor"),
follower = $(".follower"),
cWidth = 8, //カーソルの大きさ
fWidth = 40, //フォロワーの大きさ
delay = 10, //数字を大きくするとフォロワーがより遅れて来る
mouseX = 0, //マウスのX座標
mouseY = 0, //マウスのY座標
posX = 0, //フォロワーのX座標
posY = 0; //フォロワーのX座標

//カーソルの遅延アニメーション
//ほんの少ーーーしだけ遅延させる 0.001秒
TweenMax.to({}, .001, {
  repeat: -1,
  onRepeat: function() {
    posX += (mouseX - posX) / delay;
    posY += (mouseY - posY) / delay;
    
    TweenMax.set(follower, {
        css: {    
          left: posX - (fWidth / 2),
          top: posY - (fWidth / 2)
        }
    });
    
    TweenMax.set(cursor, {
        css: {    
          left: mouseX - (cWidth / 2),
          top: mouseY - (cWidth / 2)
        }
    });
  }
});

//マウス座標を取得
$(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on({
  "mouseenter": function() {
    cursor.addClass("is-active");
    follower.addClass("is-active");
  },
  "mouseleave": function() {
    cursor.removeClass("is-active");
    follower.removeClass("is-active");
  }
});
</script>

<style lang="scss">
body {
  position: relative;
  cursor: none;
}

.cursor,
.follower {
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0; 
  pointer-events: none;
}

.cursor {
  width: 8px;
  height: 8px;
  background-color: #000;
  z-index: 1001;
}

.follower {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background-color: rgba(#fdfe00, .5);
  z-index: 1000;
  transition: transform ease .1s;
  text-align: center;
  span {
    display: inline-block;
    font-size: 14px;
    font-weight: bold;
    transform: scale(0);
  }
  &.is-active {
    transform: scale(3);
  }
}

.btn {
    display: inline-block;
    width: 160px;
    margin: 16px;
    text-align: center;
    font-size: 16px;
    line-height: 1;

    a {
      display: block;
      color: #fff;
      text-decoration: none;
      padding: 16px;
      background-color: #000;
      cursor: none;
    }

}
</style>