const renderTopicsHTML = (topics) => {
  return `
    <div class="container">
      ${renderTopicsList(topics)}
    </div>
  `
}

const renderTopicsList = (topics) => {
  let topicsList = ''
  topics  = mockFakeTopics(topics)
  topics.forEach((topic, index) => {
    topicsList += `
      <div class="topic" id="topic${topic.id}" style="animation: show-topics ${index / 10}s linear" onclick="${ topic.id !== 'test' ? `openTopicPage(${topic.id})` : 'return false' }">
        <h3>${topic.name !== 'test' ? topic.name : `Topic ${index + 1}<br>(soon...)`}</h3>
      </div>
    `
  })
  return topicsList
}

const mockFakeTopics = (topics) => {
  if (topics.length < 9) {
    const def = 9 - topics.length
    for (let i = 0; i < def; i++) {
      topics.push({ id: 'test', name: 'test' })
    }
  }
  return topics
}

module.exports.renderTopicsHTML = renderTopicsHTML