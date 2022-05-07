const Web3 = require('web3')
const fs = require('fs')

const web3 = new Web3('http://localhost:8545')

/* fs.readFile('src/utils/contracts/simple.sol', function(err, res) {
    const source = res.toString()
    console.log(web3.eth)
}) */

console.log(web3.version)