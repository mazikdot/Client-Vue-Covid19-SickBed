<template>
    <h1 v-if="user">Hi, {{user.data.user_username}}</h1>
    <h1 v-if="!user">{{message}}</h1>
</template>

<script>
// import axios from 'axios'
// axios.defaults.baseURL ='http://localhost:3001/'
export default {
    name : 'HomePage',
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
        else
        {
            this.$router.push('Login');
        }

        //ถ้ามีเวลาปรับฟังก์ชั่นใหม่ ใช้ arrow function และปรับฝั่ง Server เมื่อเจอ token ที่ปลอม ให้มัน this.$router.push ไปหน้า Login
    }
   
}
</script>