<template>
<v-app>
  <div class="m-btn">
    <v-container>
      <v-btn color="#EEEEEE" depressed elevation="24" outlined text light to="/member"><span id="span">MEMBERページへ戻る</span></v-btn>
    </v-container>
  </div>
      <v-container v-for="(member, index) in membersArray" :key="index" class="m-contents">
        <div class="m-subname">
          <p>
            {{member.subname}}
          </p>
        </div>
            <div class="m-name">
              <p>
                {{member.name}}
              </p>
            </div>
            <!-- <div class="e-name">
              <p>
              KOIKE　MINAMI
            </p>
            </div> -->
            <div class="m-maincontents">
              <v-row>
          <v-col>
            <v-img width="340px" height="400px" class="m-img" :src="member.src">
            </v-img>
          </v-col>
          <v-col>
            <div class="m-intro">
              <p>
               ニックネーム： {{member.nicname}}
              </p>
              <p>
               生年月日： {{member.birth}}
              </p>
              <p>
                年齢：{{member.old}}
              </p>
              <p>
                出身地：{{member.from}}
              </p>
            </div>
          </v-col>
        </v-row>
            </div>
            <KoikeIntro/>
      </v-container>
      <GoMember/>
</v-app>

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
      const members = firebase.firestore().collection('members').where("name" , "==", "小池 美波")
      members.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const members = doc.data()
          that.membersArray = [
            ...that.membersArray,
            {
              nicname: members.nicname,
              name: members.name,
              subname: members.subname,
              src: members.src,
              from: members.from,
              old: members.old,
              birth: members.birth,
              number: members.number,
            },
          ]
        })
      })
    },
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+JP:wght@500&display=swap');
@import url("https://fonts.googleapis.com/css2?family=Bree+Serif&family=Cinzel:wght@500&family=Open+Sans&display=swap");
.v-application p{
  margin-bottom: 0px;
}
#span{
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
.m-contents{
  font-family: 'Noto Serif JP', serif;
}
.m-subname{
  text-align: center;
}
.m-name{
  font-size: 40px;
  text-align: center;
  margin-bottom: 16px;
}
.e-name{
  text-align: center;
}
.m-eng{
  font-size: 20px;
}
.m-intro{
  margin-top: 45px;
}
.m-intro p{
  font-size: 20px;
  margin-bottom: 16px;
}
.m-maincontents{
  margin-left: 130px;
}
</style>