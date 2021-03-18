const fs = require('fs');
const crypto = require('crypto');
const { ipcRenderer } = require('electron');


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
            ipcRenderer.send('encryption', output);
            console.log('Encrypted file written to disk!');
        });
    }
