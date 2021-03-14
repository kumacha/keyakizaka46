<template>
  <v-content>
    <v-container>
      <v-row justify="center" align-content="center">
        <div class="number">
          1期生
        </div>
        <div class="member">
          <Member />
        </div>
      </v-row>
      <div class="number">
        2期生
      </div>
      <div class="member2">
        <Member2 />
      </div>
    </v-container>
  </v-content>
</template>

<script>
import Member from "~/components/AllMembers/Member.vue";
import Member2 from "~/components/AllMembers/Member2.vue";
export default {
  components: {
    Member,
    Member2
  },

  data: () => ({
    items: [
      {
        select: "1期生・2期生",
        link: "/member"
      },
      {
        select: "1期生・2期生",
        link: "/member"
      },
      {
        select: "1期生・2期生",
        link: "/member"
      }
    ]
  })
};
</script>

<style>
.select {
  text-align: center;
}

.number {
  text-align: center;
  font-size: 50px;
}
</style>
