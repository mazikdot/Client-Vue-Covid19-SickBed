<template>
  <div v-if="user">
      <HeaderSickbed/>
      <MustSickbed/>
  </div>
  <div v-else>
      {{messageToken}}
  </div>
</template>

<script>
import HeaderSickbed from '../components/HeaderSickbed.vue'
import MustSickbed from '../components/MustSickbed.vue'
export default {
      name: 'SickbedWant',
      props:['user'],
      components:{
        HeaderSickbed,
        MustSickbed
      },
      data(){
          return {
            user_username: '',
            sick_name: '',
            sick_amount: '',
            sick_note: '',
            select_province: '',
            province_data: '',
            select_amphures: '',
            amphures_data: '',
            select_districts: '',
            districts_data: '',
            village: '',
            messageToken: 'Invalid token'
        }
      },
      methods: {
        fetchProvince : function(){
          axios.get("http://localhost:3000/ReadProvince").then((response) =>{
         // this.prefix_test = []
        //   console.log(response.data)
          this.province_data = response.data.data;
          this.select_amphures = '';
          this.amphures_data = '';
          this.select_districts = '';
          this.districts_data = '';
          //console.log(this.prefix_test);
          })
      },
       fetchAmphures : function(){
          axios.put("http://localhost:3000/ReadAmphures",{
              province_id: this.select_province
          }).then((response) =>{
          this.amphures_data = response.data.data;
          this.select_amphures = '';
          this.select_districts = '';
          this.districts_data = '';
          })
      },
    
       fetchDistricts : function(){
          axios.put("http://localhost:3000/ReadDistrict",{
                amphure_id: this.select_amphures
          }).then((response) =>{
           this.districts_data = response.data.data;
          // console.log(response.data.data);
            this.select_districts = '';

          })
      },
        submitData() {
          // console.log('test')
          this.user_username = this.user.data.user_username
          // console.log(this.user.data.user_username)
          // conseol.log(user.data)
          axios.post("http://localhost:3000/insert-sickbed", {
            user_username : this.user_username,
            sick_name: this.sick_name,
            sick_amount: this.sick_amount,
            sick_note: this.sick_note,
            village: this.village,
            province_id: this.select_province,
            districts_id: this.select_districts,
            amphure_id: this.select_amphures
          }).then(res => {
            // console.log(res)
             if (res.data.status == false) {
              const alert = async() =>{
                await swal('ขออภัยค่ะ', "โปรดตรวจสอบข้อมูลของท่านอีกครั้ง", "error");
                }
              alert();
              } 
             else if (res.data.status == true) {
              const alert = async() =>{
                await swal('ขอบคุณค่ะ', "บริจาคเตียงผู้ป่วยเรียบร้อยแล้ว", "success");
                await this.$router.push('Sickbed')
                }
              alert();
              } 
          });
        }
      },
      created: function() {
      this.fetchProvince();
    }
}
</script>