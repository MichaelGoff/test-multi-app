import Vue from 'vue'

import LoginApp from '../src/LoginApp.vue'
import router from './router'

import './assets/main.css'

new Vue({
  router,
  render: (h) => h(LoginApp)
}).$mount('#app')
