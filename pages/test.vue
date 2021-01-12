<template>
  <div>
    <v-row justify="center" align="center">
      <v-col cols="2" v-for="(item, index) in booksArray" :key="index">
        <v-card class="mt-2 mx-2" :elevation="5">
          <v-img class="white--text align-end" height="100px" :src="item.img"></v-img>
          <v-card-title class="font-weight-bold">
            {{ item.title }}
          </v-card-title>
          <v-card-subtitle>{{ item.person }}
            <v-spacer />カテゴリー：{{ item.category }}
          </v-card-subtitle>
          <v-card-subtitle>在庫：{{ item.storage }}</v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  data() {
    return {
      booksArray: [],
    }
  },
  created() {
    const that = this
    const books = firebase.firestore().collection('books')
    books.get().then((snapshot) => {
      snapshot.forEach((doc) => {
        const books = doc.data()
        that.booksArray = [
          ...that.booksArray,
          {
            title: books.title,
            storage: books.storage,
            img: books.image,
            person: books.person,
            category: books.category,
          },
        ]
      })
    })
  },
}
</script>
