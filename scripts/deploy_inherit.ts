import { ethers } from "hardhat";

async function main() {

  const myContract = await ethers.deployContract("OwnDary");
  const accounts = await ethers.getSigners();
  console.log('MyContract deployed to address:', myContract);

  let second = accounts[2];
  console.log(`${second.address}`)
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
