const { app, BrowserWindow } = require('electron');

function createWindow () {
  // Create the browser window.
  //let win = new BrowserWindow({parent: top, modal: true, show: false});

  let win = new BrowserWindow({show: false, width:1024, height:768});
  win.loadFile('index.html');
  win.once('ready-to-show', () => {
    // and load the index.html of the app.
    win.setMenu(null);
    win.show();

  });
}

app.on('ready', createWindow);
