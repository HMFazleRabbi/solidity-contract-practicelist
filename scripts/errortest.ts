import { ethers } from "hardhat";


async function main() {
  const [deployer, addr1, addr2] = await ethers.getSigners();

  console.log("Deploying MyContract with deployer address:", deployer.address);

  const MyContract = await ethers.deployContract("Voting");
  let contractAddress = MyContract.target;

  await MyContract.waitForDeployment();

  console.log("MyContract deployed to address:", contractAddress);

  try {
    // Call the vote function
    let tx = await MyContract.vote(true);

    // Wait for the transaction to be mined
    await tx.wait();

    tx = await MyContract.vote(true);

    // Wait for the transaction to be mined
    await tx.wait();

    // Transaction successful
    console.log("Transaction successful.");
  } catch (error: any) {
    if (error.message.includes("AlreadyVoted")) {
      console.error("Error: You have already voted.");
      console.error("Error:", error)
    } else {
      console.error("Error:", error.message);
    }
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
