const topicNames = require('./topics');

const item = {
  group: {
    group_topics: [
      { topic_name: 'React' },
      { topic_name: 'Redux' },
      { topic_name: 'Express' },
      { topic_name: 'Jest' },
    ]
  }
}

test('topicNames returns the topic names', () => {
  expect(topicNames(item)).toEqual(
    ['React', 'Redux', 'Express', 'Jest'])
})
