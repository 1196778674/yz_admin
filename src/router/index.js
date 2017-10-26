import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Login from '@/components/Login'

// 项目管理
import Project from '@/components/Project'
// 模块管理
import Modular from '@/components/Modular'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: '/modular',
          name: 'Modular',
          component: Modular
        }
      ]
    }
  ]
})
