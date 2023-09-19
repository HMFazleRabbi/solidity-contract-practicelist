
const { ethers, upgrades } = require('hardhat');

async function main() {
  const [deployer, accountToUse] = await ethers.getSigners();

  console.log('Deploying MyContract with deployer address:', deployer.address);
  console.log('accountToUse:', accountToUse.address);

  const MyContract = await ethers.deployContract('OwnDary');
  let contractAddress = MyContract.target

  await MyContract.waitForDeployment();

  console.log('MyContract deployed to address:', contractAddress);


//   // Create an instance of your contract
//   const contract = new ethers.Contract(contractAddress,  accountToUse);

  // Call the contract function
  const result = await MyContract.reloadMoney(10); // Replace 'functionName' with your actual function name

  console.log('Function result:', result);

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
