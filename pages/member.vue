<template>
  <v-content>
    <v-container>
      <v-row>
        <div class="number">
          1期生
        </div>
        <Member />
        <div class="number">
          2期生
        </div>
        <Member2 />
      </v-row>
    </v-container>
  </v-content>
</template>

<script>
  import Member from '~/components/Member/Member.vue'
  import Member2 from '~/components/Member/Member2.vue'
  export default {
    components: {
      Member,
      Member2
    },
    data: () => ({
      items: [{
          select: '1期生・2期生',
          link: '/member'
        },
        {
          select: '1期生・2期生',
          link: '/member'
        },
        {
          select: '1期生・2期生',
          link: '/member'
        }
      ],
    }),

    mounted() {
    this.$nextTick(() => {
      this.$nuxt.$loading.start()
      setTimeout(() => this.$nuxt.$loading.finish(), 10000)
      })
    }
}
  }
</script>

<style>
  .select {
    text-align: center
  }

.number {
  margin-top: 20px;
  font-size: 40px;
  margin-left: 75px;
}
</style>
