const { dialog } = require('electron').remote
const axios = require('axios')
const $ = require('jquery')

const { config } = require('../../backend/constants')
const { getRandomInt } = require('../../backend/helpers')

const { renderMenuPage, loadTopicsList } = require('../menu-page/menu-page')
const { renderTopicsPage } = require('../topics-page/topics-page')
const { renderSingleTopicPage } = require('../topic-single-page/topic-single-page')

const body = $('body')
const progressInner = $('.progress-inner')

let progress = 0
let progressInterval = null
const maxProgress = getRandomInt(50, 90)

let currentTopic = null

let topics = null

const checkServer = async () => {
  try {
    const response = await axios({
      method: 'GET',
      url: `http://${config.ip}:${config.port}/topics`
    })
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
1
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
  currentTopic = topics.find(topic => topic.id === id)
  renderSingleTopicPage(currentTopic)
}

const calculateValues = () => {
  let inputs = []
  currentTopic.inputs.forEach((input, index) => {
    inputs.push((document.querySelector(`#input${index}`)).value)
  })
  let inputsValues
  let topicCodeResult
  switch (currentTopic.id) {
    case 1:
      inputsValues = inputs.map(input => input.split(' '))
      topicCodeResult = require('../../backend/topicsCode/topic1').calculate(inputsValues)
      break
    default:
      return []
  }
  topicCodeResult.forEach((res, index) => {
    document.querySelector(`#formula-field-${index}`).innerText = res
  })
}

startLoadingProgress()
checkServer()
