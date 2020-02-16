import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Dentista from '../components/dentistas/Dentista'
import Dentistaform from '../components/dentistas/Dentistaform'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/dentistas',
    name: 'dentistas',
    component: Dentista
  },
  {
    path: '/dentistas/novo',
    name: 'dentistas-novo',
    component: Dentistaform
  },
  {
    path: '/dentistas/editar/:id',
    name: 'dentistas-editar',
    component: Dentistaform,
    props: true
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
