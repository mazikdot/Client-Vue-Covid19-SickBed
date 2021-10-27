<template>
    <div>
    <div v-if="user">
    <HeaderSickbed/>
    <FormDonate/>
    </div>
    <div v-else>
        {{messageToken}}
    </div>
    </div>
</template>

<script>
import '../assets/css/styles.css';
import HeaderSickbed from '../components/HeaderSickbed.vue'
import FormDonate from './FormDonate.vue'
// import FormAddSickbed from '../components/FormAddSickbed.vue'
export default {
    name : 'AddSickbed',
    props:['user'],
    components:{
        HeaderSickbed,
        FormDonate
    },
    data(){
        return{
            messageToken: 'Invalid token',
        }
    }
}
</script>

<style scoped>
@import "/assets/css/styles.css";
</style>