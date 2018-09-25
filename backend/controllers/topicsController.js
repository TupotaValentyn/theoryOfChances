const fs = require('fs')
const { config } = require('../constants')

const readTopics = () => {
  return new Promise((resolve, reject) => {
    try {
      const topics = JSON.parse(fs.readFileSync(`${config.defaultConfigPath}/TheoryOfChances/topics.json`, 'utf-8'))
      if (topics) {
        resolve(topics)
      } else {
        reject('No such topics!')
      }
    } catch (e) {
      reject(e)
    }
  })
}

module.exports.readTopics = readTopics