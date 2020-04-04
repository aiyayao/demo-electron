var electron = require('electron');
var BrowserView = electron.BrowserView;
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

require('./main/menu.js');


app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: '800px',
    height: '600px',
    webPreferences: {nodeIntegration: true}
  });
  let view = new BrowserView();
  mainWindow.setBrowserView(view);
  view.setBounds({x:0,y:200,width:800, height:300});
  view.webContents.loadURL('https://lishuaishuai.com')
  mainWindow.loadFile('demo04.html');

  app.on('closed', () => {
    mainWindow = null;
  });
});