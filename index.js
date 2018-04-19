// index.js
const Meetup = require("meetup")
const app = require('express')()
const server = require('http').Server(app)
const io = require('socket.io')(server)
const mup = new Meetup()
const { topicNames, updateCounters, top10 } = require('./topics');
const { isInterestingItem } = require('./item');

const TOPIC = 'Software Development'

let topicsCounter = {}
let sockets = []

const processItem = item => {
  if (!isInterestingItem(item, TOPIC)) return

  sockets.forEach(socket => {
    socket.emit('action', {
      type: 'NEW_RSVP',
      payload: item
    });
  });

  topicsCounter = updateCounters(topicsCounter, item)

  sockets.forEach(socket => {
    socket.emit('action', {
      type: 'UPDATE_TOP_10',
      payload: top10(topicsCounter)
    });
  });
}

mup.stream("/2/rsvps", stream => {
  stream
    .on("data", processItem)
    .on("error", e => {
      console.log("error! " + e)
    });
})

io.on('connection', socket => {
  console.log('got connection')
  sockets.push(socket)
});

server.listen(3002)
