const hre = require("hardhat");

async function main() {
  const MysticGardenNFT = await hre.ethers.getContractFactory("MysticGardenNFT");

  const mysticGardenNft = await MysticGardenNFT.deploy();

  console.log("Mystic Garden NFTs deployed to: ", mysticGardenNft.target);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});