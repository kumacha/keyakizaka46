<template>
<v-container>
    <v-row>
        <v-col md="6"><First/></v-col><v-col md="6"><Second/></v-col>
        <v-col md="6"><Third/></v-col><v-col md="6"><Forth/></v-col>
        <v-col md="6"><Fifth/></v-col><v-col md="6"><Sixth/></v-col>
        <v-col md="6"><Seventh/></v-col><v-col md="6"><Eighth/></v-col>
        <v-col md="6"><Ninth/></v-col>
    </v-row>
</v-container>
</template>

<script>
import First from '~/components/Gallery/Single/First.vue'
import Second from '~/components/Gallery/Single/Second.vue'
import Third from '~/components/Gallery/Single/Third.vue'
import Forth from '~/components/Gallery/Single/Forth.vue'
import Fifth from '~/components/Gallery/Single/Fifth.vue'
import Sixth from '~/components/Gallery/Single/Sixth.vue'
import Seventh from '~/components/Gallery/Single/Seventh.vue'
import Eighth from '~/components/Gallery/Single/Eighth.vue'
import Ninth from '~/components/Gallery/Single/Ninth.vue'
export default {
    components:{
        First,
        Second,
        Third,
        Forth,
        Fifth,
        Sixth,
        Seventh,
        Eighth,
        Ninth
    }
}
</script>

<style>

</style>