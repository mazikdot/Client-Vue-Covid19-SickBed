<template>
    <div id="inputRegister" >
    <main class="mn-inner">
      <div class="row">
        <div class="col s12">

        </div>
        <div class="col s12 m12 l12">
          <div class="card">
            <div class="card-content">
              <form id="example-form" method="post" name="addemp">
                <div>
                  <!-- <h3>สมัครบัญชีผู้ใช้</h3> -->
            
                  <h5 style="text-align: center;">สมัครบัญชีผู้ใช้เพื่อเข้าใช้งาน</h5>
                  <section >
                    <div class="wizard-content">
                      <div class="row">
                        <div class="col m6">
                          <div class="row">
                            <div class="input-field col m4 s12">
                              <select @click="fetchPrefix()" v-model="select_prefix">
                                <option style="width:20px;" value="">เลือกคำนำหน้า</option>
                                <option :key="data.prefix_id" v-for="data in prefix_test" :value="data.prefix_id" >{{data.pre_th_name}}</option>
                          
                              </select>
                            </div>
                            <div class="input-field col m4 s12">
                              <input id="user_firstname" name="user_firstname" v-model="user_firstname" type="text" placeholder="กรอกชื่อ" required>
                            </div>

                            <div class="input-field col m4 s12">
                              <!-- <label for="user_lastname">นามสกุล</label> -->
                              <input id="user_lastname" name="user_lastname" v-model="user_lastname" type="text" autocomplete="off" placeholder="กรอกนามสกุล" required>
                            </div>

                            <div class="input-field col s12">
                              <!-- <label for="user_username">Username</label> -->
                              <input name="user_username" type="text" id="user_username" v-model="user_username" autocomplete="off" required placeholder="กรอกบัญชีผู้ใช้">
                            </div>

                            <div class="input-field col s12">
                              <!-- <label for="user_passwords">Password</label> -->
                              <input id="user_passwords" name="user_passwords" type="password" v-model="user_passwords" autocomplete="off" required placeholder="กรอกพาสเวิร์ด">
                            </div>

                            <div class="input-field col s12">
                              <!-- <label for="user_passwords_conf">Confirm password</label> -->
                              <input id="user_passwords_conf" name="user_passwords_conf" type="password" v-model="user_passwords_conf" autocomplete="off" required placeholder="ยืนยันรหัสผ่านอีกครั้ง">
                            </div>
                          </div>
                        </div>

                        <div class="col m6">
                          <div class="row">
                            <div class="input-field col m6 s12">
                              <select @click="fetchSex()" v-model="select_sex">
                                <option value="">เลือกเพศ</option>
                                <option :key="data.sex_id" v-for="data in sex_data" :value="data.sex_id">{{data.sex_name}}</option>
                              </select>
                            </div>

                            <div class="input-field col m6 s12">
                              <!-- <label for="user_phone">Phone</label> -->
                              <input id="user_phone" name="user_phone" type="text" autocomplete="off" v-model="user_phone" required placeholder="กรอกเบอร์โทรศัพท์">
                            </div>



                            <div class="input-field col m6 s12">
                            </div>

                            <div class="input-field col m12 s12">
                              <!-- <label for="user_email">Email</label> -->
                              <input id="user_email" name="user_email" type="text" autocomplete="off" v-model="user_email" required placeholder="กรอกอีเมล">
                            </div>

                            <div class="input-field col m4 s12">
                              <select v-model="select_province" @change="fetchAmphures">
                                <option value="">เลือกจังหวัด</option>
                                <option :key="data.province_id" v-for="data in province_data" :value="data.province_id">{{data.name_th}}</option>
                              </select>
                            </div>
                            <div class="input-field col m4 s12">
                              <select v-model="select_amphures" @change="fetchDistricts">
                                <option value="">เลือกอำเภอ</option>
                                <option :key="data.amphure_id" v-for="data in amphures_data" :value="data.amphure_id">{{data.name_th}}</option>

                              </select>
                            </div>
                            <div class="input-field col m4 s12">
                              <select v-model="select_districts">
                                <option value="">เลือกตำบล</option>
                                <option :key="data.districts_id" v-for="data in districts_data" :value="data.districts_id">{{data.name_th}}</option>
                              </select>
                            </div>

                            <div class="input-field col s12">
                              <!-- <button type="submit" name="add" onclick="return valid();" id="add" class="waves-effect waves-light btn indigo m-b-xs">ADD</button> -->
                              <input type="button" value="สมัครบัญชี" class="waves-effect waves-light btn indigo m-b-xs" @click="submitData()">
                              <a href="login.php" style="color:FFFFFF;" class="waves-effect waves-light btn indigo2 m-b-xs">เข้าสู่ระบบ</a>
                            </div>

                          </div>

                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.css';
