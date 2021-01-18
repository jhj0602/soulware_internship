import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false


//로컬 컴포넌트
//vue 값 전달 props 부모->자녀 자 녀->부모 
//vuex ,eventbus
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
