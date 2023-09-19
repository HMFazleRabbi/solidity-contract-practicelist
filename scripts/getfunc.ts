
import { ethers } from "hardhat";

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();

  console.log('Deploying MyContract with deployer address:', deployer.address);
  console.log('addr1:', addr1.address);

  const MyContract = await ethers.deployContract('GiftRegister');
  let contractAddress = MyContract.target

  await MyContract.waitForDeployment();


}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
