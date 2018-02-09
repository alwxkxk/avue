// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

Vue.use(ElementUI)
let vm = new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App } // 局部注册组件 等效于{'App':App}
})
