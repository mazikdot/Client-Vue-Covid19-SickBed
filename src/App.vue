<template>
    <!-- <Header/> -->
    <!-- <router-link to="/">Home</router-link> | -->
    <!-- <router-link to="/Jobs">Jobs</router-link> | -->
    <!-- <router-link to="/about">About</router-link> -->
    <!-- <router-link :to="{name : 'About'}">About</router-link> -->
    <!-- <router-link :to="{name : 'Jobs'}">Jobs</router-link> -->
  
  <!-- <button @click="redirect">Redirect</button>
  <button @click="back">Go back</button>
  <button @click="forward">Go forward</button> -->
  <router-view/>
</template>
<script>
// import Header  from "../src/components/Header";
export default {
  components: {
  },
  methods:{
    redirect(){
      this.$router.push({ name : 'Home'})
    },
    back(){
      this.$router.go(-1)
    },
    forward(){
      this.$router.go(1)
    }
  }
}
</script>
<style>

</style>
