import "@nomicfoundation/hardhat-toolbox";
import "dotenv/config";
import "./tasks/block-number";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "@typechain/hardhat"

const RPC = process.env.RPC_URL_SEPOLIA;
const KEY = process.env.PRIVATE_KEY;
const API_KEY = process.env.ETHERSCAN_API;
const COINMARKET_API = process.env.COINMARKET_API_KEY;

export default {
  defaultNetwork: "hardhat",
  networks: {
    ETH_SEPOLIA: {
      url: RPC,
      accounts: [KEY],
      chainId: 11155111
    }
  },
  solidity: "0.8.7",
  etherscan: {
    apiKey: API_KEY,
  },
  gasReporter: {
    enabled: true,
    outputFile: "gas-report.txt",
    noColors: true,
    currency: "USD",
    coinmarketcap: COINMARKET_API,
    token: "ETH",
    gasPriceApi: `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${API_KEY}`
  }
};



// import "@nomicfoundation/hardhat-toolbox"
// import "dotenv/config"
// import "./tasks/block-number"
// import "hardhat-gas-reporter"
// import "solidity-coverage"
// import "@nomiclabs/hardhat-ethers"
// import "@nomiclabs/hardhat-etherscan"

// const RPC = process.env.RPC_URL_SEPOLIA;
// const KEY = process.env.PRIVATE_KEY;
// const API_KEY = process.env.ETHERSCAN_API;
// const COINMARKET_API = process.env.COINMARKET_API_KEY;

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   defaultNetwork: "hardhat",
//   networks: {
//     ETH_SEPOLIA: {
//       url: RPC,
//       accounts: [KEY],
//       chainId: 11155111
//     }
//   },
//   solidity: "0.8.7",
//   etherscan: {
//     apiKey: API_KEY,
//   },
//   gasReporter: {
//     enabled: true,
//     outputFile: "gas-report.txt",
//     noColors: true,
//     currency: "USD",
//     coinmarketcap: COINMARKET_API,
//     token: "ETH",
//     gasPriceApi: `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${API_KEY}`
//   }
// };




// import "@nomicfoundation/hardhat-toolbox"
// import "dotenv/config"
// import "./tasks/block-number"
// import "hardhat-gas-reporter"
// import "solidity-coverage"
// import "@nomiclabs/hardhat-ethers"
// import "@nomiclabs/hardhat-etherscan"

// RPC = process.env.RPC_URL_SEPOLIA 
// KEY = process.env.PRIVATE_KEY
// API_KEY = process.env.ETHERSCAN_API
// COINMARKET_API = process.env.COINMARKET_API_KEY

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
// defaultNetwork: "hardhat",
// networks: {

//   ETH_SEPOLIA:{

// url: RPC,
// accounts: [KEY],
// chainId: 11155111

//   },             


// },
//   solidity: "0.8.7",
//   etherscan:{
//     apiKey: API_KEY,
//   },
//   gasReporter:{
//     enabled:true,
//     outputFile: "gas-report.txt",
//     noColors: true,
//     currency:"USD",
//     coinmarketcap:COINMARKET_API,
//     token: "ETH", 
//     gasPriceApi: `https://api.etherscan.io/api?module=proxy&action=eth_gasPrice&apikey=${API_KEY}`
    

//   },       
// };
