<template>
  <div>
    <div v-if="user">
      <HeaderSickbed />
      <!-- <My/> -->
      <div class="container">
        <div class="main-body" style="margin-top:20px;">
          <div class="row gutters-sm">
            <div class="col-md-12"></div>
            <div class="col-md-12">
              <div class="card mb-3" style="padding-top: 25px;">
                <div class="text-center">
                  <h1>ข้อมูลของฉัน</h1>
                  <img
                    src="@/assets/img/logo.png"
                    alt="center"
                    v-bind:style="{ 'text-align': ' center' }"
                  />
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">ชื่อ - นามสกุล</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ this.user.data.name }}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">เพศ</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ this.user.data.sex_name }}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">อีเมล</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ this.user.data.user_email }}
                    </div>
                  </div>
                  <hr />
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">เบอร์โทรศัพท์</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      {{ this.user.data.user_phone }}
                    </div>
                  </div>
                  <hr />

                  <hr />

                  <div class="row text-center">
                    <div class="col-sm-12" style="padding-bottom: 25px;">
                      <!-- <a class="btn btn-info " target="__blank" >แก้ไขข้อมูล</a> -->
                      <router-link
                        class="btn btn-info "
                        :to="{
                          name: 'EditMyData',
                          params: {
                            user_username: this.user.data.user_username,
                          },
                        }"
                        >แก้ไขข้อมูล</router-link
                      >
                    </div>
                  </div>
                </div>
              </div>

              <div class="row gutters-sm">
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6>ข้อมูลเตียงที่ฉันต้องการ</h6>

                      <div class="progress mb-3" style="height: 5px"></div>
                      <div>
                        <div
                          v-for="row in allDataSickwant"
                          :key="row.user_username"
                        >
                          <!-- <button  v-if="State == true" class="btn btn-outline-primary btn-sm" >แก้ไขข้อมูล</button> -->
                          <router-link
                            v-if="StateSickWant == true"
                            class="btn btn-outline-primary btn-sm"
                            :to="{
                              name: 'EditSickWant',
                              params: { sickw_id: row.sickw_id },
                            }"
                            >แก้ไขข้อมูล</router-link
                          >
                          <button
                            v-if="StateSickWant == true"
                            v-on:click="deleteDataSickWant(row.sickw_id)"
                            class="btn btn-outline-primary btn-sm"
                          >
                            ลบข้อมูลนี้
                          </button>
                          <div v-if="StateSickWant == true">
                            <p>เตียงที่ฉันต้องการ : {{ row.sickw_name }}</p>
                            <p>จำนวน {{ row.sickw_amount }} ตัว</p>
                            <p>รายละเอียดอื่นๆ : {{ row.sickw_note }}</p>
                            <p>วันที่ต้องการ : {{ row.datebetween }}</p>
                            <p
                              :class="[
                                row.give_id === 1 ? 'label label-danger' : '',
                                '',
                              ]"
                              class="label label-success"
                            >
                              สถานะ {{ row.give_name }}
                            </p>
                            <hr />
                          </div>
                        </div>
                        <button
                          v-if="StateSickWant == false"
                          class="btn btn-info"
                          @click="SickWantOne()"
                        >
                          คลิ๊กปุ่มนี้เพื่อดูข้อมูล
                        </button>
                        <button
                          v-if="StateSickWant == true"
                          class="btn btn-info"
                          @click="HiddenStateSickwantOne()"
                        >
                          ซ่อนข้อมูล
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- ---------------------------------------------------End Data Sick Want-------------------------------------------------- -->
                <div class="col-sm-6 mb-3">
                  <div class="card h-100">
                    <div class="card-body">
                      <h6>ข้อมูลเตียงที่ฉันบริจาค</h6>

                      <div class="progress mb-3" style="height: 5px"></div>
                      <div>
                        <div v-for="row in allData" :key="row.user_username">
                          <!-- <button  v-if="State == true" class="btn btn-outline-primary btn-sm" >แก้ไขข้อมูล</button> -->
                          <router-link
                            v-if="State == true"
                            class="btn btn-outline-primary btn-sm"
                            :to="{
                              name: 'EditUserSick',
                              params: { sick_id: row.sick_id },
                            }"
                            >แก้ไขข้อมูล</router-link
                          >
                          <button
                            v-if="State == true"
                            v-on:click="deleteData(row.sick_id)"
                            class="btn btn-outline-primary btn-sm"
                          >
                            ลบข้อมูลนี้
                          </button>
                          <div v-if="State == true">
                            <p>
                              เลขที่ : {{ row.sick_id }} : {{ row.sick_name }}
                            </p>
                            <p>จำนวน {{ row.sick_amount }} ตัว</p>
                            <p>หมายเหตุ : {{ row.sick_note }}</p>
                            <p
                              :class="[
                                row.sit_id === 1 ? 'label label-danger' : '',
                                '',
                              ]"
                              class="label label-success"
                            >
                              สถานะ {{ row.give_name }}
                            </p>
                            <hr />
                          </div>
                        </div>
                        <button
                          v-if="State == false"
                          class="btn btn-info"
                          @click="SickbedUser()"
                        >
                          คลิ๊กปุ่มนี้เพื่อดูข้อมูล
                        </button>
                        <button
                          v-if="State == true"
                          class="btn btn-info"
                          @click="Hidden()"
                        >
                          ซ่อนข้อมูล
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
            </div>
          </div>
        </div>
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
import HeaderSickbed from "../components/HeaderSickbed";
import My from "../components/My";
// import SectionSickbed from '../components/SectionSickbed'

