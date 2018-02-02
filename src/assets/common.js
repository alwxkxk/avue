import moment from 'moment'
import {group} from '@/config/config.js'
export default {
  /**
   * 手动将格林威治标准时间转换为当地时间
   *
   * @param {Date} date 时间
   * @returns 当地时间
   */
  convertLocalTime (date) {
    return moment(date).format('YYYY-MM-DD HH:mm:ss')
  },
  /**
   * 检查是否为管理员
   *
   * @returns {Boolean}
   */
  isAdministrator () {
    const user = JSON.parse(window.localStorage.getItem('user')) || {}
    let groupId = user['group_id']
    return group[groupId] === 'administrator'
  }
}
