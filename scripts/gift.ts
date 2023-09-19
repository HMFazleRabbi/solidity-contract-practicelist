
import { ethers } from "hardhat";

async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();

  console.log('Deploying MyContract with deployer address:', deployer.address);
  console.log('addr1:', addr1.address);

  const MyContract = await ethers.deployContract('GiftRegister');
  let contractAddress = MyContract.target

  await MyContract.waitForDeployment();

  console.log('MyContract deployed to address:', contractAddress);

  // Transfer 50 tokens from addr1 to addr2
  await MyContract.connect(addr1).register(7);

  //Amt
  let amt = await MyContract.getRegisterInfo(addr1);
  console.log(`amt ${amt}`)

  // await MyContract.connect(addr1).Refund(addr1);
  await MyContract.Refund(addr1);
  amt = await MyContract.getRegisterInfo(addr1);
  console.log(`amt ${amt}`)

//   // Create an instance of your contract
//   const contract = new ethers.Contract(contractAddress,  accountToUse);

  // Call the contract function
//   const result = await MyContract.reloadMoney(10); // Replace 'functionName' with your actual function name

//   console.log('Function result:', result);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
