const renderMenuHTML = () => {
  return `
    <div class="container">
      <button id="load-topics" onclick="loadTopics(event)">Load topics</button>
    </div>
  `
}

module.exports.renderMenuHTML = renderMenuHTML