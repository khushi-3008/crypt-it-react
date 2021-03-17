const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require("fs");



let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "CRYPT-IT - File Vault!!",
        width: 800,
        height: 600,
        // fullscreen:true,
        // frame: false,
        autoHideMenuBar: true,
        webPreferences: {
            nodeIntegration: true,
            enableRemoteModule: true
        }
    });
    const startURL = isDev ? 'http://localhost:3000/' : `file://${path.join(__dirname, '../build/index.html')}`;

    mainWindow.loadURL(startURL);

    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

const appdatapath = process.env['LOCALAPPDATA'];
const cryptitHome = appdatapath + '\\crypt-it';
const encDir = appdatapath + '\\crypt-it\\enc';
if (!fs.existsSync(cryptitHome)) {
    fs.mkdirSync(cryptitHome);
    fs.mkdirSync(encDir);
} else {
    if (!fs.existsSync(encDir)) {
        fs.mkdirSync(encDir);
    }
}

app.on('ready', createWindow);

ipcMain.on('encrypt', (event, arg) => {
    //execute tasks on behalf of renderer process 
    console.log(arg) // prints "ping"
});

ipcMain.on('close', (event, arg) => {
    app.quit();
});