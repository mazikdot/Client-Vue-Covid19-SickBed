<template>
  <header id="header_wrapper">
    <div class="container">
      <div class="header_box">
        <div class="logo">
          <img src="@/assets/img/Sickbed6.png" />
        </div>
        <nav class="navbar navbar-inverse" role="navigation">
          <div class="navbar-header">
            <button
              type="button"
              id="nav-toggle"
              class="navbar-toggle"
              data-toggle="collapse"
              data-target="#main-nav"
            >
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span> <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="main-nav" class="collapse navbar-collapse navStyle">
            <ul class="nav navbar-nav" id="mainNav">
              <li>
                <router-link class="scroll-link" to="/">หน้าแรก</router-link>
              </li>
              <li>
                <router-link class="scroll-link" to="/RegisterPage"
                  >สมัครบัญชีผู้ใช้</router-link
                >
              </li>
              <li>
                <router-link style="color: red;" class="scroll-link" to="/Login"
                  >เข้าสู่ระบบ</router-link
                >
              </li>
              <!-- <li>
                <router-link style="color: red;" class="scroll-link" to="/HomePage"
                  >เทส JWT</router-link
                >
              </li>
              <li>
                <router-link style="color: red;" class="scroll-link" to="/Sickbed"
                  >ค้นหาเตียงผู้ป่วย</router-link
                >
              </li> -->
            </ul>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "HeaderRegister",
};
</script>
