const { changeExistCss, changeExistHtml } = require('../re-rendering-functions')
const { renderSingleTopicHTML } = require('./topic-single-page-html')
const { renderSingleTopicCSS } = require('./topic-single-page-css')

const renderSingleTopicPage = topic => {
  changeExistHtml(renderSingleTopicHTML(topic))
  changeExistCss(renderSingleTopicCSS())
}

module.exports.renderSingleTopicPage = renderSingleTopicPage