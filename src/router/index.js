import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/jobs/NotFound.vue'
import Register from '../components/Register.vue'
import RegisterPage from '../views/RegisterPage.vue'
import Login from '../views/Login.vue'
import HomePage from '../views/HomePage.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/Jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage
  },
  
  {
    path: '/service',
    id: '#service'
  },
  {
    path: '/Jobs/:id',
    name: 'JobDetails',
    component: JobDetails,
    props: true
  },
  {
    path: '/RegisterPage',
    name: 'RegisterPage',
    component: RegisterPage
  },
 
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },

  /// call 404 not found
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  mode: 'history',
  routes
})

export default router
