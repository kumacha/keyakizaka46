<template>
  <header class="site-header">  
    <nav class="navigation">
      <ul class="global-navigation">
          <li class="top-link">
          <nuxt-link to="/">HOME</nuxt-link>
        </li>
        <li class="about-link">
            <v-hover>
          <nuxt-link to="/about">ABOUT</nuxt-link>
          </v-hover>
        </li>
        <li class="history-link">
          <nuxt-link to="/history">HISTORY</nuxt-link>
        </li>
        <li class="discography-link">
          <nuxt-link to="/discography">DISCOGRAPHY</nuxt-link>
        </li>
        <li class="member-link">
          <nuxt-link to="/member">MEMBER</nuxt-link>
        </li>
        <li class="gallery-link">
          <nuxt-link to="/gallery">GALLERY</nuxt-link>
        </li>
        <li class="scene-link">
          <nuxt-link to="/scene">SCENE</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Cinzel:wght@500&family=Open+Sans&display=swap");
.navigation{
  margin-bottom: 3%;
}
.global-navigation{
    margin-top: 2%;
    margin-left: 50%;
    z-index: 10000;
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
.global-navigation li a {
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
.global-navigation li a :hover{
    opacity: 70%;
}
.navigation li a ::after {
    position: absolute;
    bottom: -1px;
    left: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: white;
    transform: scale(0, 1);
    transform-origin: right top;
    transition: transform .3s;
  }
  .navigation li a :hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }

</style>