const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const MysticGardenNFT = await hre.ethers.getContractFactory("MysticGardenNFT");

  const mysticGardenNft = await MysticGardenNFT.attach(process.env.CONTRACT_ADDRESS);
  const balance = (
    await mysticGardenNft.balanceOf(process.env.WALLET_ADDRESS)
  ).toString();

  console.log("Balance: ", balance);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});