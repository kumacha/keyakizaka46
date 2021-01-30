<template>
<v-container>
    <v-row>
        <v-col md="6"><Republic2017/></v-col><v-col md="6"><Republic2018/></v-col>
        <v-col md="6"><Republic2019/></v-col><v-col md="6"><Tokyodome/></v-col>
        <v-col md="6"><LastLive1/></v-col><v-col md="6"><LastLive2/></v-col>
    </v-row>
</v-container>
</template>

<script>
import Republic2017 from '~/components/Gallery/Live/Republic2017.vue'
import Republic2018 from '~/components/Gallery/Live/Republic2018.vue'
import Republic2019 from '~/components/Gallery/Live/Republic2019.vue'
import Tokyodome from '~/components/Gallery/Live/Tokyodome.vue'
import LastLive1 from '~/components/Gallery/Live/LastLive1.vue'
import LastLive2 from '~/components/Gallery/Live/LastLive2.vue'
export default {
    components:{
        Republic2017,
        Republic2018,
        Republic2019,
        Tokyodome,
        LastLive1,
        LastLive2,
    }
}
</script>

<style>

</style>