// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

window.jQuery = window.$ = require('jquery')
// window.bootstrap = require('bootstrap')
window.amaze = require('amazeui')
window.Public = require('./assets/js/common.js').default

import '../node_modules/amazeui/dist/css/amazeui.min.css'
import './assets/less/index.less'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
