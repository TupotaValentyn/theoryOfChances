const { changeExistingCss, changeExistHtml } = require('../re-rendering-functions')
const { renderMenuCSS } = require('./render-menu-css')
const { renderMenuHTML } = require('./render-menu-html')

const loadTopicsList = async (e) => {
  const button = e.target;
  await destroyButton(button)
}

const destroyButton = (button) => {
  return new Promise(resolve => {
    button.style.animation = 'button-destroyer .25s linear'
    setTimeout(() => {
      resolve()
    }, 250)
  })
}

const renderMenuPage = () => {
  changeExistingCss(renderMenuCSS())
  changeExistHtml(renderMenuHTML())
}

module.exports.loadTopicsList = loadTopicsList
module.exports.renderMenuPage = renderMenuPage