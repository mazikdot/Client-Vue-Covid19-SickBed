<template>
  <Header />
  <SectionV />
  <!-- <Footer /> -->
  <!-- <my-script src="../assets/js/alert.js"></my-script> -->
</template>

<script>
  // import '../assets/js/js_index/jquery-1.11.0.min.js'
  //import '../assets/js/js_index/jq.js'
 import '../assets/js/js_index/bootstrap.min.js'
import '../assets/js/js_index/wow.js'
 import '../assets/js/js_index/jquery-scrolltofixed.js'
import '../assets/js/js_index/jquery.nav.js'
import '../assets/js/js_index/jquery.easing.1.3.js'
import '../assets/js/js_index/jquery.isotope.js'
import '../assets/js/js_index/jquery.fancybox.pack.js'
import '../assets/js/js_index/custom.js'

//import jquery from './jquery'
//import '../assets/js/test.js'

// import Header from "../components/Header";
// import Header from "../components/Header-Regiter";
import Section from "../components/Section";
import SectionV from "../components/SectionV";
import Header from "../components/HeaderRegiter";

import '../assets/css/video_css.css';





export default {
  name: "Home",
  components: {
    Section,
    Header,
    SectionV
  }
};
</script>
<style scoped>

@import "/assets/css/style.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/video_css.css";

</style>
