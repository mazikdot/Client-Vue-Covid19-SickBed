<template >
    <div>
    <div v-if ="user">
    <HeaderSickbed/>
    <!-- <My/> -->
     <div class="container">
       <!-- <router-view :props-name-defined-in-router="user_username"></router-view> -->

    <div class="main-body" style="margin-top:20px;">
          <div class="row gutters-sm">
           <div class="col-md-12">
           </div>
            <div class="col-md-12">
                
              <div class="card mb-3" style="padding-top: 25px;">
               
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">ชื่อ - นามสกุล</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">
                       <label for="select_prefix">คำนำหน้าชื่อ</label>
                 <select v-model="select_prefix" >
                                <option style="width:20px;" value="">เลือกคำนำหน้า</option>
                                <option :key="data.prefix_id" v-for="data in prefix_test" :value="data.prefix_id" >{{data.pre_th_name}}</option>
                              </select>
                      <!-- {{this.user.data.name}} -->
                    </div>
                    <div class="col-sm-3 text-secondary">
                        <label>ชื่อ</label>
                <input id="user_firstname" name="user_firstname" v-model="user_firstname" type="text" placeholder="กรอกชื่อ" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                    <div class="col-sm-3 text-secondary">
                      <label for="">นามสกุล</label>
                <input id="user_lastname" name="user_lastname" v-model="user_lastname" type="text" placeholder="กรอกนามสกุล" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <!-- -------------------------------End Firstname - Lastname-------------------------------------- -->
                  <hr>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">อีเมล - เบอร์โทรศัพท์ - เพศ</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">
                       <label for="select_prefix">เพศ</label>
                 <select  v-model="select_sex">
                                <option value="">เลือกเพศ</option>
                                <option :key="data.sex_id" v-for="data in sex_data" :value="data.sex_id">{{data.sex_name}}</option>
                              </select>
                      <!-- {{this.user.data.name}} -->
                    </div>
                    <div class="col-sm-3 text-secondary">
                        <label>อีเมล</label>
                <input id="user_email" name="user_email" v-model="user_email" type="text" placeholder="กรอกอีเมล" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                    <div class="col-sm-3 text-secondary">
                      <label for="">เบอร์โทรศัพท์</label>
                <input id="user_phone" name="user_phone" v-model="user_phone" type="text" placeholder="กรอกเบอร์โทรศัพท์" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <hr>
                  <hr>
                  <!-- ------------------------------End Phone Sex Email-------------------------------------------------------- -->
                
                  <div class="row text-center">
                    <div class="col-sm-12" style="padding-bottom: 25px;">
                      <!-- <a class="btn btn-info " target="__blank" >แก้ไขข้อมูล</a> -->
                      <!-- <router-link class="btn btn-info " to="/Sickbed">บันทึกการแก้ไข</router-link> -->
                      <button @click="updateDataUser()"  class="btn btn-info ">บันทึกการแก้ไข</button>
                      <router-link class="btn btn-info " to="/Myprofile">ย้อนกลับ</router-link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- <button @click="test()">asas</button> -->
    </div>
    <!-- <SectionSickbed/> -->
    <!-- <button @click="test()">asdsadsasa</button>
    <h1>asdasd</h1> -->
    </div>
    <div v-else >
        {{tokenFalse}}
    </div>
    <!-- <button @click ="test()">ปุ่มกด</button> -->
    </div>
   
</template>

<script>

import HeaderSickbed from '../components/HeaderSickbed'
import My from '../components/My'
// import SectionSickbed from '../components/SectionSickbed'

import '../assets/css/bootstrap.min.css';
import '../assets/css/style.css';
import '../assets/css/font-awesome.css';
import '../assets/css/jquery.fancybox.css';
import '../assets/css/animate.css';
import '../assets/css/styleTable.css';
var data1 ;
let data2 ;


export default {
    name: 'EditMyData',
    props:['user'],
    components:{
        HeaderSickbed,
        My,
    },
    data(){
        return {
            status : '',
            getdata : '',
            tokenFalse: 'invalid token!',
         
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
            prefix_test: [],
            id: this.$route.params.user_username
        }
    },
    methods:{
      updateDataUser : function(){
         axios
        .post("http://localhost:3000/UpdateDataUser", {
          user_username: this.user_username,
          user_firstname: this.user_firstname,
          user_lastname: this.user_lastname,
          user_phone : this.user_phone,
          user_email: this.user_email,
          prefix_id: this.select_prefix,
          sex_id: this.select_sex,
        
        })
        .then((res) => {
          // alert("Update Successfully");
          // window.location.reload("/Lista");
          if(res.data.messeage = "Update Successfully"){
            const alert = async() =>{
                await swal(res.data.message, "Insert Success fully", "success");
                
                await this.$router.push('Myprofile');
                location.reload();
                }
              alert();
          }
         // console.log(res.data.);
        });
      },
      editDataUser : function(){
          axios.get("http://localhost:3000/FetchDataUserOne/"+this.id).then((res) => {
 
        this.user_username = res.data.data.user_username
        this.user_password = res.data.data.user_password
        this.user_firstname = res.data.data.user_firstname
        this.user_lastname = res.data.data.user_lastname
        this.user_phone = res.data.data.user_phone
        this.user_email = res.data.data.user_email
        this.select_prefix = res.data.data.prefix_id
        this.select_districts = res.data.data.districts_id
        this.select_province = res.data.data.province_id
        this.select_amphures = res.data.data.amphure_id
        this.select_sex = res.data.data.sex_id
        // dataz = res.data.data.province_id;
        data1 = res.data.data.province_id;
        data2 = res.data.data.province_id;
        
        // console.log(data1)
        // console.log(data2)
      });
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
      
    },
    async created(){
        this.editDataUser();
        this.fetchSex();
        this.fetchPrefix();
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