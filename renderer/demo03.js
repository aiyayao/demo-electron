const { shell } = require('electron');

let browserOpenLink = document.querySelector('#browserOpenLink');

browserOpenLink.onclick = function(e) {
  e.preventDefault();
  let href = this.getAttribute('href');
  shell.openExternal(href);
}

let mybtn = document.querySelector('#mybtn');

mybtn.onclick = function(e){
  window.open('https://lishuaishuai.com');
}