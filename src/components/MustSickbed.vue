<template>
  <div id="sickbed" v-cloak>
    <div class="table-wrapper" v-cloak>
      <div class="table-title" v-cloak>
        <div class="row" v-cloak>
          <div class="col-sm-9">
            <h2
              class="fontsizebed"
              style="margin-left:50% ; font-size:20px; margin-top:10px; color:black;"
            >
              <b style="color:white;">รายชื่อผู้ป่วยต้องการเตียงรักษา</b>
            </h2>
            <div>
              <router-link
                to="/FormWant"
                class="btn btn-primary"
                style=" padding-bottom: 40px;"
                >เพิ่มรายชื่อ : ฉันต้องการเตียงผู้ป่วย</router-link
              >
            </div>
            <!-- <p style="padding-left: 200px; margin-top: 10px;" class="text-center">เตียงผู้ป่วยทั้งหมดที่ผู้ใช้ร่วมกันบริจาค</p> -->
          </div>
          <div class="col-sm-3">
            <div
              class="btn-group"
              data-toggle="buttons"
              v-cloak
              style="color:#ED5441"
            ></div>
          </div>
        </div>
      </div>
      <!-- <%= getdata %> -->
      <table v-cloak class="table table-striped table-hover" id="userTable">
        <thead v-cloak>
          <tr>
            <th style="width:100px;">ข้อมูลเตียงที่ต้องการ</th>
            <th style="width:80px;">วันเวลาที่ต้องการใช้</th>
            <th style="width:150px;">ข้อมูลผู้ใช้ที่ต้องการเตียง</th>
            <th style="width:100px;">พื้นที่ที่ต้องการเตียง</th>
            <th style="width:60px;">Status</th>
          </tr>
        </thead>
        <tbody v-cloak>
          <tr
            :key="row.sick_id"
            v-cloak
            v-for="row in allData"
            data-status="active"
          >
            <td>{{ row.sickw_name }}<br>จำนวน {{row.sickw_amount}} ตัว<br>หมายเหตุ : {{row.sickw_note}}</td>
            <!-- <td>{{row.give_name}}</td> -->
            <td class="btn-sm manage">{{ row.datebetween }}</td>
            <td class="btn-sm manage">{{ row.name }} <br>เบอร์ติดต่อ : {{row.user_phone}}<br>{{row.user_email}}</td>
            <td class="btn-sm manage">จังหวัด : {{ row.province }}<br>อำเภอ : {{row.amphures}}<br>ตำบล : {{row.districts}}</td>
            <td>
              <span
                :class="[row.give_id === 1 ? 'label label-danger' : '', '']"
                class="label label-success"
                >{{ row.give_name }}</span
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "SectionSickbed",
  data() {
    return {
      allData: "",
      data_wang: "",
    };
  },
  methods: {
    fetchAllData: function() {
      axios.get("http://localhost:3000/all-sickwant").then((res) => {
        this.allData = res.data.data;
        // console.log(res.data.data)
        $(document).ready(function() {
          $("#userTable").DataTable();
        });
      });
    },
  },
  created() {
    this.fetchAllData();
  },
};
</script>

<style scoped></style>
