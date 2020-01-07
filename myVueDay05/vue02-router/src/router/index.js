import Vue from 'vue'
//导入插件
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import About from '../components/About.vue'

//安装插件
Vue.use(VueRouter)

//创建VueRouter对象
const router = new VueRouter({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/about',
      component: About
    }
  ],
  mode:'history'
})

export default router
