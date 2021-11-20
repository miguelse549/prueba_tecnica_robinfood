import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [

  {
    path: '/',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },

  {
    path: '/shops',
    name: 'Shops',
    component: () => import('../views/Shops.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
