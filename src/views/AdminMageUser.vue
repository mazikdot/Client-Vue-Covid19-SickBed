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
     
      <!-- <%= getdata %> -->
      <table v-cloak class="table table-striped table-hover" id="userTable">
        <thead v-cloak>
          <tr>
            <th style="width:100px;">ชื่อผู้บัญชีผู้ใช้</th>
            <th style="width:80px;">ชื่อจริง</th>
            <th style="width:150px;">นามสกุล</th>
            <th style="width:100px;">เบอร์โทรศัพท์</th>
            <!-- <th style="width:60px;">Status</th> -->
            <th style="width:60px;">ลบ</th>
          </tr>
        </thead>
        <tbody v-cloak>
          <tr
            :key="row.user_username"
            v-cloak
            v-for="row in allData"
            data-status="active"
          >
            <td>{{row.user_username}}</td>
            <!-- <td>{{row.give_name}}</td> -->
            <td class="btn-sm manage">{{ row.user_firstname }}</td>
            <td class="btn-sm manage">{{ row.user_lastname }}</td>
            <td class="btn-sm manage">{{ row.user_phone }}</td>
           
           
           <td><button  v-on:click="deleteData(row.user_username)" style="background-color:red;" class="btn btn-primary">ลบ</button></td>
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
    name:'AdminMageUser',
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
      axios.get("http://localhost:3000/getUser").then((res) => {
        this.allData = res.data.data;
        this.dataAdmin = this.user.data.roles_id
        // console.log(res.data.data)
       // console.log(this.user.data.roles_id)
        $(document).ready(function() {
          $("#userTable").DataTable();
        });
      });
    },
     deleteData: function(user_username) {
      swal({
        title: "คุณต้องการลบข้อมูลนี้ ใช่หรือไม่",
        text: "หากลบแล้วไม่สามารถกู้คืนข้อมูลนี้ได้",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          axios
            .post("http://localhost:3000/deleteUser", {
              user_username: user_username,
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
    }
  },

  created() {
    this.fetchAllData();
  },
}
</script>