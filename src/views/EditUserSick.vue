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
                     <h5 class="text-center" style="margin-bottom: 30px;">แก้ไขข้อมูลเตียงที่บริจาค</h5>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">ข้อมูลเตียง</h6>
                    </div>
                   
                    <div class="col-sm-5 text-secondary">
                        <label>ข้อมูลเตียง</label>
                <input id="sick_name" name="sick_name" v-model="sick_name" type="text" placeholder="ข้อมูลเตียงที่ต้องการแก้ไข" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                    <div class="col-sm-3 text-secondary">
                      <label for="">จำนวน</label>
                <input id="sick_amount" name="sick_amount" v-model="sick_amount" type="text" placeholder="จำนวนที่ต้องการแก้ไข" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <!-- -------------------------------End Firstname - Lastname-------------------------------------- -->
                  <hr>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">สถานะเตียงผู้ป่วย</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">
                       <label for="select_prefix">สถานะ</label>
                 <select  v-model="select_sick">
                                <!-- <option value="">เลือกสถานะ</option> -->
                                <option :key="data.sit_id" v-for="data in sick_data" :value="data.sit_id">{{data.sit_name}}</option>
                              </select>
                      <!-- {{this.user.data.name}} -->
                    </div>
                   
                  </div>
                  <hr>
                  <hr>
                   <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">หมายเหตุ</h6>
                    </div>
                   
                    <div class="col-sm-5 text-secondary">
                        <label>หมายเหตุ</label>
                <input id="sick_note" name="sick_note" v-model="sick_note" type="text" placeholder="หมายเหตุ" required>
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
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


export default {
    name: 'EditUserSick',
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
            sick_name : '',
            sick_amount : '',
            sick_note : '',
            sick_id : '',
            sick_data: '',
            select_sick: '',
            sit_id : '',
            id: this.$route.params.sick_id
        }
    },
    methods:{
      updateDataUser : function(){
         axios
        .post("http://localhost:3000/Usickbed", {
          sick_name: this.sick_name,
          sick_amount: this.sick_amount,
          sick_note: this.sick_note,
          sit_id : this.select_sick,
          sick_id : this.sick_id
        
        })
        .then((res) => {
          // alert("Update Successfully");
          // window.location.reload("/Lista");
          if(res.data.messeage = "Update Successfully"){
            const alert = async() =>{
                await swal(res.data.message, "แก้ไขข้อมูลสำเร็จ", "success");
                
                await this.$router.push('Myprofile');
                location.reload();
                }
              alert();
          }
         // console.log(res.data.);
        });
      },
      editDataUser : function(){
          axios.get("http://localhost:3000/SickOne/"+this.id).then((res) => {
              //console.log(res)
              this.sick_name = res.data.data.sick_name;
              this.sick_amount = res.data.data.sick_amount;
              this.sick_note = res.data.data.sick_note;
              this.sick_id = res.data.data.sick_id;
             
              this.select_sick = res.data.data.sit_id;
              // console.log(this.select_sick)
            
      });
      },

       fetchSick_status : function(){
          axios.get("http://localhost:3000/fetchSickStatus").then((response) =>{
         // this.prefix_test = []
          this.sick_data = response.data.data;
         // console.log( this.sick_data );
          })
      },
      
    },
    async created(){
        this.editDataUser();
        this.fetchSick_status();
        // this.fetchPrefix();
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