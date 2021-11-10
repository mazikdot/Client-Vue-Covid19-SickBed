<template>
  <div v-if="user">
    <HeaderSickbed />
    <div>
      <main class="mn-inner">
        <div class="row" id="card-input">
          <div class="col s10 m10 l10">
            <div class="card">
              <div class="card-content">
                <h4 class="text-center">
                  สรุปสถานการณ์เตียงผู้ป่วย Covid - 19
                </h4>
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
                  <div style="">
                    จำนวนผู้ใช้ที่ได้รับเตียงผู้ป่วยในการรักษา Covid - 19
                    <!-- <h5 class="text-center">จำนวน 40 คน</h5> -->
                  </div>
                </div>
                <!-- ----------------------------------------------------------------------------------------------------- -->
                <div class="col-sm-6 mb-3">
                  <h6>ยังไม่ได้รับเตียง</h6>

                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:red;"
                  ></div>
                </div>
                <!-- ------------------------------------------------------------ -->
                <hr />
              </div>
              <div class="row gutters-sm">
                <p
                  class="text-center "
                  style="font-size:16px; margin-top:30px;"
                >
                  ข้อมูลเตียงผู้บริจาคที่ยังว่าง และถูกใช้งานไปแล้วภายในระบบ
                </p>
                <div class="col-sm-6 mb-3">
                  <h6>เตียงที่ยังว่างในระบบ</h6>

                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:#00FF00;"
                  ></div>
                  <div>จำนวนผู้ใช้ที่ยังไม่ได้รับเตียง</div>
                </div>
                <!-- ----------------------------------------------------------------------------------------------------- -->
                <div class="col-sm-6 mb-3">
                  <h6>เตียงที่ถูกใช้งานในระบบ</h6>

                  <div
                    class="progress mb-3"
                    style="height: 5px; background-color:red;"
                  ></div>
                </div>
                <!-- ------------------------------------------------------------ -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div v-else>
    {{ messageToken }}
  </div>
</template>

<script>
import "../assets/css/adminLte.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/animate.css";
import "../assets/css/styleTable.css";
import HeaderSickbed from "../components/HeaderSickbed";
export default {
  name: "SitulationBed",
  props: ["user"],
  components: {
    HeaderSickbed,
  },
  data() {
    return {
      messageToken: "Invalid Token",
    };
  },
};
</script>

<style scoped>
@import "/assets/css/adminLte.css";
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/style.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/styleTable.css";
</style>
