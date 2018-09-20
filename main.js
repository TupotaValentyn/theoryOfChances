const { app, BrowserWindow, ipcMain } = require('electron')

let mainWindow = null

ipcMain.on('LOADED', () => {
  mainWindow.loadURL(`file://${__dirname}/view/menu-page/menu-page.html`)
})

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
})