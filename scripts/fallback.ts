
import { ethers } from "hardhat";

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();

  console.log('Deploying MyContract with deployer address:', deployer.address);

  let n:number = 25;
  const MyContract = await ethers.deployContract('Bottle', [n],);
  let contractAddress = MyContract.target

  await MyContract.waitForDeployment();

  console.log('MyContract deployed to address:', contractAddress);
    let result = await MyContract.n();
    console.log(result);

    const CallerContract = await ethers.deployContract('Caller');

    // let r2 = await CallerContract.callBottle(MyContract);
    // result = await MyContract.n();
    // console.log(result);

    let r3 = await CallerContract.callBottlePayable(MyContract);
    let result2 = await MyContract.n();
    console.log(result2);
}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
