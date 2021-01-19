import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Global from './components/Global-Component'
import Stopwatch from './components/Stopwatch'
import vuetify from './plugins/vuetify';
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
Vue.config.productionTip = false
Vue.component('Global-Component', Global)
Vue.component('Stopwatch', Stopwatch)
//로컬 컴포넌트
//vue 값 전달 props 부모->자녀 자 녀->부모 
//vuex ,eventbus

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
