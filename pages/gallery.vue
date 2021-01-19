<template>
<v-container>
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
      <GallerySingle />
    </div>
    <div v-show="item == 'SINGLE'">
      <Member/>
    </div>
    <div v-show="item == 'COUPLING'">
      <GallerySingle />
    </div>
    <div v-show="item == 'LIVE'">
      <GallerySingle />
    </div>
      </v-tab-item>
    </v-tabs-items>
    </v-container>
</template>
<script>
import GallerySingle from '~/components/GallerySingle.vue'
import Member from '~/components/Member.vue'
  export default {
    data () {
      return {
        tab: null,
        items: [
          'ALL', 'SINGLE', 'COUPLING', 'LIVE',
        ],
      }
    },
  }
</script>
<style>
/* Helper classes */
.v-main__wrap{
  background-color:rgba(0,0,0,0.0) !important;
}
v-tabs{
  z-index: 1000;
}

</style>