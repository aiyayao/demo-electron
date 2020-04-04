const { Menu, BrowserWindow } = require('electron');

let template = [
  {
    label: 'new window',
    submenu: [
      {
        label: 'window1',
        accelerator: process.platform === 'darwin' ? 'cmd+n' : 'ctrl+n',
        click: () => {
          win = new BrowserWindow({
            width:800,
            height:600,
            webPreferences:{ nodeIntegration:true}
          });
          win.loadFile('newWindow.html');
          win.on('closed', () => {
            win = null;
          });
        }
      },
      {
        label: 'window2',
      }
    ]
  }
];

let m = Menu.buildFromTemplate(template);
Menu.setApplicationMenu(m);