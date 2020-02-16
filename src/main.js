import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/plugins/axios'
import Toasted from 'vue-toasted';

Vue.use(Toasted, {
    iconPack: 'materialdesign',
    duration: 3000
})

import "@/assets/plugins/bootstrap/css/bootstrap.css"
import "@/assets/plugins/node-waves/waves.css"
import "@/assets/plugins/animate-css/animate.css"
import "@/assets/css/style.css"
import "@/assets/css/themes/all-themes.css"

import '@/assets/plugins/bootstrap/js/bootstrap.js'
import '@/assets/plugins/bootstrap-select/js/bootstrap-select.js'



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
