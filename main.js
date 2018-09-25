const { app, BrowserWindow, ipcMain } = require('electron')
const kill = require('tree-kill')
const childProcess = require('child_process')

let mainWindow = null
let server = null

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 700,
    height: 500,
    resizable: false,
    autoHideMenuBar: true,
    title: 'Theory Of Chances',
    show: false
    // frame: false
  })

  mainWindow.loadURL(`file://${__dirname}/view/splash-screen/splash-screen.html`)

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.show()
  })

  try {
    console.log('Connecting to server')
    server = childProcess.fork(
      require.resolve('./backend/index'),
      [
        '--documents', app.getPath('documents')
      ]
    )
    server.on('exit', () => {
      console.log('Server closing')
      process.exit(0)
    })
    server.on('error', err => {
      console.log('Server error', JSON.stringify(err))
    })
  } catch (err) {
    console.log('Connection to server error', JSON.stringify(err))
  }
})

app.on('before-quit', () => {
  console.log('Electron closed!')
  process.kill(server.pid, 'SIGKILL')
  kill(server.pid, 'SIGKILL', err => {
    if (err) {
      console.log(`Error killing PID process ${server.pid}`, err)
    } else {
      process.exit(0)
      console.log('Successfully killed all child process')
    }
  })
})