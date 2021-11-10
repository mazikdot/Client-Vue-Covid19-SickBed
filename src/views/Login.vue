<template>
  <Header />
  <LoginComponent />
</template>

<script>
import "../assets/css/main.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/animate.css";
import "../assets/css/fontend.css";
import Header from "../components/HeaderRegiter";
import LoginComponent from "../components/LoginComponent";
export default {
  name: "Login",
  components: {
    Header,
    LoginComponent,
  },
};
</script>

<style scoped>
@import "/assets/css/style.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/main.css";
@import "/assets/css/fontend.css";
</style>
