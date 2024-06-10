const hre = require("hardhat");

async function main() {

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contracts with the account:", deployer.address);

  // Deploy the contract
  const Properties = await hre.ethers.getContractFactory("Properties");
  const properties = await Properties.deploy(); // No parameters needed

  await properties.deployed();
  console.log("Property deployed to:", properties.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
      console.error(error);
      process.exit(1);
  });


  // 0x5FbDB2315678afecb367f032d93F642f64180aa3