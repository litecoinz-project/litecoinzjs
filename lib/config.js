'use strict';

/*
config.js - Configuration for LitecoinZ Coin
*/

module.exports = {
  mainnet: {
    messagePrefix: 'LitecoinZ mainnet',
    bip32: {
      public: '0488b21e',
      private: '0488ade3'
    },
    pubKeyHash: '0ab3',
    scriptHash: '0ab8',
    zcPaymentAddressHash: '169a', // Private z-address
    zcSpendingKeyHash: '8964', // Spending key
    wif: '80'
  },
  testnet: {
    messagePrefix: 'LitecoinZ testnet',
    bip32: {
      public: '043587ce',
      private: '04358394'
    },
    pubKeyHash: '0ea4',
    scriptHash: '0ea9',
    zcPaymentAddressHash: '16b6', // Private z-address
    zcSpendingKeyHash: 'b1f8', // Spending key
    wif: 'ef'
  }
};