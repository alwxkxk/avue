import axios from 'axios'
const apiList = {
  register: {method: 'post', url: '/api/user'},
  login: {method: 'post', url: '/api/token'},
  logout: {method: 'delete', url: '/api/token', withCredentials: true}, // withCredentials代表请求带cookies
  log: {method: 'get', url: '/api/log', withCredentials: true},
  postAvatar: {method: 'post', url: '/api/avatar', withCredentials: true},
  getImage: {method: 'get', url: '/api/image'},
  checkNoRepeat: {method: 'get', url: '/api/checkNoRepeat/:key/:value'},
  getUserList: {method: 'get', url: '/api/userList'},
  forgetPassword: {method: 'delete', url: '/api/password/email/:email'},
  deleteUser: {method: 'delete', url: '/api/user/:name', withCredentials: true},
  changePassword: {method: 'put', url: '/api/password', withCredentials: true},
  changeNickName: {method: 'put', url: '/api/nickName', withCredentials: true},
  setEmail: {method: 'post', url: '/api/email', withCredentials: true}
}

/**
 * 用户注册
 *
 * @param {String} name 用户名
 * @param {String} password 密码
 * @returns {Promise}
 */
function register (name, password) {
  const data = {data: {name: name, password: password}}
  const options = Object.assign({}, apiList.register, data)
  return axios(options)
}

/**
 * 用户登陆
 *
 * @param {String} name 用户名
 * @param {String} password 密码
 * @returns {Promise}
 */
function login (name, password) {
  const data = {data: {name: name, password: password}}
  const options = Object.assign({}, apiList.login, data)
  return axios(options)
}
/**
 * 退出登陆
 *
 * @returns
 */
function logout () {
  const options = apiList.logout
  return axios(options)
}

/**
 * GET 用户日志
 *
 * @returns {Promise}
 */
function log () {
  const options = apiList.log
  return axios(options)
}

/**
 * 忘记密码，向邮箱发送用户名与新的随机密码
 *
 * @param {String} email 邮箱地址
 * @returns {Promise}
 */
function forgetPassword (email) {
  const options = Object.assign({}, apiList.forgetPassword)
  options.url = options.url.replace(/:email/, email)
  return axios(options)
}

/**
 * 管理员删除账号
 *
 * @param {String} name
 * @returns {Promise}
 */
function deleteUser (name) {
  const options = Object.assign({}, apiList.deleteUser)
  options.url = options.url.replace(/:name/, name)
  return axios(options)
}

/**
 * 修改密码
 *
 * @param {String} password 旧密码
 * @param {String} newPassword 新密码
 * @returns {Promise}
 */
function changePassword (password, newPassword) {
  const data = {data: {password: password, newPassword: newPassword}}
  const options = Object.assign({}, apiList.changePassword, data)
  return axios(options)
}
/**
 * 设置邮箱地址
 *
 * @param {String} password 账号密码
 * @param {String} email 邮箱地址
 * @returns {Promise}
 */
function setEmail (password, email) {
  const data = {data: {password: password, email: email}}
  const options = Object.assign({}, apiList.setEmail, data)
  return axios(options)
}

/**
 * 修改昵称
 *
 * @param {String} nickName 昵称
 * @returns {Promise}
 */
function changeNickName (nickName) {
  const data = {data: {nickName: nickName}}
  const options = Object.assign({}, apiList.changeNickName, data)
  return axios(options)
}

/**
 * 检查没有重复值
 *
 * @param {String} key 键名 name,nick_name,email等值
 * @param {String} value 值
 * @returns {Promise}
 */
function checkNoRepeat (key, value) {
  const options = Object.assign({}, apiList.checkNoRepeat)
  options.url = options.url.replace(/:key/, key)
  options.url = options.url.replace(/:value/, value)
  console.log(options.url)
  return axios(options)
}

/**
 * 管理员 获取用户列表
 *
 * @returns {Promise}
 */
function getUserList () {
  const options = apiList.getUserList
  return axios(options)
}

export default {
  register: register,
  login: login,
  logout: logout,
  log: log,
  forgetPassword: forgetPassword,
  changePassword: changePassword,
  setEmail: setEmail,
  changeNickName: changeNickName,
  checkNoRepeat: checkNoRepeat,
  getUserList: getUserList,
  deleteUser: deleteUser
}
