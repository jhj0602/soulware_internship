import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

import GlobalComponent from './components/global-component.vue'

Vue.component('global-component', GlobalComponent)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
