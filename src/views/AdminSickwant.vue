<template>
    <div v-if="this.dataAdmin == 2">
    <HeaderAdmin/>
    <div id="sickbed" v-cloak>
    <div class="table-wrapper" v-cloak>
      <div class="table-title" v-cloak>
        <div class="row" v-cloak>
          <div class="col-sm-9">
            <h2
              class="fontsizebed"
              style="margin-left:200px ; font-size:20px; margin-top:10px; color:black;"
            >
              <b style="color:white;">เตียงผู้ป่วยต้องการ</b>
            </h2>

           
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
     <button   v-on:click="deleteAlldata()" class="btn btn-primary">
         ลบข้อมูลทั้งหมด
     </button>
      <!-- <%= getdata %> -->
      <table v-cloak class="table table-striped table-hover" id="userTable">
        <thead v-cloak>
          <tr>
            <th style="width:100px;">ข้อมูลเตียงที่ต้องการ</th>
            <th style="width:80px;">วันเวลาที่ต้องการใช้</th>
            <th style="width:150px;">ข้อมูลผู้ใช้ที่ต้องการเตียง</th>
            <th style="width:100px;">พื้นที่ที่ต้องการเตียง</th>
            <th style="width:60px;">Status</th>
            <th style="width:60px;">ลบ</th>
          </tr>
        </thead>
        <tbody v-cloak>
          <tr
            :key="row.sickw_id"
            v-cloak
            v-for="row in allData"
            data-status="active"
          >
            <td>{{ row.sickw_name }}<br>จำนวน {{row.sickw_amount}} ตัว<br>หมายเหตุ : {{row.sickw_note}}</td>
            <!-- <td>{{row.give_name}}</td> -->
            <td class="btn-sm manage">{{ row.datebetween }}</td>
            <td class="btn-sm manage">{{ row.name }}</td>
            <td class="btn-sm manage">จังหวัด : {{ row.province }}<br>อำเภอ : {{row.amphures}}<br>ตำบล : {{row.districts}}</td>
            <td>
              <span
                :class="[row.give_id === 1 ? 'label label-danger' : '', '']"
                class="label label-success"
                >{{ row.give_name }}</span
              >
            </td>
           <td><button  v-on:click="deleteData(row.sickw_id)" style="background-color:red;" class="btn btn-primary">ลบ</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  </div>
  <div v-if="this.dataAdmin == 1">
     <p>{{this.tokenFalse}}</p>
  </div>
</template>

<script>
import HeaderAdmin from "../components/HeaderAdmin.vue";
export default {
    name:'AdminSickwant',
    props:['user'],
    components:{
        HeaderAdmin
    },
    data() {
    return {
      allData: "",
      data_wang: "",
      tokenFalse: 'Invalid Token or access denied',
      dataAdmin: '',

    };
  },
  methods: {
    fetchAllData: function() {
      axios.get("http://localhost:3000/all-sickwant").then((res) => {
        this.allData = res.data.data;
        this.dataAdmin = this.user.data.roles_id
         console.log(res.data.data)
       // console.log(this.user.data.roles_id)
        $(document).ready(function() {
          $("#userTable").DataTable();
        });
      });
    },
     deleteData: function(sickw_id) {
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
              //  console.log(res)
              swal(res.data.message, "Deleted Success fully!", "success").then(
                function() {
                 location.reload();
                 window.location.href('Admin');
                }
              );
            });
        }
      });
    },
     deleteAlldata: function() {
      swal({
        title: "คุณต้องการลบข้อมูลนี้ ใช่หรือไม่",
        text: "หากลบแล้วไม่สามารถกู้คืนข้อมูลนี้ได้",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .post("http://localhost:3000/deleteAllSickbedWant", {
              
            })
            .then((res) => {
                console.log(res)
              swal(res.data.message, "Deleted Success fully!", "success").then(
                function() {
                 location.reload();
                 window.location.href('Admin');
                }
              );
            });
        }
      });
    },
  },

  created() {
    this.fetchAllData();
  },
}
</script>