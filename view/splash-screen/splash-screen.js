const { dialog } = require('electron').remote
const axios = require('axios')
const $ = require('jquery')

const { config } = require('../../backend/constants')
const { getRandomInt } = require('../../backend/helpers')

const { renderMenuPage, loadTopicsList } = require('../menu-page/menu-page')
const { renderTopicsPage } = require('../topics-page/topics-page')

const body = $('body')
const progressInner = $('.progress-inner')

let progress = 0
let progressInterval = null
const maxProgress = getRandomInt(50, 90)

let topics = null

const checkServer = async () => {
  try {
    const response = await axios.get(`http://${config.ip}:${config.port}/topics`)
    topics = response.data.topics
    finishLoadingProcess()
  } catch (e) {
    console.log('Receiving topics error', e)
  }
}

const startLoadingProgress = () => {
  progressInterval = setInterval(updateProgressbar, 500)
}

const updateProgressbar = () => {
  if (progress < maxProgress) {
    progress++
    updateLine()
  } else {
    clearInterval(progressInterval)
  }
}

const finishLoadingProcess = () => {
  progress = 100
  progressInner.animate({
    width: `${progress}%`
  }, 1500, () => {
    setTimeout(() => {
      body.animate({
        opacity: 0
      }, 500, () => {
        renderMenuPage()
      })
    }, 1000)
  })
}

const updateLine = () => {
  progressInner.animate({
    width: `${progress}%`
  }, 500)
}

// Topics page
const loadTopics = async (e) => {
  if (!topics.length) {
    dialog.showErrorBox('Theory of Chance', 'No such topics :(')
    return
  }
  await loadTopicsList(e)
  renderTopicsPage(topics)
}

// Single topic page
const openTopicPage = id => {
  const topic = topics.filter(topic => topic.id === id)[0]
  console.log(topic)
}

startLoadingProgress()
checkServer()
