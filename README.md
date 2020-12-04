If you found this repo useful, consider clicking the sponsor button near the top :) Sponsoring via GitHub is as little as $1/month and if you do not use banks or credit cards, there are crypto links included :)<br /><br />
# NodeAutoReimbuseTx

This script builds on the MNE Token Creation Service: http://tokenservice.minereum.com/. Now, after you have your tokens, you can use this node script (along with geth (synced!) and solc on local machine (recommend Ubuntu)).

1. Replace tokenEthRate in test.js with your token/eth rate. It's currently set to ~$1.00 USD a/o date of publishing.
2. Enter in your EtherScan API key in the provided field in the same file.
3. Create your MNE tokens, visit EtherScan and hit 'Read Smart Contract,' copy your ABI JSON.
4. Replace the contents of contract.json with this information.
5. Place the hex version of your private key for the address holding the token's string inside key.prv, and run geth account import key.prv.
6. Replace tokenAddress in that same above file with the address holding (and disbursing) tokens.
7. Run geth --rpc --rpcaddr="0.0.0.0" --rpccorsdomain="*" --rpcapi="db,eth,net,web3,personal,web3" 
8. Run node test.js
9. Now, every 5 seconds the script will check for new tx since the last tx it processed (by block height saved in tx.csv). If it finds one coming IN from an address with Eth value, it will send a proportional value tokens back to that address.
