var http = require('http');
const driver = require('bigchaindb-driver')

http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' });
    if (typeof keySeed == "undefined" || keySeed == "") return new driver.Ed25519Keypair();
    var code =  new driver.Ed25519Keypair(bip39.mnemonicToSeed("rshetty47@gmail.com").slice(0, 32));
    res.write("The date and time are currently: "+code );
    res.end();
}).listen(8080);
