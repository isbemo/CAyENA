import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login2',
    name: 'Login2',
    component: () => import(/* webpackChunkName: "about" */ '../components/Login2.vue')
  },
  {
    path: '/inicio',
    name: 'Inicio',
    component: () => import(/* webpackChunkName: "about" */ '../components/Inicio.vue')
  },
  {
    path: '/registro',
    name: 'Registro',
    component: () => import(/* webpackChunkName: "about" */ '../components/Registro.vue')
  },
  {
    path: '/restacontra',
    name: 'RestaContra',
    component: () => import(/* webpackChunkName: "about" */ '../components/RestaContra.vue')
  },
  {
    path: '/inscripcion',
    name: 'Inscripcion',
    component: () => import(/* webpackChunkName: "about" */ '../components/Inscripcion.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
