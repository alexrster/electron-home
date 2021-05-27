const { app, BrowserWindow } = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    fullscreen: true
  });

  win.loadURL("http://h.in.qx.zone/");
}

app.whenReady().then(() => {
  createWindow();
});

app.on('window-all-closed', function () {
  app.quit();
});
