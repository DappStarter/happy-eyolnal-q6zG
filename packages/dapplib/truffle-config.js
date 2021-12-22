require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'half argue bright venture stone royal sad miss gesture ghost army genre'; 
let testAccounts = [
"0xd6530d2e409277dca1fe9110cb8477fc306bae0c4ad876dcba26e837b2fac826",
"0x236806995e13e08b89f48543e716667bab0d35bc62ea986a60872a4430d805bf",
"0x719e1342edc0a8a084300ccb948821b62d71c883f76991b2fa0996ee3bfae3c0",
"0x31efcaaab173aa596d5b1756d393fd0de7bfb047b184af75fa9ca01573d662a4",
"0xb28f3a0a968aadc1aa1fc562724a4cfe9748e3e21d7903fb992f4ddec9cb54d7",
"0xcf42ffebf88fee28600dc6e1082fec7de22e190b8dc6d2fa76c5de96c0a973d6",
"0x876ee603a5bcd8a43bfe082200abbb55ce7335bd4d502c89cecba8337878067f",
"0xc61cc0ca5d7092d55fc5b6ed7931e9836f581aa65e9bb6383e96a01771e200bc",
"0xc872b77f1c1811d2ba27ba56013dc222f5bd05496bb87397500952e1d06a890e",
"0x4482bfbcd43f06108c627479fb9073f497b115143c16a4a9364adb268352c1ff"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


