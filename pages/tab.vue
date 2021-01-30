<template>
  <v-main>
      <v-container>
      <div class="tab-area">
  <div class="tab active">
    タブ１
  </div>
  <div class="tab">
    タブ２
  </div>
  <div class="tab">
    タブ３
  </div>
  <div class="tab">
    タブ４
  </div>
</div>
<div class="content-area">
  <div class="content show">
    タブ１の中身です
  </div>
  <div class="content">
    タブ２の中身です
  </div>
  <div class="content">
    タブ３の中身です
  </div>
  <div class="content">
    タブ４の中身です
  </div>
</div>
</v-container>
  </v-main>
</template>

<script>
$(function() {
  let tabs = $(".tab"); // tabのクラスを全て取得し、変数tabsに配列で定義
  $(".tab").on("click", function() { // tabをクリックしたらイベント発火
    $(".active").removeClass("active"); // activeクラスを消す
    $(this).addClass("active"); // クリックした箇所にactiveクラスを追加
    const index = tabs.index(this); // クリックした箇所がタブの何番目か判定し、定数indexとして定義
    $(".content").removeClass("show").eq(index).addClass("show"); // showクラスを消して、contentクラスのindex番目にshowクラスを追加
  })
})
export default {

}
</script>

<style>
.tab-area {
  display: flex;
  justify-content: space-around;
  background-color: transparent;
  cursor: pointer;
}
.tab-area :hover{
    background-color: rgb(203, 196, 196);
}
  .tab {
    width: 300px;
    height: 30px;
    line-height: 30px;
    text-align: center;
    color: white;
    opacity: 70%;
  }
  .tab.active {
    color: white;
    opacity: 100%;
    border-bottom: 1px solid white;
  }
  .tab.active:hover{
    background-color: rgb(203, 196, 196);
}

.content-area {
  font-size: 30px;
  text-align: center;
}
  .content {
    display: none;
  }
  .content.show {
    margin-top: 50px;
    display: block;
  }

</style>