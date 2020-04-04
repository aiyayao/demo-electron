const BrowserWindow = require('electron').remote.BrowserWindow;

window.onload = function() {
  const btnAddWin = this.document.querySelector('#add_win');
  btnAddWin.onclick = () => {
    let newWindow = new BrowserWindow({
      width: 800,
      height: 600,
      webPreferences:{ nodeIntegration:true}
    })
    newWindow.loadFile('newWindow.html');
    newWindow.on('closed', () => {
      newWindow = null;
    });
  }
}