<template>
  <h1>Job Details Page</h1>
  <p> The job id is {{id}}</p>
  <!-- <p> The job id is {{$route.params.id}}</p> -->
  <!-- Route ค่าตัวแปรที่ส่งมา จากหน้า index.js -->
</template>

<script>
export default {
    name: 'JobDetails',
    props : ['id'],
    // data(){
    //     return {
    //         id: this.$route.params.id
    //     }
    // }
    //ถ้ามี prop id แบบนี้มันจะสามารถที่จะส่ง id ไปได้โดยไม่ต้อง ใช้ this.$router.params.id
}
</script>

<style>

</style>