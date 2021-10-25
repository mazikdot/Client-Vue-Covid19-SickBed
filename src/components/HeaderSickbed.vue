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
            <li><router-link class="scroll-link" style="color:tomato" to="/Sickbed">ออกจากระบบ</router-link></li>
            <!-- <li  class="scroll-link">บัญชีผู้ใช้ : {{user.data.user_username}} </li> -->
			  <!-- <li><a href="/Home" style="color:tomato" class="scroll-link">ค้นหาเตียงผู้ป่วย</a></li>

			  <li><a href="/Add-SickBed" class="scroll-link">บริจาคเตียงผู้ป่วย</a></li>
			  <li><a href="#contact" class="scroll-link">สถานการณ์เตียงผู้ป่วย</a></li>
			  <li><a href="login/register.php" class="scroll-link">ยอดการติด Covid - 19</a></li>
			  <li><a style="color:blue;" href="/logout" class="scroll-link">ออกจากระบบ<br>        
            </a></li> -->
			</ul>
      </div>
	 </nav>
    </div>
  </div>
</header>
</template>

<script>
export default {
    name: 'HeaderSickbed'
}
</script>