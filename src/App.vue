<template>
    <!-- <user-data :user="user"></user-data> -->
  <router-view :user="user"/>
  <!-- <app-user :user="user"></app-user> -->
  <!-- <router-view :user="user"></router-view> -->
</template>
<script>
// import Header  from "../src/components/Header";
// import HeaderSickbed from "./components/HeaderSickbed.vue"
import FormAddSickbed from "./components/FormAddSickbed.vue"
export default {
    name: 'App',
    components: {
    //  'router-view' : FormAddSickbed,
     FormAddSickbed : '',
     
     
    },
   data(){
        return {
            user: '',
            message: 'invalid token'
        }
    },
    async created(){
    if(localStorage.getItem('token')){
        const response = await axios.get('http://localhost:3001/api/get-user',{
            headers: {
                Authorization : 'Bearer '+localStorage.getItem('token')
            }
        });
        this.user = response.data
        }
    }
}
</script>
<style>

</style>
