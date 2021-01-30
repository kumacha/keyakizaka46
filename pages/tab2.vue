<template>
  <v-main>
    <v-container>
      <div class="tab">
        <ul class="tab_menu">
          <li class="show">ALL</li>
          <li>SINGLE</li>
          <li>COUPLING</li>
          <li>LIVE</li>
        </ul>
        <div class="border">
          <div></div>
        </div>
        <ul class="tab_content">
          <li class="show">
            <h2>ALL</h2>
            <p>ここにALL</p>
          </li>
          <li>
            <h2>SINGLE</h2>
            <p>ここにSINGLE</p>
          </li>
          <li>
            <h2>COUPLING</h2>
            <p>ここにCOUPLING</p>
          </li>
          <li>
            <h2>LIVE</h2>
            <p>ここにLIVE</p>
          </li>
        </ul>
      </div>
    </v-container>
  </v-main>
</template>

<script>$(function(){
    var menulist = $(".tab_menu li");
    var contentlist = $(".tab_content li");
    var border = $(".border div");

    menulist.on("click",function(){
        var selected = menulist.index($(this));
        menulist.removeClass("show").eq(selected).addClass("show");
        contentlist.removeClass("show").eq(selected).addClass("show");
        if(selected === 0){
            border.css("left","0%");
        }else if(selected === 1){
            border.css("left","33.3%");
        }else if(selected === 2){
            border.css("left","66.6%");
        }else{
            console.log(error);
        }
    });
});
  export default {

  }
</script>

<style>
.tab{
    margin:0 auto;
    padding: 10px;
}

.tab_menu{
    display: flex;
    justify-content: space-between;
    list-style: none;
    margin: 0;
    padding: 0;
    cursor: pointer;
    border: 1px solid #ccc;
    overflow: hidden;
    text-align: center;
}

.tab_menu li{
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: transparent;
    border-right: 1px solid #ccc;
}

.tab_menu li:last-child{
    border-right: 0;
}


.tab_menu li.show{
    background-color: rgb(203, 196, 196);
}

/* メニューの下線 */
.border div{
    left: 0%;
    width: 25%;
    bottom: 0;
    display: block;
    background-color:rgb(203, 196, 196);
    height: 2px;
    position: relative;
    transition: left 1s cubic-bezier(0.23,1,0.32,1);
}

/* コンテンツ */
.tab_content{
    list-style-type:none;
    position: relative;
    height: auto;
    padding: 0;
}

.tab_content li {
    text-align: center;
    position: absolute;
    width: 100%;
    border: 1px solid #ccc;
    top: 100px;
    opacity: 0;
    z-index: 0;
    transition-duration: 0.8s;
}

.tab_content li.show{
    top: 0;
    opacity: 1;
    z-index: 10;
    transition-duration: 0.8s;
}
</style>