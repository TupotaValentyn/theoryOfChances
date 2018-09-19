const electron = (window).require('electron')

setTimeout(() => {
  electron.ipcRenderer.send('LOADED')
}, 5000)