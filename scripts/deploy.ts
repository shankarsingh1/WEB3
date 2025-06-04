import { ethers, run, network } from "hardhat";

async function main() {
  const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
  console.log("Deploying contract...");

  const simpleStorage = await SimpleStorageFactory.deploy();
  
  // Use .target instead of getAddress() for better type safety
  const address = await simpleStorage.getAddress();
  console.log("SimpleStorage deployed to:", address);

  if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API) {
    console.log("Waiting for 6 block confirmations...");
    
    // Add null check for deployment transaction
    const deploymentTx = simpleStorage.deploymentTransaction();
    if (!deploymentTx) {
      throw new Error("Deployment transaction not found");
    }

    await deploymentTx.wait(6);

    // Add explicit type conversion for address
    await verify(address.toString(), []);
  }

  const currentValue = await simpleStorage.retrieve();
  console.log(`Current Value is: ${currentValue}`);

  const transactionResponse = await simpleStorage.store(7);
  await transactionResponse.wait(1);
  const updatedValue = await simpleStorage.retrieve();
  console.log(`Updated Value is: ${updatedValue}`);
}

async function verify(contractAddress: string, args: any[]) {
  console.log("Verifying contract...");
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    });
    console.log("Contract verified!");
  } catch (e: any) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.error("Verification failed:", e);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });




// import { ethers, run, network } from "hardhat";

// async function main() {
//   // Get the ContractFactory for "SimpleStorage"
//   const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
//   console.log("Deploying contract...");

//   // Deploy the contract
//   const simpleStorage = await SimpleStorageFactory.deploy();

//   // No need to await deployment in ethers v6

//   const address = await simpleStorage.getAddress();
//   console.log("SimpleStorage deployed to:", address);

// //   console.log(network.config);

//   // Verify on Etherscan if on Sepolia and API key is set
//   if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API) {
//     console.log("Waiting for 6 block confirmations...");
//     await simpleStorage.deploymentTransaction().wait(6);

//     await verify(address, []);
//   }

//    const currentValue = await simpleStorage.retrieve()
//    console.log(`Current Value is: ${currentValue} `)

//    //updating current value

//    const transactionResponse = await simpleStorage.store(7)
//    await transactionResponse.wait(1)
//    const updatedValue = await simpleStorage.retrieve()
//    console.log(`updated Value is: ${updatedValue} `)
// }

// async function verify(contractAddress : string, args: any[]) {
//   console.log("Verifying contract...");
//   try { 
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     });
//     console.log("Contract verified!");
//   } catch (e:any) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already verified!");
//     } else {
//       console.error(e);
//     }
//   }
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   });













// const { ethers, run, network } = require("hardhat");

// async function main() {
//   const SimpleStorageFactory = await ethers.getContractFactory("SimpleStorage");
//   console.log("Deploying contract...");

//   // Deploy with explicit gas configuration
//   const simpleStorage = await SimpleStorageFactory.deploy();
//   const address = await simpleStorage.getAddress();
//   console.log("SimpleStorage deployed to:", address);

//   // Verification for Sepolia
//   if (network.config.chainId === 11155111 && process.env.ETHERSCAN_API_KEY) {
//     console.log("Waiting for 6 confirmations...");
//     await simpleStorage.deploymentTransaction().wait(6);
//     await verify(address, []);
//   }

//   // Contract interaction with proper error handling
//   try {
//     console.log("Testing contract interactions...");
    
//     // Initial value
//     const currentValue = await simpleStorage.retrieve();
//     console.log(`Current Value: ${currentValue}`);

//     // Update value with gas parameters
//     console.log("Updating value...");
//     const txResponse = await simpleStorage.store(7, {
//       gasPrice: await ethers.provider.getGasPrice(),
//       gasLimit: 100000
//     });
    
//     // Wait for 2 confirmations on live networks
//     const confirmations = network.config.live ? 2 : 1;
//     console.log(`Waiting for ${confirmations} confirmation(s)...`);
//     await txResponse.wait(confirmations);

//     // Updated value
//     const updatedValue = await simpleStorage.retrieve();
//     console.log(`Updated Value: ${updatedValue}`);
    
//   } catch (error) {
//     console.error("Interaction failed:", error.message);
//     if (error.info && error.info.error) {
//       console.error("RPC Error:", error.info.error.message);
//     }
//   }
// }

// async function verify(contractAddress, args) {
//   console.log("Verifying contract...");
//   try {
//     await run("verify:verify", {
//       address: contractAddress,
//       constructorArguments: args,
//     });
//   } catch (e) {
//     if (e.message.toLowerCase().includes("already verified")) {
//       console.log("Already verified!");
//     } else {
//       console.error("Verification failed:", e.message);
//     }
//   }
// }

// main()
//   .then(() => process.exit(0))
//   .catch((error) => {
//     console.error("Main error:", error);
//     process.exit(1);
//   });
