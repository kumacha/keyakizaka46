<template>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <v-row>
              <v-col v-for="(member, index) in membersArray" :key="index">
                <v-img class="member-img" v-bind:src="member.src" :ripple="true" height="417.38px" width="556.5px"></v-img>
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
              to:members.to,
            },
          ]
        })
      })
    },

  }
</script>

<style>

</style>