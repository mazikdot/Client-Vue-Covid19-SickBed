<template>
  <div id="insertSickbed">
    <main class="mn-inner">
      <div class="row" id="card-input">
        <div class="col s10 m10 l10">
          <div class="card">
            <div class="card-content">
              <form id="example-form" method="post" name="addemp">
                <div>
                  <!-- <h3>สมัครบัญชีผู้ใช้</h3> -->
                  <h5 style="text-align: center;">บริจาคเตียงผู้ป่วย</h5>
                  <section class="section_insert">
                    <div class="wizard-content">
                      <div class="row">
                        <div class="col m12">
                          <div class="input-field col m12 s12">
                            <h5 style="font-size: 16px;">
                              กรอกข้อมูลเตียงผู้ป่วย
                            </h5>
                            <input
                              id="sick_name"
                              name="sick_name"
                              v-model="sick_name"
                              type="text"
                              placeholder="กรอกข้อมูลเตียงผู้ป่วย"
                              required
                            />
                          </div>
                        </div>
                        <div class="col m12">
                          <div class="input-field col m5 s12">
                            <h5 style="font-size: 16px;">
                              กรอกจำนวนเตียงที่ต้องการบริจาค
                            </h5>
                            <input
                              id="sick_amount"
                              name="sick_amount"
                              v-model="sick_amount"
                              type="number"
                              placeholder="จำนวนกรอกเป็นตัวเลข"
                              required
                            />
                          </div>
                        </div>
                        <div class="col m12">
                          <div class="input-field col m3 s12">
                            <h5 style="font-size: 16px;">
                              ตำแหน่งที่ตั้งเตียงผู้ป่วยที่บริจาค
                            </h5>
                            <input
                              id="vlillage"
                              name="vlillage"
                              v-model="vlillage"
                              type="text"
                              placeholder="เลขที่ / หมู่ที่ "
                              required
                            />
                          </div>
                          <div class="input-field col m3 s12">
                            <h5 style="font-size: 16px;">
                              จังหวัดที่ตั้งเตียงผู้ป่วย
                            </h5>
                            <select
                              v-model="select_province"
                              @change="fetchAmphures"
                            >
                              <option value="">เลือกจังหวัด</option>
                              <option
                                :key="data.province_id"
                                v-for="data in province_data"
                                :value="data.province_id"
                                >{{ data.name_th }}</option
                              >
                            </select>
                          </div>
                          <div class="input-field col m3 s12">
                            <h5 style="font-size: 16px;">
                              อำเภอที่ตั้งเตียงผู้ป่วย
                            </h5>
                            <select
                              v-model="select_amphures"
                              @change="fetchDistricts"
                            >
                              <option value="">เลือกอำเภอ</option>
                              <option
                                :key="data.amphure_id"
                                v-for="data in amphures_data"
                                :value="data.amphure_id"
                                >{{ data.name_th }}</option
                              >
                            </select>
                          </div>
                          <div class="input-field col m3 s12">
                            <h5 style="font-size: 16px;">
                              ตำบลที่ตั้งเตียงผู้ป่วย
                            </h5>
                            <select v-model="select_districts">
                              <option value="">เลือกตำบล</option>
                              <option
                                :key="data.districts_id"
                                v-for="data in districts_data"
                                :value="data.districts_id"
                                >{{ data.name_th }}</option
                              >
                            </select>
                          </div>
                        </div>
                        <div class="col m12">
                          <div class="input-field col m5 s12">
                            <h5 style="font-size: 16px;">
                              หมายเหตุอื่น ๆ ตามที่ต้องการระบุ
                            </h5>

                            <input
                              id="sick_note"
                              name="sick_note"
                              type="text"
                              autocomplete="off"
                              v-model="sick_note"
                              required
                              placeholder="หมายเหตุอื่น ๆ "
                            />
                          </div>

                          <div class="input-field col m7 s12">
                            <p id="barichak">
                              <b
                                >ร่วมกันบริจาคเตียงให้กับผู้ป่วยเพื่อช่วยเหลือ<br />แก่ผู้ที่ไม่มีเตียงผู้ป่วยที่จะรักษาโรค
                                Covid - 19</b
                              >
                            </p>
                          </div>
                          <div class="input-field col m2 s12">
                            <!-- <button type="submit" name="add" onclick="return valid();" id="add" class="waves-effect waves-light btn indigo m-b-xs">ADD</button> -->
                            <input
                              type="button"
                              value="บริจาคเตียง"
                              class="waves-effect waves-light btn indigo m-b-xs"
                              @click="submitData()"
                            />
                            <!-- <a href="login.php" style="color:FFFFFF;" class="waves-effect waves-light btn indigo2 m-b-xs">เข้าสู่ระบบ</a> -->
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
export default {
  name: "FormAddSickbed",
  props: ["user"],
  data() {
    return {
      user_username: "",
      sick_name: "",
      sick_amount: "",
      sick_note: "",
      select_province: "",
      province_data: "",
      select_amphures: "",
      amphures_data: "",
      select_districts: "",
      districts_data: "",
      vlillage: "",
    };
  },
  methods: {
    fetchProvince: function() {
      axios.get("http://localhost:3000/ReadProvince").then((response) => {
        // this.prefix_test = []
        //   console.log(response.data)
        this.province_data = response.data.data;
        this.select_amphures = "";
        this.amphures_data = "";
        this.select_districts = "";
        this.districts_data = "";
        //console.log(this.prefix_test);
      });
    },
    fetchAmphures: function() {
      axios
        .put("http://localhost:3000/ReadAmphures", {
          province_id: this.select_province,
        })
        .then((response) => {
          this.amphures_data = response.data.data;
          this.select_amphures = "";
          this.select_districts = "";
          this.districts_data = "";
        });
    },

    fetchDistricts: function() {
      axios
        .put("http://localhost:3000/ReadDistrict", {
          amphure_id: this.select_amphures,
        })
        .then((response) => {
          this.districts_data = response.data.data;
          // console.log(response.data.data);
          this.select_districts = "";
        });
    },
    submitData() {
      // console.log('test')
      // this.user_username = this.user.user_username
      // this.user_username = this.user
      console.log(this.user);
      // conseol.log(user.data)
      axios
        .post("http://localhost:3000/insert-sickbed", {
          user_username: this.user_username,
          sick_name: this.sick_name,
          sick_amount: this.sick_amount,
          sick_note: this.sick_note,
          village: this.village,
          province_id: this.select_province,
          districts_id: this.select_districts,
          amphure_id: this.select_amphures,
        })
        .then((res) => {
          console.log(res);
          if (res.data.message == "โปรดลองอีกครั้ง !!!") {
            swal(
              res.data.message,
              "โปรดตรวจสอบข้อมูลของท่านอีกครั้ง",
              "error"
            ).then(function() {});
          } else if (res.data.message == "บริจาคเตียงผู้ป่วยสำเร็จ") {
            swal(res.data.message, "บริจาคเตียงผู้ป่วยสำเร็จ", "success").then(
              function() {
                window.location.href = "user-home.php";
              }
            );
          }
        });
    },
  },
  created: function() {
    this.fetchProvince();
  },
};
</script>
