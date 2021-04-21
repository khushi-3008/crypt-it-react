const { app, BrowserWindow, ipcMain, ipcRenderer } = require('electron');
const isDev = require('electron-is-dev');
const path = require('path');
const fs = require('fs');
const crypto = require("crypto");
const { shell } = require('electron');
let mainWindow;
const { Notification } = require('electron')

function showNotification() {
    const notification = {
        title: 'Welcome to Crypt-It',
        body: 'Get started with it and keep your files safe!'
    }
    new Notification(notification).show()
}

app.whenReady().then(showNotification);

function encryptNotification() {
    const notification = {
        title: 'Encryption Completed',
        body: 'Your file has been encrypted successfully!!'
    }
    new Notification(notification).show()
}

function decryptNotification(outFilePath) {
    const notification = {
        title: 'Decryption Competed',
        body: 'Your file has been decrypted successfully and has been stored to ' + outFilePath
    }
    new Notification(notification).show()
}

function createWindow() {
    mainWindow = new BrowserWindow({
        title: "CRYPT-IT",
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
    mainWindow.setIcon(path.join(__dirname, '../public/favicon.ico'));
    mainWindow.maximize();
    mainWindow.once('ready-to-show', () => mainWindow.show());
    mainWindow.on('closed', () => {
        try {
            fs.rmdirSync(viewDir, { recursive: true });

            console.log(`${viewDir} is deleted!`);
        } catch (err) {
            console.error(`Error while deleting ${viewDir}.`);
        }
        mainWindow = null;
    });
}

//encryption..
const appdatapath = process.env['LOCALAPPDATA'];
const cryptitHome = appdatapath + '\\crypt-it';
const encDir = appdatapath + '\\crypt-it\\enc';
const viewDir = appdatapath + '\\crypt-it\\view';
const pwdDir = appdatapath + '\\crypt-it\\info';

if (!fs.existsSync(cryptitHome)) {
    fs.mkdirSync(cryptitHome);
    fs.mkdirSync(encDir);
    fs.mkdirSync(viewDir);
    fs.mkdirSync(pwdDir);

} else {
    if (!fs.existsSync(encDir)) {
        fs.mkdirSync(encDir);
    }
    if (!fs.existsSync(viewDir)) {
        fs.mkdirSync(viewDir);
    }
    if (!fs.existsSync(pwdDir)) {
        fs.mkdirSync(pwdDir);
    }
}

app.on('ready', createWindow);

const encFolder = appdatapath + '\\crypt-it\\enc\\'
let Files = new Array();
ipcMain.on('get-files', (event, arg) => {
    try {
        const files = fs.readdirSync(encFolder);
        mainWindow.webContents.send('encfiles', files);
    }
    catch (Err) {
        mainWindow.webContents.send('encfiles', "Dir Read Error!");
    }
})

ipcMain.on('encrypt', (event, arg) => {
    if (arg === undefined) {
        return;
    } else {
        var filename = arg.replace(/\\$/, '').split('\\').pop();
        var path = encDir + '\\' + filename;
        Encrypt('hello', arg, path);
        // console.log(arg) // prints "ping"
    }

});

function Encrypt(key, inFilePath, outFilePath) {
    outFilePath = `${outFilePath}.enc`
    // Create an initialization vector
    this.key = key;
    this.algorithm = 'aes-256-ctr';
    this.key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
    this.iv = Buffer.from(crypto.createHash('sha256').update(String(this.key)).digest('base64')).slice(0, 16);
    // Create a new cipher using the algorithm, key, and iv
    const cipher = crypto.createCipheriv(this.algorithm, this.key, this.iv);
    var input = fs.createReadStream(inFilePath);
    var output = fs.createWriteStream(outFilePath);
    input.pipe(cipher).pipe(output);
    output.on('finish', function () {
        // ipcRenderer.send('encryption', output);
        console.log('Encrypted file written to disk!');
        encryptNotification();
    });
    fs.unlinkSync(inFilePath, (err) => {
        if (err) throw err;
        console.log(inFilePath + ' deleted');
    });
}

//Decryption..
ipcMain.on('decrypt', (event, arg, arg1) => {
    if (arg === undefined) {
        return;
    } else {
        arg = arg + "\\" + arg1;
        // var filename = arg.replace(/\\$/, '').split('\\').pop();
        var path = encFolder + '\\' + `${arg1}.enc`;
        Decrypt('hello', path, arg);
        // console.log(arg) // prints "ping"
    }

});

function Decrypt(key, inFilePath, outFilePath) {

    //Creating cipher key
    this.key = key;
    this.algorithm = 'aes-256-ctr';
    this.key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
    this.iv = Buffer.from(crypto.createHash('sha256').update(String(this.key)).digest('base64')).slice(0, 16);

    //decryption process
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
    console.log(this.algorithm);
    console.log(this.key);
    var input = fs.createReadStream(inFilePath);
    var output = fs.createWriteStream(outFilePath);

    // window.location.reload();
    input.pipe(decipher).pipe(output);
    output.on('finish', function () {
        console.log(outFilePath);
        console.log('Decrypted file written to disk!');
        decryptNotification(outFilePath);
    });

    // fs.unlinkSync(inFilepPath);
    fs.unlinkSync(inFilePath, (err) => {
        if (err) throw err;
        console.log(inFilePath + ' deleted');
    });
}


// View Decryption..
ipcMain.on('viewdecrypt', (event, arg1) => {

    var arg = viewDir + '\\' + arg1;
    // var filename = arg.replace(/\\$/, '').split('\\').pop();
    var path = encFolder + '\\' + `${arg1}.enc`;
    viewDecrypt('hello', path, arg);
    // console.log(arg) // prints "ping"


});

function viewDecrypt(key, inFilePath, outFilePath) {

    //Creating cipher key
    this.key = key;
    this.algorithm = 'aes-256-ctr';
    this.key = crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
    this.iv = Buffer.from(crypto.createHash('sha256').update(String(this.key)).digest('base64')).slice(0, 16);

    //decryption process
    const decipher = crypto.createDecipheriv(this.algorithm, this.key, this.iv)
    console.log(this.algorithm);
    console.log(this.key);
    var input = fs.createReadStream(inFilePath);
    var output = fs.createWriteStream(outFilePath);

    // window.location.reload();
    input.pipe(decipher).pipe(output);
    output.on('finish', function () {
        console.log(outFilePath);
        console.log('Decrypted file written to disk!');
    });

    shell.openPath(outFilePath);
    // del(outFilePath);

}

ipcMain.on('validate-password', (event, arg) => {
    try {
        const pwdsDir = appdatapath + '\\crypt-it\\info\\info.txt';
        fs.readFile(pwdsDir, 'utf-8', (err, data) => {
            if(err){
                alert("An error ocurred reading the file :" + err.message);
                return;
            }
            else{
                console.log("The file content is : " + data);
                mainWindow.webContents.send('validation', data);
            }
        });
    }
    catch (Err) {
        mainWindow.webContents.send('validation', "Dir Read Error!");
    }
})

ipcMain.on('password',(event,arg)=>{

    var hash = crypto.getHashes();
    var hashPwd = crypto.createHash('sha256').update(arg).digest('hex');
    console.log(hashPwd);
    fs.appendFile(pwdDir+'\\info.txt', hashPwd , function (err) {
        if (err) throw err;
        console.log('Saved!');
      });

})

ipcMain.on('close', (event, arg) => {
    app.quit();
});