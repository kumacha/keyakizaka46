<template>
<v-cpntent>
  <v-container>
    <v-row>
      <v-col cols="12"
        sm="3">
        <v-select
        v-for="(item,i) in items" :key="i"
          :items="item.select"
          :to="item.link"
          label="絞り込み"
          class="select"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
        <Member/>
        <Member2/>
    </v-row>
  </v-container>
</v-cpntent>
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