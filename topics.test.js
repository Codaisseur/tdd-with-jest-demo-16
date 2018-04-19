const { topicNames, updateCounters, top10 } = require('./topics');

const counters = Object.freeze({
  React: 0,
  Redux: 1,
})

const item = Object.freeze({
  group: {
    group_topics: [
      { topic_name: 'React' },
      { topic_name: 'Redux' },
      { topic_name: 'Express' },
      { topic_name: 'Jest' },
    ]
  }
})

describe('topicNames', () => {
  test('returns the topic names', () => {
    expect(topicNames(item)).toEqual(
      ['React', 'Redux', 'Express', 'Jest'])
  })
})

describe('updateCounters', () => {
  test('updates the counters', () => {
    expect(updateCounters(counters, item)).toEqual({
      React: 1,
      Redux: 2,
      Express: 1,
      Jest: 1
    })
  })
})

describe('top10', () => {
  const counters = { React: 0, Redux: 1, Jest: 2, Mocha: 3, Chai: 4, Enzyme: 5, Express: 6, Node: 12, WebSockets: 8, Coding: 10, Meetup: 14 }
  test('returns a sorted list of 10 topics', () => {
    expect(top10(counters)).toEqual([
      { count: 14, topic: 'Meetup' },
      { count: 12, topic: 'Node' },
      { count: 10, topic: 'Coding' },
      { count: 8, topic: 'WebSockets' },
      { count: 6, topic: 'Express' },
      { count: 5, topic: 'Enzyme' },
      { count: 4, topic: 'Chai' },
      { count: 3, topic: 'Mocha' },
      { count: 2, topic: 'Jest' },
      { count: 1, topic: 'Redux' }
    ])
  })
})
