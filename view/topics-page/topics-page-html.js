const renderTopicsHTML = (topics) => {
  let topicsList = ''
  topics.forEach((topic, index) => {
    topicsList += `
      <div class="topic" id="topic${topic.id}" style="animation: show-topics ${index / 10}s linear">
        <h3>${topic.title.indexOf('Topic') !== -1 ? topic.title + '<br>(Soon...)' : topic.title}</h3>
      </div>
    `
  })
  return topicsList
}