<template>
    <h1 v-if="user">Hi, {{user.data.user_username}}</h1>
    <h1 v-if="!user">You Not login</h1>
</template>

<script>
// import axios from 'axios'
// axios.defaults.baseURL ='http://localhost:3001/'
export default {
    name : 'HomePage',
    data(){
        return {
            user: ''
        }
    },
    async created(){
        const response = await axios.get('http://localhost:3001/api/get-user',{
            headers: {
                Authorization : 'Bearer '+localStorage.getItem('token')
                
            }
        
        });
        if(!response.data){
           //  window.location.assign('/Login');
             console.log("no Token");
        }
        else
        {
        this.user = response.data
        console.log(response.data);
        }
       
        // if(response.data.user_username){
        //      window.location.assign('Login');
        // }
        // console.log('Bearer ' + localStorage.getItem('token'))
    }
}
</script>