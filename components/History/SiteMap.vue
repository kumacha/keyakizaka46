<template>
  <v-main>
      <div class="sitemap">
          <div class="maptext">
    <p>HISTORY MAP</p>
  </div>
    <nav class="navigation">
      <ul class="site-navigation">
        <li>
          <a href="#2015">
            <span class="about">2015年</span>
          </a>
        </li>
        <li>
          <a href="#2016">
            <span class="history">2016年</span>
          </a>
          <li>
            <a href="#2017">
              <span class="discography">2017年</span>
            </a>
          </li>
          <li>
            <a href="#2018">
              <span class="member">2018年</span>
            </a>
          </li>
          <li>
            <a href="#2019">
              <span class="garaly">2019年</span>
            </a>
          </li>
          <li>
            <a href="#2020">
              <span class="link">2020年</span>
            </a>
          </li>
      </ul>
    </nav>
  </div>
  <HistoryLine/>
  </v-main>
</template>

<script>
export default {

}
</script>

<style>
.sitemap{
  width: 100vw;
    height: 100vh;
    position: relative;
    background-size: cover;
    background-position: center center;
    background-color: transparent;
    background-image: url(https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/test.mp4?alt=media&token=62c4a856-b408-442d-9928-cdc894672617);
}
.maptext p {
  text-align: center;
  font-size: 50px;
  position: absolute;
  left: 50%;
  top: 45%;
  -ms-transform: translate(-50%, -45%);
  -webkit-transform: translate(-50%, -45%);
  transform: translate(-50%, -45%);
  margin: 0;
  padding: 0;
}
.site-navigation{
  width: 1400px;
    text-align: center;
  font-size: 50px;
  position: absolute;
  left: 49%;
  top: 60%;
  -ms-transform: translate(-49%, -60%);
  -webkit-transform: translate(-49%, -60%);
  transform: translate(-49%, -60%);
  margin: 0;
  padding: 0;
}
.site-navigation ul{
    list-style: none;
    float: left;
}
.site-navigation li{
    display: inline !important;
    color: white;
    margin: 0;
}  
.site-navigation li a {
  font-family:
      YuMincho,
      /* Mac用 */
      'Yu Mincho',
      /* Windows用 */
      serif;
    right: 0;
    display: inline;
    padding: 0px 0px;
    position: relative;
    display: inline-block;
    text-decoration: none;
    text-align: center;
    font-size: 40px;
    color: #ffffff; 
    margin: 0px 20px;    
}
.site-navigation li a :hover{
    opacity: 70%;
}
.site-navigation li a ::after {
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
  .site-navigation li a :hover::after {
    transform-origin: left top;
    transform: scale(1, 1);
  }
</style>