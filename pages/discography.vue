<template>
  <v-main>

    <div class="discography">
      DISCOGRAPHY
    </div>

    <div class="single">
      SINGLE
      <ul class="single-images">
        <li class="single1-images">
          <v-img class="single1" @click="gorouterfirst()"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1-2.jpg?alt=media&token=5f57851a-20fb-481f-80ed-de2a45b6ca67">
          </v-img>
          <v-img class="single1" @click="gorouterfirst()"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle1.jpg?alt=media&token=2966b16c-03a9-4300-9561-d28af7390e19">
          </v-img>
        </li>
        <li class="single2-images">
          <a href="/single/2nd">
            <v-img class="single2" @click="goroutersecond()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2-2.jpg?alt=media&token=aeeac306-7fac-41af-9ff7-eb626562e558">
            </v-img>
            <v-img class="single2" @click="goroutersecond()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle2.jpg?alt=media&token=3d0140dd-716a-4880-9c6e-b58b925ab48c">
            </v-img>
          </a>
        </li>
        <li class="single3-images">
            <v-img class="single3" @click="gorouterthird()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3-2.jpg?alt=media&token=a5f7a668-f82b-4249-9f86-1371a25b4727">
            </v-img>
            <v-img class="single3" @click="gorouterthird()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle3.jpg?alt=media&token=079b0aa8-1945-4c97-afd4-34fe25d0c51e">
            </v-img>
        </li>
        <li class="single4-images">
            <v-img class="single4" @click="gorouterforth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4-2.jpg?alt=media&token=3afc6d78-b260-41ab-b99d-626e4a6425a0">
            </v-img>
            <v-img class="single4" @click="gorouterforth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle4.jpg?alt=media&token=b6053988-8707-418e-a786-674d0999ca73">
            </v-img>
        </li>
        <li class="single5-images">
            <v-img class="single5" @click="gorouterfifth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle5-2.jpg?alt=media&token=8e04c127-43e8-4044-98a2-5022f77da490">
            </v-img>
            <v-img class="single5" @click="gorouterfifth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle5.jpg?alt=media&token=1074606b-88b1-4059-9dbc-5b4057daea85">
            </v-img>
        </li>
        <li class="single6-images">
            <v-img class="single6" @click="goroutersixth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle6-2.jpg?alt=media&token=0f8ad241-708e-4f34-b8af-7a7307db05e5">
            </v-img>
            <v-img class="single6" @click="goroutersixth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle6.jpg?alt=media&token=e18e8e14-3c7c-40eb-8e44-83c211c0f349">
            </v-img>
        </li>
        <li class="single7-images">
            <v-img class="single7" @click="gorouterseventh()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7-2.jpg?alt=media&token=a46605bb-cfef-4216-b97d-50e020a302ef">
            </v-img>
            <v-img class="single7" @click="gorouterseventh()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle7.jpg?alt=media&token=d3fc6e68-8b90-4789-a1c4-9f56b0257781">
            </v-img>
        </li>
        <li class="single8-images">
            <v-img class="single8" @click="goroutereighth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8-2.jpg?alt=media&token=14708b1f-8c6b-42bd-bb87-3cebe2f6933e">
            </v-img>
            <v-img class="single8" @click="goroutereighth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle8.jpg?alt=media&token=82760d84-019c-4efd-9c9f-f2d8aa7d49d1">
            </v-img>
        </li>
        <li class="single9-images">
            <v-img class="single9" @click="gorouternineth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle9-2.jpg?alt=media&token=6ebf8e3f-ac26-4d30-aa97-354c496cd23d">
            </v-img>
            <v-img class="single9" @click="gorouternineth()"
              src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/single%2Fsingle9.png?alt=media&token=a39b5925-9ce0-4973-9c60-a97b2fc04d0e">
            </v-img>
        </li>
      </ul>
    </div>

    <div class="album">
      ALBUM
      <ul class="album-images">
        <li class="album1-images">
          <v-img class="album1"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum1-2.jpg?alt=media&token=dbac27d3-6ca3-4256-8b08-6dca48a1684e">
          </v-img>
          <v-img class="album1"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum1.jpg?alt=media&token=8ddcb17f-c78c-4b86-9d80-75e16274f299">
          </v-img>
        </li>
        <li class="album2-images">
          <v-img class="album2"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum2-2.jpg?alt=media&token=7fb001ff-bf74-4e69-8316-c6030f17cdab">
          </v-img>
          <v-img class="album2"
            src="https://firebasestorage.googleapis.com/v0/b/history-of-keyakizaka46.appspot.com/o/album%2Falbum2.jpg?alt=media&token=c67721fe-afac-4d86-b5df-90af64266c4f">
          </v-img>
        </li>
      </ul>
    </div>
  </v-main>
