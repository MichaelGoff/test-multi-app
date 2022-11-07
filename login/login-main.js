import Vue from 'vue'

import LoginApp from '../src/LoginApp.vue'

import '../src/assets/main.css'

new Vue({
  render: (h) => h(LoginApp)
}).$mount('#app')
