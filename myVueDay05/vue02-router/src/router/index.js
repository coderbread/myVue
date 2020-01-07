import Vue from 'vue'
//导入插件
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
// import About from '../components/About.vue'
// import User from '../components/User.vue'

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
      component: Home,
      meta: {
        title: '首页'
      },
      children: [
        {
          path: 'singers',
          component: () => import('../components/Singers.vue') //lazyload
        }
      ]
    },
    {
      path: '/about',
      meta: {
        title: '关于'
      },
      component: () => import('../components/About.vue')
    },
    {
      path: '/user/:id',
      meta: {
        title: '用户'
      },
      component: () => import('../components/User.vue')
    },
    {
      path: '/profile',
      meta: {
        title: '档案'
      },
      component: () => import('../components/Profile.vue')
    }
  ],
  mode:'history',
  linkActiveClass: 'active',
})

router.beforeEach((to, from, next) => {
  next();
  document.title = to.matched[0].meta.title
})

export default router
