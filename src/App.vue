<template>
    <!-- <user-data :user="user"></user-data> -->
  <router-view :user="user"/>
  <!-- <router-view :user="user"></router-view> -->
</template>
<script>
// import Header  from "../src/components/Header";
export default {
    name: 'App',
  components: {
     
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
