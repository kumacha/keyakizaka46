<template>
<v-app>
  <div class="m-btn">
    <v-container>
      <v-btn color="#EEEEEE" depressed elevation="24" outlined text light to="/member"><span id="span">MEMBERページへ戻る</span></v-btn>
    </v-container>
  </div>
      <v-container v-for="(member, index) in members2Array" :key="index" class="m-contents">
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
              OZONO　REI
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
               ニックネーム： {{"member.nicname"}}
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
            <div>
              欅坂46(現：櫻坂46)の2期生であり、鹿児県出身の20歳。特技はカウンセリングや携帯電話のバイブレーションのモノマネであり、中でもカウンセリングはかなりの腕前である。メンバー唯一の鹿児島県出身であり、同県出身の芸人・サンシャイン池崎は「地元が同じだから好き」であるという。好きな漢字は「嫁」であり、是非ともお嫁さんになって幸せな生活を送って欲しい。また、1期生にも積極的にコミュニケーションを取っている様子が2期生から報告されており、「ぐいぐいのぞの」と称されている。
学校でいじめを受けた過去があり、その際に聴いた『エキセントリック』に救われたため、欅坂46を志したという。SHOW ROOM審査時には過去のエピソードを涙ながらに語っており、注目を集めた。
番組内では独自のワードセンスを活かしたメモを取るキャラとしての地位を確立しており、「大園玲 今週のメモ」(全1回)というコーナーが用意された。その独自のワードセンスを用いるコメントでは、幸阪茉里乃を「知らん・分からん・全然ちゃう」の3語で表現する幸阪3段活用を披露した。特に、新型コロナウィルス流行によるリモート収録によってそのポテンシャルが発揮され、大きく活躍した。また、反射神経と身体の柔軟性には自身があり、反復横跳びでは2期生の中で2位、柔軟性を測るブリッジでは1位を記録している。メンバー想いの面もあり、大沼晶保が反復横跳びで1位を取った際には涙を流している。ちなみに、先述したように大沼の記録(1位)を追い詰めたのは大園(2位)であり、番組MCの土田には「怖い」と評されている。
ホッチキスの針のモノマネが上手く、渡邉理佐やハライチ・澤部から評価されている。ダンスの時は髪まで踊り、漫才の時は腕時計を外す。

            </div>
      </v-container>
</v-app>

</template>

<script>
  import firebase from 'firebase'
  export default {
    data() {
      return {
        members2Array: [],
      }
    },
    created() {
      const that = this
      const members = firebase.firestore().collection('members2').where("name" , "==", "大園 玲")
      members.get().then((snapshot) => {
        snapshot.forEach((doc) => {
          const members = doc.data()
          that.members2Array = [
            ...that.members2Array,
            {
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