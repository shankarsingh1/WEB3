import { task } from "hardhat/config"

export default task("block-number", "prints the current block number").setAction(


async (taskArgs , hre) => {

    const blockNumber = await hre.ethers.provider.getBlockNumber()

    console.log(`current block-number : ${blockNumber}`)
}

)