import '../assets/css/jquery.fancybox.css';
import '../assets/css/animate.css';
import '../assets/js/alert/alert.js'
// import '../axios.js'
// import axios from 'axios';
// axios.defaults.baseURL ='http://localhost:3000/'
export default {
    name: 'Register',
    data() {
      return {
      select_province: '',
      province_data: '',
      select_amphures: '',
      amphures_data: '',
      select_districts: '',
      districts_data: '',
      prefix_data: '',
      sex_data: '',
      user_username: '',
      user_lastname: '',
      user_firstname: '',
      user_email: '',
      user_passwords: '',
      user_passwords_conf: '',
      user_phone: '',
      select_prefix: '',
      select_sex: '',
      prefix_test: []
      };
    },
    methods: {
     
        fetchProvince : function(){
          axios.get("http://localhost:3000/ReadProvince").then((response) =>{
         // this.prefix_test = []
          this.province_data = response.data.data;
          this.select_amphures = '';
          this.amphures_data = '';
          this.select_districts = '';
          this.districts_data = '';
          //console.log(this.prefix_test);
          })
      },
     
       fetchAmphures : function(){
          axios.put("http://localhost:3000/ReadAmphures",{
              province_id: this.select_province
          }).then((response) =>{
          this.amphures_data = response.data.data;
          this.select_amphures = '';
          this.select_districts = '';
          this.districts_data = '';
          })
      },
    
       fetchDistricts : function(){
          axios.put("http://localhost:3000/ReadDistrict",{
                amphure_id: this.select_amphures
          }).then((response) =>{
           this.districts_data = response.data.data;
          // console.log(response.data.data);
            this.select_districts = '';

          })
      },
       fetchPrefix : function(){
          axios.get("http://localhost:3000/Prefix").then((response) =>{
          this.prefix_test = []
          this.prefix_test = response.data.data;
      //    console.log(this.prefix_test);
          })
      },
       fetchSex : function(){
          axios.get("http://localhost:3000/Sex").then((response) =>{
         // this.prefix_test = []
          this.sex_data = response.data.data;
          //console.log(this.prefix_test);
          })
      },
      submitData() {
            axios.post("http://localhost:3000/registers", {
              user_username: this.user_username,
              user_passwords: this.user_passwords,
              user_passwords_conf: this.user_passwords_conf,
              user_firstname: this.user_firstname,
              user_lastname: this.user_lastname,
              user_email: this.user_email,
              user_phone: this.user_phone,
              sex_id: this.select_sex,
              prefix_id: this.select_prefix,
              province_id: this.select_province,
              districts_id: this.select_districts,
              amphure_id: this.select_amphures
            }).then(res => {
            
              if (res.data.message == 'สมัครบัญชีผู้ใช้สำเร็จ') {
                swal(res.data.message, "Insert Success fully", "success").then(function() {
                window.location.assign('Login');
                //  this.$router.push('login');
                //  this.$router.push({ path : 'Login'});
                //   this.$router.push({ name : 'Home'});
                });
              } else if (res.data.message == 'โปรดลองอีกครั้งบัญชีนี้มีผู้ใช้แล้ว') {
                swal(res.data.message, 'กรุณาลองอีกครั้ง', 'error').then(function() {
                   this.$router.push('Login')
                });
              } else if (res.data.message == 'รหัสผ่านไม่น้อยกว่า 6 ตัวอักษร') {
                swal(res.data.message, 'กรุณาลองอีกครั้ง', 'warning').then(function() {});
              }
              else if (res.data.message == 'กรุณากรอกข้อมูลให้ครบถ้วน') {
                swal(res.data.message, 'กรุณาลองอีกครั้ง', 'warning').then(function() {});
              }
              else if (res.data.message == 'รหัสผ่านของท่านไม่ตรงกัน') {
                swal(res.data.message, 'กรุณาลองอีกครั้ง', 'warning').then(function() {});
              }
            });
      }
    },
    created: function() {
      this.fetchProvince();
    }
}
</script>

<style scoped>
@import "/assets/css/style.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/bootstrap.min.css";
</style>