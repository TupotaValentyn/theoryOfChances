const { changeExistCss, changeExistHtml } = require('../re-rendering-functions')
const { renderTopicsCSS } = require('./topics-page-css')
const { renderTopicsHTML } = require('./topics-page-html')

const renderTopicsPage = (topics) => {
  changeExistHtml(renderTopicsHTML(topics))
  changeExistCss(renderTopicsCSS())
}

module.exports.renderTopicsPage = renderTopicsPage