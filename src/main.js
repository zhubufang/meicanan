import Vue from 'vue'
import './cube-ui'
import './mint-ui'
import App from './App.vue'
import router from './router'
import store from './store'
Vue.config.productionTip = false


// 引入阿里图标
import './assets/icon/iconfont.css'
import './assets/icon/iconfont.js'

import { service } from './api/request'
Vue.prototype.$service = service
console.log(process.env.NODE_ENV)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
