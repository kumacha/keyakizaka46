<template>
<v-container>
  <v-row>
    <GalleryTitle/>
  </v-row>
    <v-tabs
      v-model="tab"
      grow
      background-color="transparent"
      color="basil"
    >
      <v-tab
        v-for="item in items"
        :key="item"
        background-color="transparent"
      >
        {{ item }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab" background-color="transparent">
      <v-tab-item
        v-for="item in items"
        :key="item"
      >
      <div v-show="item == 'ALL'">
      <Single/>
      <Coupling/>
      <Trailer/>
    </div>
    <div v-show="item == 'SINGLE'">
      <Single/>
    </div>
    <div v-show="item == 'COUPLING'">
      <Coupling/>
    </div>
    <template>
    <div v-show="item == 'TRAILER'">
      <Trailer/>
    </div>
    </template>
      </v-tab-item>
    </v-tabs-items>
    </v-container>
</template>
<script>
import Single from '~/components/Gallery/Single.vue'
import Trailer from '~/components/Gallery/Trailer.vue'
import Coupling from '~/components/Gallery/Coupling.vue'
  export default {
    data () {
      return {
        tab: null,
        items: [
          'ALL', 'SINGLE', 'COUPLING', 'TRAILER',
        ],
      }
    },
    components:{
      Single,
      Trailer,
      Coupling,
    }
  }
</script>
<style>
/* Helper classes */
.theme--dark.v-tabs-items{
  background-color: transparent !important;
}
v-tabs{
  z-index: 1000;
}
</style>