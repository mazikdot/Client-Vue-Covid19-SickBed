<template >
     <div v-bind:style="{ 'text-align': 'center', 'margin-top ':'25px'}" id ="user-login" class="bg">
    <div class="container_login" 
    
    v-bind:style="{ 'margin-top': ' 3%'}"
    >
   <div
   v-bind:style="{ 'text-align': ' center' }"
   >
   <img src="@/assets/img/logo.png" alt="center"
   
         v-bind:style="{ 'text-align': ' center' }"
   >
   </div>
   <br>
   <!-- edit -->
        <form  method="post" class="form" @submit.prevent="handleSubmit">
            <h1 class="form__title" style="  font-size: 25px;">เข้าสู่ระบบค้นหาเตียงผู้ป่วย</h1>
            <div class="form__message form__message--error"></div>
            <div class="form__input-group">
                <input type="text" class="form__input" name="user_username" v-model="user_username" autofocus placeholder="กรอกบัญชีผู้ใช้" required>
                <label for="user_username"></label>
                <div class="form__input-error-message"></div>
            </div>
            <div class="form__input-group">
                <input type="password" class="form__input" name="user_passwords" autofocus placeholder="กรอกรหัสผ่าน"  v-model="user_passwords" required>
                <label for="user_passwords"></label>
                <div class="form__input-error-message"></div>
            </div>
          
            <input type="button"  class="form__button" value="เข้าสู่ระบบ" @click="handleSubmit()">
            <!-- <button type="button" class="form__buttob">เข้าสู่ระบบ</button> -->
            <!-- <input type="button" value="สมัครบัญชี" class="waves-effect waves-light btn indigo m-b-xs" @click="submitData()"> -->
            <!-- <a href="/SendLogin" name="btn_login" class="form__button" >เข้าสู่ระบบ</a> -->
        </form>
    </div>
    <br><br><br><br>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'LoginComponent',
    data(){
        return{
        user_username: '',
        user_passwords: ''
        }
    },
    methods:{
// นั้นมีคำสั่งที่ทำงานแบบ asynchronous ก็คือเวลาที่เราสั่งงานอะไรไปแล้วถ้าเป็นงานที่ใช้เวลานาน มันก็จะไล่ไปทำคำสั่งถัดไปเลยโดยไม่ได้รอให้คำสั่งก่อนหน้าทำเสร็จ
      async  handleSubmit(){
          const response = await axios.post('http://localhost:3001/api/login',{
 //   await ใช้เพื่อบอกให้ JavaScript รอจนกว่าคำสั่งนั้นจะเสร็จ ถึงค่อยไปทำงานอันต่อไป โดยฟังก์ชันที่จะมี await อยู่ข้างในได้ต้องประกาศเป็น async เสมอ
              user_username: this.user_username,
              user_passwords: this.user_passwords
          });
         console.log(response.data.token)
         localStorage.setItem('token',response.data.token);
        }
    }
    
}
</script>

<style scoped>
</style>