import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/animate.css";
import "../assets/css/styleTable.css";
export default {
  name: "MyData",
  props: ["user"],

  components: {
    HeaderSickbed,
    My,
  },
  data() {
    return {
      status: "",
      getdata: "",
      tokenFalse: "invalid token!",
      allData: "",
      allDataSickwant: "",
      State: false,
      StateSickWant: false,
    };
  },
  methods: {
    SickbedUser: function() {
      //this.getUsername = this.user.data.user_username;
      //console.log(this.getUsername)
      this.State = true;
      axios
        .get("http://localhost:3000/SickbedOne/" + this.user.data.user_username)
        .then((res) => {
          this.allData = res.data.data;
          //console.log(this.allData);
        });
    },
    SickWantOne: function() {
      //this.getUsername = this.user.data.user_username;
      //console.log(this.getUsername)
      this.StateSickWant = true;
      axios
        .get(
          "http://localhost:3000/SickWantOne/" + this.user.data.user_username
        )
        .then((res) => {
          this.allDataSickwant = res.data.data;
          //console.log(this.allData);
        });
    },
    deleteData: function(sick_id) {
      swal({
        title: "คุณต้องการลบข้อมูลนี้ ใช่หรือไม่",
        text: "หากลบแล้วไม่สามารถกู้คืนข้อมูลนี้ได้",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .post("http://localhost:3000/deleteSickbed", {
              sick_id: sick_id,
            })
            .then((res) => {
              swal(res.data.message, "Deleted Success fully!", "success").then(
                function() {
                  location.reload();
                }
              );
            });
        }
      });
    },
    deleteDataSickWant: function(sickw_id) {
      swal({
        title: "คุณต้องการลบข้อมูลนี้ ใช่หรือไม่",
        text: "หากลบแล้วไม่สามารถกู้คืนข้อมูลนี้ได้",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .post("http://localhost:3000/deleteSickWant", {
              sickw_id: sickw_id,
            })
            .then((res) => {
              swal(res.data.message, "Deleted Success fully!", "success").then(
                function() {
                  location.reload();
                }
              );
            });
        }
      });
    },
    Hidden: function() {
      this.State = false;
    },
    HiddenStateSickwantOne: function() {
      this.StateSickWant = false;
    },
  },
  created: function() {
    //   this.SickbedUser();
  },
};
</script>

<style scoped>
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/style.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/styleTable.css";
</style>
