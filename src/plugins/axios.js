import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'http://apiselfmanager.magnosanttana.com.br/api/v1'
//axios.defaults.baseURL = 'http://selfmanager.local/api/v1'

Vue.use({
    install(Vue){
        Vue.prototype.$http = axios
    }
})