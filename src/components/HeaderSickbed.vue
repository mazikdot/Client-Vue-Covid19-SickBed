<template>
<header id="header_wrapper" >
  <div class="container">
    <div class="header_box">
      <div class="logo"><a href="#"><img  src="@/assets/img/Sickbed6.png" alt="logo"></a></div>
	  <nav class="navbar navbar-inverse" role="navigation">
      <div class="navbar-header">
        <button type="button" id="nav-toggle" class="navbar-toggle" data-toggle="collapse" data-target="#main-nav"> <span class="sr-only">Toggle navigation</span> <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span> </button>
        </div>
	    <div id="main-nav" class="collapse navbar-collapse navStyle">
			<ul class="nav navbar-nav" id="mainNav">
            <li><router-link  class="scroll-link" to="/Sickbed">ค้นหาเตียงผู้ป่วย</router-link></li>
            <li><router-link class="scroll-link" to="/Sickbed">บริจาคเตียงผู้ป่วย</router-link></li>
            <li><router-link class="scroll-link" to="/Sickbed">สถานการณ์เตียงผู้ป่วย</router-link></li>
            <li><router-link class="scroll-link" to="/Sickbed">ยอดการติด Covid-19</router-link></li>
            <li><a href="javascript:void(0)" class="scroll-link" @click="logout()" style="color:red;">ออกจากระบบ</a></li>
            <!-- <li  class="scroll-link">{{user}}ss</li> -->
            <!-- <li><router-view :user="user"/></li> -->
            
    			</ul>
      </div>
      <!-- <h1>{{user}}</h1> -->
	 </nav>
    </div>
  </div>
</header>
</template>

<script>
export default {
    name: 'HeaderSickbed',
    methods:{
      logout(){
          // console.log("logout");
          localStorage.removeItem('token');
          this.$router.push('Login');
      }
    }
}
// console.log(user)
</script>