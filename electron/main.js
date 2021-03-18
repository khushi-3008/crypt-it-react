// const Encrypt = require('../src/components/Encryption/Encrypt');
const { app, BrowserWindow, ipcMain } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require("fs");
const crypto = require("crypto");



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
    console.log(arg) ;
    var filename = arg.replace(/\\$/,'').split('\\').pop();
    console.log(filename);
    var path=encDir +'\\'+filename;
    console.log(path);
    Encrypt('hello',arg , path );
    console.log(arg) // prints "ping"
});

// ipcMain.on('encryption', (event, arg) => {
//     console.log('file written on disk!!');
// });
function Encrypt(key,inFilepPath,outFilePath){
    // Create an initialization vector
    this.key = key;
    this.algorithm = 'aes-256-ctr';
    this.key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
    this.iv = Buffer.from(crypto.createHash('sha256').update(String(this.key)).digest('base64')).slice(0,16);
    // Create a new cipher using the algorithm, key, and iv
    const cipher = crypto.createCipheriv(this.algorithm, this.key,this.iv);
    console.log(this.algorithm);
    console.log(this.key);
    var input = fs.createReadStream(inFilepPath);
    var output = fs.createWriteStream(outFilePath);
    input.pipe(cipher).pipe(output);
    output.on('finish', function() {
        // ipcRenderer.send('encryption', output);
        console.log('Encrypted file written to disk!');
    });
}


ipcMain.on('close', (event, arg) => {
    app.quit();
});