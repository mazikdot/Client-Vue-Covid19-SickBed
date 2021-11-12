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
          <div class="col-sm-12">
            <div class="card">
              <div class="card-content">
                <h5 class="text-center" style="border-style: dotted; border-color: coral; padding-top:20px; padding-bottom:20px; ">
                  สรุปสถานการณ์การติด Covid - 19 ประจำประเทศไทย
                  <br> ข้อมูล ณ วันที่ {{this.update_date}}
                </h5>
              </div>
              <div class="row gutters-sm" >
                <p class="text-center " style="font-size:16px;">
                 ข้อมูลการติด Covid - 19 ประจำประเทศไทย ซึ่งจะประกอบไปด้วย เคสการติดเชื้อใหม่ในแต่ละวัน เคสการติดเชื้อรวมทั้งหมดในประเทศไทย
                  <br> อัตราเสียชีวิตในแต่ละวัน ยอดการเสียชีวิตรวมทั้งหมด รวมไปถึงการรักษาหายจาก Covid - 19
                </p>
                <div class="col-sm-4 mb-3">
                  

                  
                  <div style="" class="text-center">
               
                    <h5 class="text-center"></h5>
                    <div class="box box2">
                  <h3>ติดเชื้อเพิ่มวันนี้ <br>{{this.new_case}} ราย</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-4">
                 
               
                  <div style="" class="text-center" >
                
                    <h5 class="text-center"></h5>
                    <div class="box box2">
                  <h3>ติดเชื้อรวม <br>{{this.total_case}} ราย</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-4">
                 
                
                  <div style="" class="text-center">
                
                    <h5 class="text-center"></h5>
                    <div class="box box1">
                  <h3>เสียชีวิตวันนี้<br> {{this.new_death}} ราย</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-4 mb-3">
                 

               
                  <div style="" class="text-center">
              
                    <h5 class="text-center"></h5>
                    <div class="box box1">
                  <h3>เสียชีวิตรวม  <br> {{this.total_death}} ราย</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-4">
               
                  <div style="" class="text-center">
               
                    <h5 class="text-center"></h5>
                    <div class="box box5">
                  <h3>รักษาหายวันนี้ <br> {{this.new_recovered}} ราย</h3>
                  </div>
                </div>

                </div>
                <div class="col-sm-4">
                
             
                  <div style="" class="text-center">
              
                    <h5 class="text-center"></h5>
                    <div class="box box5">
                  <h3>รักษาหายรวม <br> {{this.total_recovered}} ราย</h3>
                  </div>
                </div>

                </div>
               
                
               
              </div>
              
            
            </div>
          </div>
         
          
        </div>
      </main>
    </div>
  
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
  name: "Covid",
  props: ["user"],
  components: {
    HeaderSickbed,
    HeaderAdmin
  },
  data() {
    return {
      messageToken: "Invalid Token",
      update_date : '',
      new_case : '',
      total_case : '',
      new_death : '',
      total_death : '',
      new_recovered : '',
      total_recovered : ''
    };
  },
  methods:{
    api_covid: function() {
      axios.get("https://covid19.ddc.moph.go.th/api/Cases/today-cases-all").then((response) => {
       // console.log(response.data[])
       this.update_date = response.data[0].update_date
       this.new_case = response.data[0].new_case
       this.total_case = response.data[0].total_case
       this.new_death = response.data[0].new_death
       this.total_death = response.data[0].total_death
       this.new_recovered = response.data[0].new_recovered
       this.total_recovered = response.data[0].total_recovered
      });
    }
  },
  created(){
    this.api_covid();
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
