<template>
<v-content>
  <v-container>
    <v-row>
        <Member/>
        <Member2/>
    </v-row>
  </v-container>
</v-content>
</template>

<script>
import Member from '~/components/Member.vue'
import Member2 from '~/components/Member2.vue'
export default {
components:{
  Member,
  Member2
},
data: () => ({
      items : [{
        select:'1期生・2期生',
        link: '/member'
        },
        {
        select:'1期生・2期生',
        link: '/member'
        },
        {
        select:'1期生・2期生',
        link: '/member'
        }
        ],
    }),
}
</script>

<style>
.select{
  text-align: center
}
</style>