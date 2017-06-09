const electron = require('electron');

const { app, BrowserWindow } = electron;

let mainWindow;

app.on('ready', function() {
    // crea una MainWindow
    mainWindow = new BrowserWindow({});

    mainWindow.loadURL(`file://${__dirname}/index.html`);
}); 