<template>
  <v-main>
    <v-container>
      <v-row justify="center" align-content="center">
        <div class="discography">
          <img
            class="discopic"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fdiscography-top.jpg?alt=media&token=f80fd0d3-dfc3-49da-bb8e-6b3aceee48bf"
          />
          <p>Discography</p>
        </div>
        <div class="scroll">
          <div class="roundwrap">
            <p class="round">・</p>
          </div>
          <div class="scrolltext">SCROLL</div>
          <div class="singleline"></div>
        </div>
      </v-row>
    </v-container>
    <div class="singless">
      <p>SINGLE</p>
    </div>
    <v-row>
      <div class="singles-wrap">
        <ul class="single-images">
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterFirst()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-2.jpg?alt=media&token=5f57851a-20fb-481f-80ed-de2a45b6ca67"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterFirst()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1.jpg?alt=media&token=2966b16c-03a9-4300-9561-d28af7390e19"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterSecond()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-2.jpg?alt=media&token=aeeac306-7fac-41af-9ff7-eb626562e558"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterSecond()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2.jpg?alt=media&token=3d0140dd-716a-4880-9c6e-b58b925ab48c"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterThird()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-2.jpg?alt=media&token=a5f7a668-f82b-4249-9f86-1371a25b4727"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterThird()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3.jpg?alt=media&token=079b0aa8-1945-4c97-afd4-34fe25d0c51e"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterForth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-2.jpg?alt=media&token=3afc6d78-b260-41ab-b99d-626e4a6425a0"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterForth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4.jpg?alt=media&token=b6053988-8707-418e-a786-674d0999ca73"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterFifth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle5-2.jpg?alt=media&token=8e04c127-43e8-4044-98a2-5022f77da490"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterFifth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle5.jpg?alt=media&token=1074606b-88b1-4059-9dbc-5b4057daea85"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterSixth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle6-2.jpg?alt=media&token=0f8ad241-708e-4f34-b8af-7a7307db05e5"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterSixth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle6.jpg?alt=media&token=e18e8e14-3c7c-40eb-8e44-83c211c0f349"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterSeventh()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-2.jpg?alt=media&token=a46605bb-cfef-4216-b97d-50e020a302ef"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterSeventh()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7.jpg?alt=media&token=d3fc6e68-8b90-4789-a1c4-9f56b0257781"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterEighth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-2.jpg?alt=media&token=14708b1f-8c6b-42bd-bb87-3cebe2f6933e"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterEighth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8.jpg?alt=media&token=82760d84-019c-4efd-9c9f-f2d8aa7d49d1"
            >
            </v-img>
          </li>
          <li class="single-image">
            <v-img
              class="single-btm"
              @click="goRouterNineth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle9-2.jpg?alt=media&token=6ebf8e3f-ac26-4d30-aa97-354c496cd23d"
            >
            </v-img>
            <v-img
              class="single-btm"
              @click="goRouterNineth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle9.png?alt=media&token=a39b5925-9ce0-4973-9c60-a97b2fc04d0e"
            >
            </v-img>
          </li>
        </ul>
      </div>
    </v-row>

    <div class="album">
      ALBUM
      <v-row>
        <ul class="album-images">
          <v-col>
            <li class="album-image">
              <v-img
                class="album-btm"
                @click="goRouterAlbumfirst()"
                src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum1-2.jpg?alt=media&token=dbac27d3-6ca3-4256-8b08-6dca48a1684e"
              >
              </v-img>
              <v-img
                class="album-btm"
                @click="goRouterAlbumfirst()"
                src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum1.jpg?alt=media&token=8ddcb17f-c78c-4b86-9d80-75e16274f299"
              >
              </v-img>
            </li>
          </v-col>
          <v-col>
            <li class="album-image">
              <v-img
                class="album-btm"
                @click="goRouterAlbumsecond()"
                src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum2-2.jpg?alt=media&token=7fb001ff-bf74-4e69-8316-c6030f17cdab"
              >
              </v-img>
              <v-img
                class="album-btm"
                @click="goRouterAlbumsecond()"
                src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum2.jpg?alt=media&token=c67721fe-afac-4d86-b5df-90af64266c4f"
              >
              </v-img>
            </li>
          </v-col>
        </ul>
      </v-row>
    </div>
  </v-main>
