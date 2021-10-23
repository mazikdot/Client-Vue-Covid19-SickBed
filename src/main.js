import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import  Vue from  'vue';
// import axios from 'axios'
// import VueAxios from 'vue-axios'
// const app = createApp(App).use(store)
// app.use(VueAxios, axios)
// app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
// app.mount('#app')
// require('./assets/js/js_index/jquery-1.11.0.min.js');
// require('./assets/js/js_index/bootstrap.min.js');
// import jquery from './jquery'

//  import 'jquery/dist/jquery.min.js'
// var $ = require('jquery')
// import jQuery from 'jquery'
// global.jQuery = jQuery
// import 'bootstrap/dist/js/bootstrap.min.js'
 //import 'assets/js/js_index/jq.js'
// let Bootstrap = require('bootstrap')
// import 'bootstrap/dist/css/bootstrap.min.css'
// import 'poper.js';

// import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// // Import Bootstrap an BootstrapVue CSS files (order is important)
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'

// // Make BootstrapVue available throughout your project
// Vue.use(BootstrapVue)
// // Optionally install the BootstrapVue icon components plugin
// Vue.use(IconsPlugin)

createApp(App).use(router).mount('#app')
