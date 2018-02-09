/**
 * 配置说明
 * 本地运行avue,akoa本地运行:将url指向127.0.0.1
 * localDevelop = true
 *
 * avue与akoa不在同一台服务器:由于cookie不可跨域访问，手动将token设置到所有请求的header里
 * headerToken: true
 *
 * avue,akoa在同一台服务器运行且nginx将他们配置为同一域名：即可使用cookie
 * headerToken: false
 */

const localDevelop = false // 是否为本地开发，若是则切换为本地URL
module.exports = {
  baseURL: localDevelop ? 'http://localhost:7999' : 'http://www.scaugreen.cn',
  socketioPath: localDevelop ? '127.0.0.1:7999' : 'http://www.scaugreen.cn:7999', // socketio连接所用,指向akoa

  headerToken: true, // 将token设置到header里,如果avue与akoa分开不同主机部署则必须为true。
  url: {
    postAvatar: '/api/avatar',
    getImage: '/api/image',
    downloadFile: '/api/file/:uuid',
    downloadFile2: '/api/token/:token/file/:uuid', // 暂时无法设置header token，暂且通过url传入
    uploadFile: '/api/file'
  },
  group: {
    '0': 'user',
    '1': 'administrator'
  }
}
