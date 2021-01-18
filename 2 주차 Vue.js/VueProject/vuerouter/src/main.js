import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Global from './components/Global-Component'
import Stopwatch from './components/Stopwatch'
Vue.config.productionTip = false
Vue.component('Global-Component', Global)
Vue.component('Stopwatch',Stopwatch)
//로컬 컴포넌트
//vue 값 전달 props 부모->자녀 자 녀->부모 
//vuex ,eventbus

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
