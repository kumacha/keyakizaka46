<template>
<v-cpntent>
  <v-container>
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
}
}
</script>

<style>

</style>