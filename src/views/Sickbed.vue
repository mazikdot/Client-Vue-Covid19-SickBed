<template>
    <div v-if="user">
    <HeaderSickbed/>
    <SectionSickbed/>
    </div>
    <h1 v-if="!user">Invalid Token</h1>
</template>

<script>
import HeaderSickbed from '../components/HeaderSickbed'
import SectionSickbed from '../components/SectionSickbed'
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.css';
import '../assets/css/jquery.fancybox.css';
import '../assets/css/animate.css';
import '../assets/css/styleTable.css';
export default {
    
    name: 'Sickbed',
    components:{
        HeaderSickbed,
        SectionSickbed
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
        else
        {
            this.$router.push('Login');
        }

        //ถ้ามีเวลาปรับฟังก์ชั่นใหม่ ใช้ arrow function และปรับฝั่ง Server เมื่อเจอ token ที่ปลอม ให้มัน this.$router.push ไปหน้า Login
    }
}
</script>

<style scoped>
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/style.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/styleTable.css";
</style>