import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home/Home'
import Login from '@/components/Login/Login'
// 添加编辑
import Form from '@/components/Forms/Form'

// 项目管理
import Project from '@/components/Project/Project'
// 详情
import Projectdetail from '@/components/Project/Projectdetail'

// 模块管理
import Modular from '@/components/Modular/Modular'
// 详情
import Modulardetail from '@/components/Modular/Modulardetail' 

// 中心管理
import Center from '@/components/Center/Center'
// 设备管理
import Equipment from '@/components/Equipment/Equipment'
// 详情
import Equipmentdetail from '@/components/Equipment/Equipmentdetail'

// 人员管理
import Personnel from '@/components/Personnel/Personnel'
// 详情
import Personneldetail from '@/components/personnel/Personneldetail'

// 用品管理
import Articles from '@/components/Articles/Articles'
// 用品详情
import Articlesdetail from '@/components/Articles/Articlesdetail'

// 标签管理
import Tags from '@/components/Tags/Tags'
// 诊室管理
import Consultation from '@/components/Consultation/Consultation'
// 类别管理
import Category from '@/components/Category/Category'


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
          path: 'form',
          name: 'form',
          component: Form
        },
        {
          path: '/project',
          name: 'Project',
          component: Project
        },
        {
          path: 'projectdetail',
          name: 'Projectdetail',
          component: Projectdetail
        },
        {
          path: '/modular',
          name: 'Modular',
          component: Modular
        },
        {
          path: 'modulardetail',
          name: 'Modulardetail',
          component: Modulardetail
        },
        {
          path: '/center',
          name: 'Center',
          component: Center
        },
        {
          path: '/equipment',
          name: 'Equipment',
          component: Equipment
        },
        {
          path: '/equipmentdetail',
          name: 'Equipmentdetail',
          component: Equipmentdetail
        },
        {
          path: '/personnel',
          name: 'Personnel',
          component: Personnel
        },
        {
          path: '/personneldetail',
          name: 'Personneldetail',
          component: Personneldetail
        },
        {
          path: '/articles',
          name: 'Articles',
          component: Articles
        },
        {
          path: '/articlesdetail',
          name: 'Articlesdetail',
          component: Articlesdetail
        },
        {
          path: '/tags',
          name: 'Tags',
          component: Tags
        },
        {
          path: '/consultation',
          name: 'Consultation',
          component: Consultation
        },
        {
          path: '/category',
          name: 'Category',
          component: Category
        }
      ]
    }
  ]
})
