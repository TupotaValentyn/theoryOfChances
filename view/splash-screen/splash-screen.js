const axios = require('axios')
const $ = require('jquery')

const { config } = require('../../backend/constants')
const { getRandomInt } = require('../../backend/helpers')

const { renderMenuPage } = require('../menu-page/menu-page')

const body = $('body')
const progressInner = $('.progress-inner')

let progress = 0
let progressInterval = null
const maxProgress = getRandomInt(50, 90)

const checkServer = async () => {
  try {
    const topics = await axios.get(`http://${config.ip}:${config.port}/topics`)
    console.log('Topics', topics)
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
  }, 1000, () => {
    // body.css({ opacity: 0 })
    body.animate({
      opacity: 0
    }, 500, () => {
      renderMenuPage()
    })
  })
}

const updateLine = () => {
  progressInner.animate({
    width: `${progress}%`
  }, 500)
}

startLoadingProgress()
checkServer()
