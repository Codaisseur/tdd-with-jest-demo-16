const topicNames = (item) => (
  item.group.group_topics.map(topic => topic.topic_name)
)

module.exports = topicNames
