import io from 'socket.io-client'
import config from '@/config/config.js'

const socket = io(config.server)
socket.on('connect', function () {
  console.log('socket.io connect')
})

socket.on('disconnect', function () {
  console.log('socket.io disconnect')
})

export default socket
