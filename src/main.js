// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import AnimatedVue from 'animated-vue'
Vue.use(AnimatedVue)

import './assets/js/app.js'
import './assets/js/cookie.js'

window.amaze = require('amazeui')
window.prints = require('./assets/js/print.js')
window.Public = require('./assets/js/common.js').default

import '../node_modules/amazeui/dist/css/amazeui.min.css'
import 'animate.css/animate.css'
import './assets/less/admin.less'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
