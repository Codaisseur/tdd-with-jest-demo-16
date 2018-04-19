const { topicNames } = require('./topics');

module.exports.isInterestingItem = (item, interest) => (
  topicNames(item).includes(interest)
)
