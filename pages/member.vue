<template>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-for="(member, index) in membersArray" :key="index">
                  <v-card dark class="member-card" to="/members/ishimori" width="230px"
                    height="400px">
                    <v-img class="member-img" :src="member.src"></v-img>
                    <v-card-title class="member-title" v-text="member.name">
                    </v-card-title>
                    <v-card-subtitle v-text="member.subname">
                    </v-card-subtitle>
                    <v-card-text v-text="member.number">
                    </v-card-text>
                  </v-card>
              </v-col>
            </v-row>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        membersArray: [],
      }
    },
    created() {
      const that = this
      const members = firebase.firestore().collection('members').orderBy("subname", "asc")
      members.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const members = doc.data()
          that.membersArray = [
            ...that.membersArray,
            {
              name: members.name,
              subname: members.subname,
              src: members.src,
              from: members.from,
              old: members.old,
              birth: members.birth,
              number: members.number,
              url:members.to,
            },
          ]
        })
      })
    },
  }
</script>

<style>
</style> 