</template>

<script>
  export default {
    methods: {
      gorouterfirst() {
        this.$router.push('/single/first')
      },
      goroutersecond() {
        this.$router.push('/single/2nd')
      },
      gorouterthird() {
        this.$router.push('/single/3rd')
      },
      gorouterforth() {
        this.$router.push('/single/4th')
      },
      gorouterfifth() {
        this.$router.push('/single/5th')
      },
      goroutersixth() {
        this.$router.push('/single/6th')
      },
      gorouterseventh() {
        this.$router.push('/single/7th')
      },
      goroutereighth() {
        this.$router.push('/single/8th')
      },
      gorouternineth() {
        this.$router.push('/single/9th')
      },
    },
  }

</script>

<style>
  .discography {
    text-align: center;
    font-size: 80px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .single {
    text-align: center;
    font-size: 60px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .album {
    margin-top: 30px;
    text-align: center;
    font-size: 60px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  }

  .single-images {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-left: 46px;
    list-style: none;
  }

  .single-images li {
    margin-left: -35px;
  }

  .album-images {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    margin-left: 100px;
    list-style: none;
    margin-bottom: 70px;
  }

  .album-images li {
    margin-left: 100px;
    margin-right: -20px;
  }

  /*1st(サイレントマジョリティー)*/
  .single1-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single1 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single1-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single1-images:hover .single1:nth-of-type(2) {
    opacity: 0;
  }

  /*2nd(世界には愛しかない*/
  .single2-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single2 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single2-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single2-images:hover .single2:nth-of-type(2) {
    opacity: 0;
  }

  /*3rd(二人セゾン)*/
  .single3-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single3 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single3-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single3-images:hover .single3:nth-of-type(2) {
    opacity: 0;
  }

  /*4th(不協和音)*/
  .single4-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single4 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single4-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single4-images:hover .single4:nth-of-type(2) {
    opacity: 0;
  }

  /*5th(風に吹かれても)*/
  .single5-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single5 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single5-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single5-images:hover .single5:nth-of-type(2) {
    opacity: 0;
  }

  /*6th(ガラスを割れ！)*/
  .single6-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single6 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single6-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single6-images:hover .single6:nth-of-type(2) {
    opacity: 0;
  }

  /*7th(アンビバレント)*/
  .single7-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single7 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single7-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single7-images:hover .single7:nth-of-type(2) {
    opacity: 0;
  }

  /*8th(黒い羊)*/
  .single8-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single8 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single8-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single8-images:hover .single8:nth-of-type(2) {
    opacity: 0;
  }

  /*9th(誰がその金を鳴らすのか？)*/
  .single9-images {
    margin-top: 30px;
    position: relative;
    height: 508px;
    width: 160px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
    -webkit-transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
    transition: .65s cubic-bezier(0.34, 1.56, 0.64, 1);
  }

  .single9 {
    margin-top: 30px;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: block;
    -webkit-transition: .8s ease-in-out;
    transition: .8s ease-in-out;
  }

  .single9-images:hover {
    z-index: 100;
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }

  .single9-images:hover .single9:nth-of-type(2) {
    opacity: 0;
  }

  /*album1(真っ白なものは汚したくなる)*/
  .album1-images {
    position: relative;
    width: 512px;
    height: 508px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
  }

  .album1 {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    display: block;
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
  }

  .album1-images:hover .album1:nth-of-type(2) {
    opacity: 0;
  }

  /*album2(永遠より長い一瞬)*/
  .album2-images {
    position: relative;
    width: 512px;
    height: 508px;
    margin: 0 auto;
    display: block;
    border-radius: 0px;
    overflow: hidden;
    cursor: pointer;
  }

  .album2 {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    display: block;
    -webkit-transition: .4s ease-in-out;
    transition: .4s ease-in-out;
  }

  .album2-images:hover .album2:nth-of-type(2) {
    opacity: 0;
  }

</style>
