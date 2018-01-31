import Vue from 'vue'
import Router from 'vue-router'

import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Admin from '@/components/Admin/Admin'
import LogMessage from '@/components/Admin/LogMessage'
import AccountSetting from '@/components/Admin/AccountSetting'
import UserList from '@/components/Admin/UserList'
import Overview from '@/components/Admin/Overview'
import File from '@/components/Admin/File'
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
          component: Overview
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
          component: UserList// 正在开发中
        },
        {
          path: 'userLogList',
          component: HelloWorld// 正在开发中
        },
        {
          path: 'setMessage',
          component: HelloWorld// 正在开发中
        },
        {
          path: 'file',
          component: File
        }
      ]
    }
  ]
})
