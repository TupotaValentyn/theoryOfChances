let defaultConfigPath = __dirname
if (process.argv.includes('--documents')) {
  defaultConfigPath = process.argv[process.argv.indexOf('--documents') + 1]
}

const config = {
  ip: '127.0.0.1',
  port: 3000,
  defaultConfigPath,
  defaultTopicsPath: './backend/default-topics.json'
}

module.exports.config = config
