<template>
  <header class="site-header">
    <nav class="navigation">
      <ul class="global-navigation">
        <li id="top-link">
          <p @click="pushTOP()" class="toplink">TOP</p>
        </li>
        <li class="about-link">
          <p @click="pushABOUT()" class="aboutlink">ABOUT</p>
        </li>
        <li class="history-link">
          <p @click="pushHISTORY()" class="historylink">HISTORY</p>
        </li>
        <li class="discography-link">
          <p @click="pushDISCOGRAPHY()" class="discographylink">DISCOGRAPHY</p>
        </li>
        <li class="member-link">
          <p @click="pushMEMBER()" class="memberlink">MEMBER</p>
        </li>
        <li class="gallery-link">
          <p @click="pushGALLERY()" class="gallerylink">GALLERY</p>
        </li>
        <li class="scene-link">
          <p @click="pushSCENE()" class="scenelink">SCENE</p>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    pushTOP(){
      this.$router.push('/')
    },
    pushABOUT(){
      this.$router.push('/about')
    },
    pushHISTORY(){
      this.$router.push('/history')
    },
    pushDISCOGRAPHY(){
      this.$router.push('/discography')
    },
    pushMEMBER(){
      this.$router.push('/member')
    },
    pushGALLERY(){
      this.$router.push('/gallery')
    },
    pushSCENE(){
      this.$router.push('/scene')
    },
  }

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Cinzel:wght@500&family=Open+Sans&display=swap");
.navigation{
  z-index: 1;
}
.global-navigation{
  margin-top: 2%;
  top: 0;
    right: 0;
    z-index: 10;
    position: fixed;
}
.global-navigation ul{
    list-style: none;
    float: left;
}
.global-navigation li{
    display: inline;
    color: white;
    margin: 0;
}
.global-navigation li p {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    right: 0;
    display: inline;
    padding: 0px 0px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 18px;
    color: #ffffff;
    margin: 0px 15px;
}
.global-navigation li p :hover{
    opacity: 70%;
}
.global-navigation li p::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: white;
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform .4s;
  }
   .navigation li p:hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
  .navigation p {text-shadow: 5px 5px 2px #0f0f0f; }
</style>