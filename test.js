var tokenEthRate = 0.00036;
var etherscanApiKey = 'api-here';

var fs = require('fs');
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));

var api = require('etherscan-api').init(etherscanApiKey);

web3.eth.defaultAccount = '0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775';
var abiArray = JSON.parse(fs.readFileSync('ebet.json', 'utf-8'));
var contractAddress = "0x7D5Edcd23dAa3fB94317D32aE253eE1Af08Ba14d";
//var contract = new web3.eth.Contract(abiArray);
function lala(){
var array = fs.readFileSync('tx.csv').toString().split("\n");
var highBlock = 0;
for(i in array) {
    if(parseInt(array[i]) > highBlock){
highBlock = parseInt(array[i]);
}
}
var txlist = api.account.txlist('0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775', highBlock + 1);
txlist.then(function(txData){
e = txData['result'];
//console.log(e[i]['blockNumber']);
fs.readFile("tx.csv", function (err, data) {
for (var i = 0; i < e.length; i++){
//var count = web3.eth.getTransactionCount("0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775");
console.log(i);
  if (err) throw err;
fs.appendFile("tx.csv", e[i]['blockNumber'] + "\n", function(err) {
    if(err) {
        return console.log(err);
    }
}); 

if (e[i]['from'].toString() != '0xfaf2b0ca3a3c9aa991f7d182d99c77df8b3fc775'){
var contributorAdd = e[i]['from'];
web3.personal.unlockAccount("0xfaf2b0ca3a3c9aa991f7d182d99c77df8b3fc775","w0rdp4ss");


estGas = web3.eth.estimateGas({from: "0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775", to: contributorAdd, data:web3.eth.contract(abiArray).at(contractAddress).transfer.getData(contributorAdd, (parseFloat(e[i]['value']) / 0.00036), {from: "0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775"})});
console.log(estGas);
web3.eth.sendTransaction({from: "0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775", to: contributorAdd, data:web3.eth.contract(abiArray).at(contractAddress).transfer.getData(contributorAdd, (parseFloat(e[i]['value']) / tokenEthRate), {from: "0xFaF2B0cA3A3C9AA991f7d182d99C77DF8b3fC775"})}, function (err, data){

if (!err){
console.log(data);
}
else{
console.log(err);
}
});


    }
}
});
});
}
lala();
setInterval(lala, 5000);/*
}

/*
*/
