const hre = require("hardhat");
require("dotenv").config();

async function main() {
  const MysticGardenNFTFactory = await hre.ethers.getContractFactory(
    "MysticGardenNFT"
  );
  const mysticGardenNft = await MysticGardenNFTFactory.attach(
    process.env.CONTRACT_ADDRESS
  );

  const mintTx = await mysticGardenNft.safeMint(5);
  await mintTx.wait();

  console.log(
    "Successfully minted: " +
      (await mysticGardenNft.balanceOf(process.env.WALLET_ADDRESS)) +
      " Mystic Garden NFTs to " +
      process.env.WALLET_ADDRESS
  );
  console.log(await mysticGardenNft.promptDescription());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});