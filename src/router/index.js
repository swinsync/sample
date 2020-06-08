import Vue from 'vue'
import Router from 'vue-router'
import DashBoard from '@/components/DashBoard'
import ExitUser from '@/components/ExitUser'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/',
      name: 'DashBoard',
      component: DashBoard
    },
    {
      path: '/exit-user',
      name: 'ExitUser',
      component: ExitUser
    }
  ]
})
