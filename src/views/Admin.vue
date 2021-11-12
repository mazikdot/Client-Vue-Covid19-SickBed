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
              <b style="color:white;">เตียงผู้ป่วยบริจาค</b>
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
            <th style="width:100px;">ข้อมูลเตียงผู้ป่วย</th>
            <th style="width:80px;">วันที่บริจาค</th>
            <th style="width:60px;">ผู้บริจาคเตียงผู้ป่วย</th>
            <th style="width:100px;">ตำแหน่งเตียงผู้ป่วย</th>
            <th style="width:30px;">Status</th>
            <th style="width:50px;">ลบ</th>
          </tr>
        </thead>
        <tbody v-cloak>
          <tr
            :key="row.sick_id"
            v-cloak
            v-for="row in allData"
            data-status="active"
          >
            <td>{{ row.data_sickbed }}</td>
            <td>
              วันที่บริจาค<br />{{ row.date_add }}<br />{{ row.sick_note }}
            </td>
            <td class="btn-sm manage">
              {{ row.users }}<br />ติดต่อได้ที่ : {{ row.user_phone }}<br />{{
                row.user_email
              }}
            </td>
            <td class="btn-sm manage">{{ row.address }}</td>
            <td>
              <span
                :class="[row.sit_id === 1 ? 'label label-danger' : '', '']"
                class="label label-success"
                >{{ row.sit_name }}</span
              >
            </td>
            <td><button  v-on:click="deleteData(row.sick_id)" style="background-color:red;" class="btn btn-primary">ลบ</button></td>
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
    name:'Admin',
    props:['user'],
    components:{
        HeaderAdmin
    },
    data() {
    return {
      allData: "",
      data_wang: "",
      tokenFalse: 'Invalid Token or access denied',
      dataAdmin: ''
    };
  },
  methods: {
    fetchAllData: function() {
      axios.get("http://localhost:3000/all-sickbed").then((res) => {
        this.allData = res.data.data;
        this.dataAdmin = this.user.data.roles_id
         console.log(res.data.data)
       // console.log(this.user.data.roles_id)
        $(document).ready(function() {
          $("#userTable").DataTable();
        });
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
               // console.log(res)
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
            .post("http://localhost:3000/deleteAllSickbed", {
              
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