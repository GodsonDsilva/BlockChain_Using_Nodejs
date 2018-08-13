let Block = require('./block')
let Transaction = require('./transaction')
let Blockchain = require('./blockchain')

// create genesis block
let genesisBlock = new Block()
let blockchain = new Blockchain(genesisBlock)

// create a transaction
let transaction = new Transaction('Mary','John',100)
let block = blockchain.getNextBlock([transaction])
blockchain.addBlock(block)

let anotherTransaction = new Transaction("Azam","Jerry",10)
let block1 = blockchain.getNextBlock([anotherTransaction,transaction])
blockchain.addBlock(block1)

console.log(blockchain);