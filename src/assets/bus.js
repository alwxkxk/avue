import Vue from 'vue'
const bus = new Vue()
export default bus

/**
 * 1. AccountSetting.vue 更换头像图片时 通知Header.vue
 */

 // 修改本地用户数据
bus.$on('chageUserInfo', function chageUserInfo (key, value) {
  const user = JSON.parse(window.localStorage.getItem('user')) || {}
  console.log(`chageUserInfo: ${key} -> ${value}`)
  user[key] = value
  window.localStorage.setItem('user', JSON.stringify(user))
})
