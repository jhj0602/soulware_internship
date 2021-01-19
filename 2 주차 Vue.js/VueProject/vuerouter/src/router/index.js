import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Image from '../components/ImageEx.vue'; //게시판 리스트 컴포넌트 호출
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path:'/image',
    name: 'Image',
    component: Image
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
