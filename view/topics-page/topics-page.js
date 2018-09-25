const { changeExistingCss, changeExistHtml } = require('../re-rendering-functions')
const { renderTopicsCSS } = require('./topics-page-css')
const { renderTopicsHTML } = require('./topics-page-html')

const renderTopicsPage = (topics) => {
  changeExistHtml(renderTopicsHTML(topics))
  changeExistingCss(renderTopicsCSS())
}

module.exports.renderTopicsPage = renderTopicsPage