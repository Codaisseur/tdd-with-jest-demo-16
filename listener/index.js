const io = require('socket.io-client')
const socket = io.connect('http://localhost:3002')
socket.on('action', data => console.log(data))
