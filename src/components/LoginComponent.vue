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
        <form  method="post" class="form" >
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
          
            <input type="button"  class="form__button" value="เข้าสู่ระบบ" @click="submitData()">
            <!-- <input type="button" value="สมัครบัญชี" class="waves-effect waves-light btn indigo m-b-xs" @click="submitData()"> -->
            <!-- <a href="/SendLogin" name="btn_login" class="form__button" >เข้าสู่ระบบ</a> -->
        </form>
    </div>
    <br><br><br><br>
    </div>
</template>
<script>
export default {
    name:'LoginComponent'
}
</script>

<style scoped>
</style>