const express = require('express')
const app = express();
const Web3 = require('web3');
const web3 = new Web3('http://localhost:8545');

 //   console.log(Web3.providers);
//    var web3 = new Web3(Web3.givenProvider || "ws://localhost:8546");
    


app.get('/', (req, res) => {
       res.sendFile(__dirname + '/public_html/index.html');
         })


app.get('/ajax-request', (req, res) => {
//    res.send('Hey AJAX')
    web3.eth.getAccounts(function(error, addresses){
        if(error == null) res.send(JSON.stringify(addresses))
//        res.send(JSON.stringify(test))
        //   console.log(JSON.stringify(test));
    })
})

app.listen(3333);
