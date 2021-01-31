<template>
  <v-main>
    <v-container>
      <GalleryTitle/>
      <div class="tab">
        <ul class="tab_menu">
          <li class="show" @click="pushAll()"><p>ALL</p></li>
          <li @click="pushSingle()"><p>SINGLE</p></li>
          <li @click="pushCoupling()"><p>COUPLING</p></li>
          <li @click="pushLive()"><p>LIVE</p></li>
        </ul>
        <ul class="tab_content">
          <li class="show">
            <GallerySingle/>
            <GalleryCoupling/>
            <GalleryTrailer/>
          </li>
          <li>
            <GallerySingle/>
          </li>
          <li>
            <GalleryCoupling/>
          </li>
          <li>
            <GalleryTrailer/>
          </li>
        </ul>
      </div>
    </v-container>
  </v-main>
</template>

<script>
  $(function () {
    var menulist = $(".tab_menu li");
    var contentlist = $(".tab_content li");
    var border = $(".border div");

    menulist.on("click", function () {
      var selected = menulist.index($(this));
      menulist.removeClass("show").eq(selected).addClass("show");
      contentlist.removeClass("show").eq(selected).addClass("show");
      if (selected === 0) {
        border.css("left", "0%");
      } else if (selected === 1) {
        border.css("left", "25.0%");
      } else if (selected === 2) {
        border.css("left", "50.0%");
      } else if (selected === 3) {
        border.css("left", "75.0%");
      } else {
        console.log(error);
      }
    });
  });
  import GallerySingle from '~/components/Gallery/GallerySingle.vue'
  import GalleryTrailer from '~/components/Gallery/GalleryTrailer.vue'
  import GalleryCoupling from '~/components/Gallery/GalleryCoupling.vue'

  export default {
      components: {
          GallerySingle,
          GalleryTrailer,
          GalleryCoupling,
      },
      methods: {
    pushAll(){
      this.$router.push('/gallery')
    },
    pushSingle(){
      this.$router.push('/gallerysingle')
    },
    pushCoupling(){
      this.$router.push('/gallerycoupling')
    },
    pushLive(){
      this.$router.push('/gallerylive')
    },
  }
  }

</script>

<style>

.container{
    padding: 0%;
  }
  .v-application ul,
  .v-application ol {
    padding-left: 0px;
  }

  .tab {
    margin: 0 auto;
    padding: 10px;
  }

  .tab_menu {
      width: 1200px;
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

  .tab_menu li {
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    background-color: transparent;
    border-right: 1px solid #ccc;
    opacity: 70%;
  }

  .tab_menu li:last-child {
    border-right: 0;
  }
  .tab_menu li :hover{
      background-color: rgb(203, 196, 196);
  }

  .tab_menu li.show {
    background-color: rgb(203, 196, 196);
    opacity: 100%;
  }

  /* メニューの下線 */
  .border div {
    left: 0%;
    width: 25%;
    bottom: 0;
    display: block;
    background-color:white;
    height: 2px;
    position: relative;
    transition: left 1s cubic-bezier(0.25, 1, 0.35, 1);
  }
  .border{
      width: 1200px;
  }

  /* コンテンツ */
  .tab_content {
    list-style-type: none;
    position: relative;
    height: auto;
    padding: 0;
  }

  .tab_content li {
    text-align: center;
    position: absolute;
    width: 1200px;
    border: 1px solid #ccc;
    top: 100px;
    opacity: 0;
    z-index: 0;
    transition-duration: 0.8s;
  }

  .tab_content li.show {
    top: 0;
    opacity: 1;
    z-index: 10;
    transition-duration: 0.8s;
  }
</style>