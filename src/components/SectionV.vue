<template>
    <section class="showcase">
    <header>
      <!-- <h2 class="logo">เตียงผู้ป่วย</h2> -->
      <!-- <div class="toggle"></div> -->
    </header>
    <video src="../assets/video/video-2.mp4" muted loop autoplay></video>
    <div class="overlay"></div>
    <div class="center">
    <div class="text">
      <h2>ค้นหาเตียงผู้ป่วย Covid - 19</h2> 
      <h3>Search Sick - Bed</h3>
      <!-- <p>เว็บไซต์นี้ถูกพัฒนาขึ้นเพื่อให้ผู้ใช้ ทุกที่ทุกจังหวัด สามารถที่จะเข้าค้นหาเตียงผู้ป่วยหรือบริจาคเตียงให้กับผู้ป่วยได้อย่างอิสระ</p> -->
      <p>เว็บไซต์นี้ถูกพัฒนาขึ้นเพื่อให้ผู้ใช้สามารถเข้ามาค้นหาเตียงผู้ป่วยภายในเว็บ รวมไปถึงการบริจาคเตียงให้กับผู้ป่วย
          <br>พร้อมทั้งสามารถเช็คยอดการติด Covid-19 ภายในเว็บในแต่ละวัน
      </p>
      <a href="#">สมัครบัญชีผู้ใช้</a>
    </div>
</div>
      <!-- <Section/> -->
  </section>

</template>
<script>
import Section from "../components/Section";
export default {
    name: "SectionV",
    components : {
        Section
    }
}
</script>