</template>

<script>
export default {
  methods: {
    goRouterFirst() {
      this.$router.push("/single/1st");
    },
    goRouterSecond() {
      this.$router.push("/single/2nd");
    },
    goRouterThird() {
      this.$router.push("/single/3rd");
    },
    goRouterForth() {
      this.$router.push("/single/4th");
    },
    goRouterFifth() {
      this.$router.push("/single/5th");
    },
    goRouterSixth() {
      this.$router.push("/single/6th");
    },
    goRouterSeventh() {
      this.$router.push("/single/7th");
    },
    goRouterEighth() {
      this.$router.push("/single/8th");
    },
    goRouterNineth() {
      this.$router.push("/single/9th");
    },
    goRouterAlbumfirst() {
      this.$router.push("/album/albumfirst");
    },
    goRouterAlbumsecond() {
      this.$router.push("/album/albumsecond");
    }
  },
  layout: "Historydefault"
};
</script>

<style>
.discopic {
  height: 100vh;
  width: 100vw;
}
.discography {
  text-align: center;
  position: relative;
  margin-bottom: 20px;
}
.scroll {
  position: absolute;
  left: 50%;
  top: 30%;
  -ms-transform: translate(-50%, -30%);
  -webkit-transform: translate(-50%, -30%);
  transform: translate(-50%, -30%);
  margin: 0;
  padding: 0;
}

/* 丸の取り囲むやつ */
.roundwrap {
  width: 30px;
  height: 70px;
  border: solid;
  border-color: white;
  border-radius: 40px;
  position: relative;
  left: 27%;
}

/* マルのcss */
.round {
  color: white;
  font-size: 50px;
  display: inline-block;
  position: absolute;
  left: -52%;
  top: -10%;
  -ms-transform: translate(52%, 10%);
  -webkit-transform: translate(52%, 10%);
  transform: translate(52%, 10%);
  margin: 0;
  padding: 0;
  animation: move-y 0.7s infinite alternate ease-in-out;
}

/* マルのアニメーション */
@keyframes move-y {
  from {
    transform: translateY(-20px);
  }

  to {
    transform: translateY(20px);
  }
}
.singleline {
  width: 1px;
  height: 70px;
  background-color: white;
  position: absolute;
  left: 50%;
  top: 400%;
  -ms-transform: translate(-50%, -400%);
  -webkit-transform: translate(-50%, -400%);
  transform: translate(-50%, -400%);
  margin: 0;
  padding: 0;
  z-index: 100;
}

.discography p {
  position: absolute;
  text-align: center;
  color: white;
  font-size: 150px;
  left: 10px;
  top: 290px;
}

.singless {
  text-align: center;
  text-decoration-line: underline;
  font-size: 18px;
  margin-top: 25px;
  margin-bottom: 60px;
}

.album {
  margin-top: 60px;
  text-align: center;
  text-decoration-line: underline;
  font-size: 18px;
}
.singles-wrap {
  margin-left: auto;
  margin-right: auto;
}
.single-images {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: 2vw;
}

.single-images li {
  margin-left: -35px;
}

.album-images {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
  margin-top: 30px;
}

/*1st(サイレントマジョリティー)*/
.single-image {
  position: relative;
  height: 506px;
  width: 170px;
  margin: auto;
  display: block;
  overflow: hidden;
  cursor: pointer;
  -webkit-transition: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
  transition: 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.single-btm {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  display: block;
  -webkit-transition: 0.8s ease-in-out;
  transition: 0.8s ease-in-out;
}

.single-image:hover {
  z-index: 100;
  -webkit-transform: scale(1.2);
  transform: scale(1.2);
}

.single-image:hover .single-btm:nth-of-type(2) {
  opacity: 0;
}

/*album*/
.album-image {
  position: relative;
  width: 512px;
  height: 508px;
  margin: 0 auto;
  display: block;
  border-radius: 0px;
  overflow: hidden;
  cursor: pointer;
}

.album-btm {
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  width: 100%;
  display: block;
  -webkit-transition: 0.4s ease-in-out;
  transition: 0.4s ease-in-out;
}

.album-image:hover .album-btm:nth-of-type(2) {
  opacity: 0;
}
.v-application ul,
.v-application ol {
  padding-left: 0px;
}
</style>
