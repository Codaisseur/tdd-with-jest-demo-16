const { isInterestingItem } = require('./item');

const interest = 'React'

const itemWithoutOurTopic = {
  group: {
    group_topics: [
      { topic_name: 'Redux' },
      { topic_name: 'Express' },
      { topic_name: 'Jest' },
    ]
  }
}

const itemWithOurTopic = {
  group: {
    group_topics: [
      { topic_name: 'React' },
      { topic_name: 'Redux' },
      { topic_name: 'Express' },
      { topic_name: 'Jest' },
    ]
  }
}

describe('isInterestingItem', () => {
  test('it returns false if the item does not have the topic we want', () => {
    expect(isInterestingItem(itemWithoutOurTopic, interest)).toBe(false)
  })

  test('it returns true if the item does have the topic we want', () => {
    expect(isInterestingItem(itemWithOurTopic, interest)).toBe(true)
  })
})
