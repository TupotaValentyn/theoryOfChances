const { changeExistingCss, changeExistHtml } = require('../re-rendering-functions')
const { renderMenuCSS } = require('./render-menu-css')
const { renderMenuHTML } = require('./render-menu-html')

const container = document.querySelector('.container')
let stage = 'menu'

const loadTopics = (e) => {
  const button = e.target;
  destroyButton(button)
    .then(() => {
      if (!topics.length) {
        // TODO Make popup windows with error message
        alert('There is no topics saved :(')
        return
      }
      stage = 'topics'
      container.innerHTML = renderTopics()
    })
}

const destroyButton = (button) => {
  return new Promise(resolve => {
    button.style.animation = 'button-destroyer .25s linear'
    setTimeout(() => {
      container.style.justifyContent = 'flex-start'
      container.style.alignItems = 'flex-start'
      resolve()
    }, 250)
  })
}

const renderTopics = () => {
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

const renderMenuPage = () => {
  changeExistingCss(renderMenuCSS())
  changeExistHtml(renderMenuHTML())
}

module.exports.renderMenuPage = renderMenuPage