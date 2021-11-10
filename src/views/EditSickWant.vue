<template>
  <div>
    <div v-if="user">
      <HeaderSickbed />
      <!-- <My/> -->
      <div class="container">
        <!-- <router-view :props-name-defined-in-router="user_username"></router-view> -->

        <div class="main-body" style="margin-top:20px;">
          <div class="row gutters-sm">
            <div class="col-md-12"></div>
            <div class="col-md-12">
              <div class="card mb-3" style="padding-top: 25px;">
                <div class="card-body">
                  <h5 class="text-center" style="margin-bottom: 30px;">
                    แก้ไขข้อมูลเตียงที่ต้องการเพื่อใช้ในการรักษา Covid - 19
                  </h5>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">ข้อมูลเตียง</h6>
                    </div>

                    <div class="col-sm-5 text-secondary">
                      <label>ข้อมูลเตียง</label>
                      <input
                        id="sickw_name"
                        name="sickw_name"
                        v-model="sickw_name"
                        type="text"
                        placeholder="ข้อมูลเตียงที่ต้องการแก้ไข"
                        required
                      />
                      <!-- {{this.user.data.name}} -->
                    </div>
                    <div class="col-sm-3 text-secondary">
                      <label for="">จำนวน</label>
                      <input
                        id="sickw_amount"
                        name="sickw_amount"
                        v-model="sickw_amount"
                        type="text"
                        placeholder="จำนวนที่ต้องการแก้ไข"
                        required
                      />
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <!-- -------------------------------End Firstname - Lastname-------------------------------------- -->
                  <hr />
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">สถานะเตียงผู้ป่วย</h6>
                    </div>
                    <div class="col-sm-3 text-secondary">
                      <label for="select_prefix">สถานะ</label>
                      <select v-model="select_give">
                        <!-- <option value="">เลือกสถานะ</option> -->
                        <option
                          :key="data.give_id"
                          v-for="data in give_data"
                          :value="data.give_id"
                          >{{ data.give_name }}</option
                        >
                      </select>
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <hr />
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">วันที่ต้องการใช้งาน</h6>
                    </div>

                    <div class="col-sm-5 text-secondary">
                      <label>ระบุวันที่</label>
                      <input
                        id="datebetween"
                        name="datebetween"
                        v-model="datebetween"
                        type="text"
                        placeholder="วันที่ต้องการใช้งาน"
                        required
                      />
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <hr />
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">หมายเหตุ</h6>
                    </div>

                    <div class="col-sm-5 text-secondary">
                      <label>หมายเหตุ</label>
                      <input
                        id="sickw_note"
                        name="sickw_note"
                        v-model="sickw_note"
                        type="text"
                        placeholder="หมายเหตุ"
                        required
                      />
                      <!-- {{this.user.data.name}} -->
                    </div>
                  </div>
                  <!-- ------------------------------End Phone Sex Email-------------------------------------------------------- -->

                  <div class="row text-center">
                    <div class="col-sm-12" style="padding-bottom: 25px;">
                      <!-- <a class="btn btn-info " target="__blank" >แก้ไขข้อมูล</a> -->
                      <!-- <router-link class="btn btn-info " to="/Sickbed">บันทึกการแก้ไข</router-link> -->
                      <button @click="updateDataUser()" class="btn btn-info ">
                        บันทึกการแก้ไข
                      </button>
                      <router-link class="btn btn-info " to="/Myprofile"
                        >ย้อนกลับ</router-link
                      >
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
    <div v-else>
      {{ tokenFalse }}
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
    name: 'EditSickWant',
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
            sickw_id : '',
            sickw_name : '',
            sickw_amount : '',
            sickw_note : '',
            sickw_date : '',
            select_give : '',
            datebetween : '',
            give_data : '',
            id: this.$route.params.sickw_id
        }
    },
    methods:{
      updateDataUser : function(){
         axios
        .post("http://localhost:3000/UpdateSickWant", {
          sickw_name: this.sickw_name,
          sickw_amount: this.sickw_amount,
          sickw_note: this.sickw_note,
          give_id : this.select_give,
          sickw_id : this.sickw_id,
          datebetween : this.datebetween,

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
      editSickWant : function(){
          axios.get("http://localhost:3000/SickWantOneEdit/"+this.id).then((res) => {
            this.sickw_id = res.data.data.sickw_id;
            this. sickw_name = res.data.data.sickw_name;
            this.sickw_amount =  res.data.data.sickw_amount;
            this.sickw_note = res.data.data.sickw_note;
            this.sickw_date =  res.data.data.sickw_date;
            this.select_give =  res.data.data.give_id;
            this.datebetween = res.data.data.datebetween;
          //  console.log(res.data.data);

      }); 
      },

       fetchStatusGive : function(){
          axios.get("http://localhost:3000/fetchStatusGive").then((response) =>{
         // this.prefix_test = []
          this.give_data = response.data.data;
         // console.log( this.sick_data );
          })
      },

    },
    async created(){
        this.editSickWant();
        this.fetchStatusGive();
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
