const Wallet = require('ethereumjs-wallet');

let walletNCCU = Wallet.generate("nccu")

console.log(walletNCCU.toV3String("nccu"))