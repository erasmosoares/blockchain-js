const http = require('http');
const Blockchain = require('./modules/blockchain');
const Block = require('./modules/block')

let blockchain = new Blockchain();


blockchain.addBlock(new Block(1,"12/11/2018",{name: 'Erasmo', amount:40}));
blockchain.addBlock(new Block(2,"13/11/2018",{name: 'PC', amount:50}));

console.log(`Is blockchain valid: ${blockchain.isChainValid()}`)

// test
//blockchain.chain[2].data = { amount: 100};
//console.log(`Is blockchain valid: ${blockchain.isChainValid()}`)

const server = http.createServer((req,res)=>{

    if(req.url ==='/api/coffeechain'){
        res.write(JSON.stringify(blockchain,null,4));
        res.end();
    }    
});

server.listen(3000);
console.log('Listening on port 3000...');