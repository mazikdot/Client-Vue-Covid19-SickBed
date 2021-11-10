<template>
  <div>
    <div v-if="user">
      <HeaderSickbed />
      <SectionSickbed />
    </div>
    <div v-else>
      {{ tokenFalse }}
    </div>
    <!-- <button @click ="test()">ปุ่มกด</button> -->
  </div>
</template>

<script>
import HeaderSickbed from "../components/HeaderSickbed";
import SectionSickbed from "../components/SectionSickbed";
import "../assets/css/bootstrap.min.css";
import "../assets/css/style.css";
import "../assets/css/font-awesome.css";
import "../assets/css/jquery.fancybox.css";
import "../assets/css/animate.css";
import "../assets/css/styleTable.css";
export default {
  name: "Sickbed",
  props: ["user"],

  components: {
    HeaderSickbed,
    SectionSickbed,
  },
  data() {
    return {
      status: "",
      getdata: "",
      tokenFalse: "invalid token!",
    };
  },
  methods: {
    test: function() {
      this.getdata = this.user.data.user_username;
      console.log(this.user.data.user_username);
    },
  },
};
</script>

<style scoped>
@import "/assets/css/bootstrap.min.css";
@import "/assets/css/jquery.fancybox.css";
@import "/assets/css/style.css";
@import "/assets/css/font-awesome.css";
@import "/assets/css/animate.css";
@import "/assets/css/styleTable.css";
</style>
