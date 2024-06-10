// // require("@nomicfoundation/hardhat-waffle");
// // const { ethers } = require("hardhat");
// require ("@nomiclabs/hardhat-ethers")
// require('dotenv').config();

// const { PRIVATE_KEY } = process.env;

// module.exports = {
//   solidity: "0.8.0",
//   networks: {
//     hardhat: {
//     },
//     "lisk-sepolia": {
//       url: `https://rpc.sepolia-api.lisk.com`,
//       accounts: [`0x${PRIVATE_KEY}`]
//     }
//   }
// };

// require("@nomicfoundation/hardhat-waffle");
// const { ethers } = require("hardhat");
require ("@nomiclabs/hardhat-ethers")
require('dotenv').config();

// const { PRIVATE_KEY } = process.env;

module.exports = {
  solidity: "0.8.0",
  networks: {
    hardhat: {},
    celo: {
      url: process.env.CELO_URL,
      acctounts: [`0x${process.env.PRIVATE_KEY}`],
    }
  },
};