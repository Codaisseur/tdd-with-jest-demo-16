const topicNames = (item) => (
  item.group.group_topics.map(topic => topic.topic_name)
)

const updateCounters = (currentCounters, item) => {
  const counters = { ...currentCounters }

  topicNames(item).forEach(name => {
    if (counters[name]) {
      counters[name]++
    } else {
      counters[name] = 1
    }
  })

  return counters
}

const top10 = (counters) => {
  return Object.keys(counters)
    .sort((topicA, topicB) => (counters[topicB] - counters[topicA]))
    .map(topic => ({ topic, count: counters[topic] }))
    .slice(0, 10);
}

module.exports = {
  topicNames,
  updateCounters,
  top10,
}
