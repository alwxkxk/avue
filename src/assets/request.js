import axios from 'axios'
const apiList = {
  register: {method: 'post', url: '/api/user'},
  login: {method: 'post', url: '/api/token'},
  logout: {method: 'delete', url: '/api/token', withCredentials: true},
  log: {method: 'get', url: '/api/log', withCredentials: true},
  postAvatar: {method: 'post', url: '/api/avatar', withCredentials: true},
  getImage: {method: 'get', url: '/api/image'},
  forgetPassword: {method: 'delete', url: '/api/password/email/:email'}
}

/**
 * 用户注册
 *
 * @param {string} name 用户名
 * @param {string} password 密码
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
 * @param {string} name 用户名
 * @param {string} password 密码
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
 * @param {string} email 邮箱地址
 * @returns {Promise}
 */
function forgetPassword (email) {
  const options = Object.assign({}, apiList.forgetPassword)
  options.url = options.url.replace(/:email/, email)
  return axios(options)
}

export default {
  register: register,
  login: login,
  logout: logout,
  log: log,
  forgetPassword: forgetPassword
}
