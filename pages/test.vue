<template>
  <v-content>
    <v-container>
      <v-row>
        <v-col cols="12" sm="6">
          <First />
        </v-col>
        <v-col cols="12" sm="6">
          <Second />
        </v-col>
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import First from '~/components/Gallery/Single/First.vue'
  import Second from '~/components/Gallery/Single/Second.vue'
  export default {
    components: {
      First,
      Second,
    }
  }
</script>

<style>
</style>