module.exports = {
  socketioPath: 'http://www.scaugreen.cn:7999', // akoa的端口，socketio连接所用
  // socketioPath: '127.0.0.1:7999', // 本地发开时所用，akoa已经本地运行
  url: {
    postAvatar: '/api/avatar',
    getImage: '/api/image'
  },
  group: {
    '0': 'user',
    '1': 'administrator'
  }
}
