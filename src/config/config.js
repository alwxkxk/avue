module.exports = {
  socketioPath: 'http://www.scaugreen.cn:7999', // akoa的端口，socketio连接所用
  url: {
    postAvatar: '/api/avatar',
    getImage: '/api/image'
  },
  group: {
    '0': 'user',
    '1': 'administrator'
  }
}
