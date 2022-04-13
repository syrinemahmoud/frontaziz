import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'

import AppLayout from "./layout/AppLayout"
import RegisterLayout from "./layout/RegisterLayout"

Vue.component('AppLayout-layout',AppLayout)
Vue.component('RegisterLayout-layout',RegisterLayout)

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
