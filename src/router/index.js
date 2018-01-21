import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin/Admin'
import LogMessage from '@/components/Admin/LogMessage'
import AccountSetting from '@/components/Admin/AccountSetting'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      children: [
        {
          path: 'overview',
          component: HelloWorld// 正在开发中
        },
        {
          path: 'logMessage',
          component: LogMessage
        },
        {
          path: 'accountSetting',
          component: AccountSetting
        },
        {
          path: 'userList',
          component: HelloWorld// 正在开发中
        },
        {
          path: 'userLogList',
          component: HelloWorld// 正在开发中
        },
        {
          path: 'setMessage',
          component: HelloWorld// 正在开发中
        }
      ]
    }
  ]
})
