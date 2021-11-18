<template>
  <div v-if="!user">
    {{messageToken}}
  </div>
  <div v-else-if="this.user.data.roles_id == 1">
    <HeaderSickbed />
 </div>
 <div v-else-if="this.user.data.roles_id == 2">
    <HeaderAdmin/>
 </div>
    <div v-if="user">
      <main class="mn-inner text-center" style="margin-top:25px;">
        <div class="row text-center">
          
         
          <!-- ------------------------ End ---------------------------------- -->
          <div class="col-sm-6">
            <div class="card">
              <div class="card-content">
                <h5 class="text-center">
                  สรุปสถานการณ์ผู้ค้นหาเตียงในระบบ
                </h5>
              </div>
              <div class="row gutters-sm">
                <p class="text-center " style="font-size:16px;">
                  ข้อมูลจำนวนผู้ใช้ที่ได้รับเตียงแล้ว และ ยังไม่ได้รับเตียง
                </p>
                <div class="col-sm-6 mb-3">
                  <h6>ได้รับเตียงแล้ว</h6>

                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:#00FF00;"
                  ></div>
                  <div style="" class="text-center">
                 <p>   จำนวนผู้ใช้ที่ได้รับเตียงผู้ป่วยในการรักษา Covid - 19</p>
                    <h5 class="text-center"></h5>
                    <div class="box box1">
                  <h3>{{this.dataSickbedWant}} คน</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-6">
                  <h6>ยังไม่ได้รับเตียง</h6>
                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:#FF2525;"
                  ></div>
                  <div style="" class="text-center">
                 <p>   จำนวนผู้ใช้ที่ยังไม่ได้รับเตียงผู้ป่วยในการรักษา Covid - 19</p>
                    <h5 class="text-center"></h5>
                    <div class="box box5">
                  <h3>{{this.dataNoSickbedWant}} คน</h3>
                  </div>
                </div>

                </div>
               
                
               
              </div>
              
            
            </div>
          </div>
          <div class="col-sm-6">
            <div class="card">
              <div class="card-content">
                <h5 class="text-center">
                  สรุปสถานการณ์ผู้บริจาคเตียง
                </h5>
              </div>
              <div class="row gutters-sm">
                <p class="text-center " style="font-size:16px;">
                  จำนวนเตียงที่ยังว่างให้ใช้งาน และใช้งานไปแล้ว
                </p>
                <div class="col-sm-6 mb-3">
                  <h6>เตียงว่าง</h6>

                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:#00FF00;"
                  ></div>
                  <div style="" class="text-center">
                 <p>   จำนวนเตียงที่ยังว่างในระบบ</p>
                    <h5 class="text-center"></h5>
                    <div class="box box7">
                  <h3>{{this.dataCountfreebed}} เตียง</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-6 mb-3">
                  <h6>เตียงไม่ว่าง</h6>

                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:#FF2525;"
                  ></div>
                  <div style="" class="text-center">
                 <p>จำนวนเตียงที่ถูกใช้อยู่ในขณะนี้</p>
                    <h5 class="text-center"></h5>
                    <div class="box box3">
                  <h3>{{this.dataCountNofreebed}} เตียง</h3>
                  </div>
                </div>

                </div>
               
              </div>
            
            </div>
          </div>
          
        </div>
      </main>
    </div>
 
  <!-- <div v-if="!user">
    {{ messageToken }}
  </div> -->
</template>

<script>
// import "../assets/css/adminLte.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/animate.css";
import "../assets/css/styleTable.css";
import HeaderSickbed from "../components/HeaderSickbed";
import HeaderAdmin from "../components/HeaderAdmin";
export default {
  name: "SitulationBed",
  props: ["user"],
  components: {
    HeaderSickbed,
    HeaderAdmin
  },
  data() {
    return {
      messageToken: "Invalid Token",
      dataCountfreebed : '',
      dataCountNofreebed : '',
      dataSickbedWant : '',
      dataNoSickbedWant : ''
    };
  },
  methods:{
    fetch_CountFreebed: function() {
      axios.get("http://localhost:3000/Count_freebed").then((response) => {
        this.dataCountfreebed = response.data.data[0].count_freebed
        // var n = 34523453.345;
        // console.log(n.toLocaleString());
      });
    },
    fetch_NoCountFreebed: function() {
      axios.get("http://localhost:3000/Count_Nofreebed").then((response) => {
        this.dataCountNofreebed = response.data.data[0].count_nofreebed
      });
    },
    fetch_SickbedWant: function() {
      axios.get("http://localhost:3000/Count_Sickwant").then((response) => {
        this.dataSickbedWant = response.data.data[0].sickbed_want
      });
    },
    fetch_NoSickbedWant: function() {
      axios.get("http://localhost:3000/Count_NoSickwant").then((response) => {
        this.dataNoSickbedWant = response.data.data[0].Nosickbed_want
      });
    }
  },
  created(){
    this.fetch_CountFreebed();
    this.fetch_NoCountFreebed();
    this.fetch_SickbedWant();
    this.fetch_NoSickbedWant();
  }
};
</script>

<style scoped>
/* @import "/assets/css/adminLte.css"; */
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/style.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/styleTable.css";
</style>
<style src="./../assets/css/adminLte.css" scoped></style>
