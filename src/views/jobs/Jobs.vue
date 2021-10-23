<template>
  <h1>MAD</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{name : 'JobDetails',params : {id : job.id}}">
  <h5>{{ job.title }}</h5>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      jobs: [
        { title: "Muhammad Puteela", id: 1, details: "lorem" },
        { title: "Muhammad Puteela 2", id: 2, details: "lorem" },
        { title: "Muhammad Puteela 3", id: 3, details: "lorem" },
      ],
    };
  },
};
</script>

<style>
.job h5{
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width:600px;
  cursor: pointer;
  color: #444;
}
.job h5:hover{
  background: #ddd;
}
.job a{
  text-decoration: none;
}
</style>
