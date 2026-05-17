const { app, BrowserWindow } = require("electron");
const path = require("path");

/* Allows real-time changes to appear */
require('electron-reload')(__dirname, {
  electron: require('path').join(__dirname, 'node_modules', '.bin', 'electron')
});

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 500,
    useContentSize: true,
    resizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false, 
    transparent: true,
    webPreferences: {
      contextIsolation: true
    }
  });

  win.loadFile("index.html");
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});