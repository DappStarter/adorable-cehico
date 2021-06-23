require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture casino symptom security chat crater remain hole half enrich swift general'; 
let testAccounts = [
"0x673e31e2cd7c528ee7a91fbb7ca64edc2549f99f0d09d2086489dbde3b5954cb",
"0x23e3d68e6dd20413c6944876a6664d0628a9345dfcebeb358cb8fc50eca3ea1a",
"0x3ae1a0eca67af26d56766d4dacd710d0a8e3cf012285c9aed69ee30ef723aebe",
"0x1800efe8b1041dbf60fcde2f71db36b06c22bce1d73999333f3db1e6735e4fb3",
"0x5bf69ba6430ad9b5582a02f898f57cfeb8189173874e5a7c8ea2a355e4b0bbbc",
"0x6ae3dd37085941ed938bf24539c94db7ab216db59dc18368e31fadd5e016b1af",
"0xfee991bf1bbe0f6ef9dac25cf7c6530d4f95b19636464eba0e80196b2a61b075",
"0x1d50a359faf15a1fb87031f0d098534a6921503c53f3f205c50d5f9a3df58bb3",
"0xedf805e2643a08827dc0e80bb5f91888e06219ed29fe5be38728a72a438fcefd",
"0xdecb262a756a09dff9313e5332c941f95f173722b77c3ac6ed26cb41358ddad9"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

