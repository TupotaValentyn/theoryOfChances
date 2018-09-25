const app = require('./app')
const fs = require('fs')
const electron = require('electron')

const { config } = require('./constants')

app.listen(config.port, config.ip, () => {
  const defaultDir = `${config.defaultConfigPath}/TheoryOfChances`
  // Check if the default app folder and topics file is created
  if (!fs.existsSync(defaultDir)) {
    fs.mkdirSync(defaultDir)
  }

  if (!fs.existsSync(`${defaultDir}/topics.json`)) {
    let defaultTopics = fs.readFileSync(config.defaultTopicsPath, 'utf-8')
    fs.writeFileSync(`${defaultDir}/topics.json`, defaultTopics)
  }
  console.log('Server listening on port ->', config.port)
})