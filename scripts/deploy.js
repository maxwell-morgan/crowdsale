async function main() {
	// Fetch contract to deploy
	const Token = await ethers.getContractFactory("Token_BBD")

	// Deploy contract
	const token = await Token.deploy('BigBollaDolla', 'BBD', '1000000')
	await token.deployed()
	console.log(`Token Deployed to: ${token.address}`)
  }
  
  // We recommend this pattern to be able to use async/await everywhere
  // and properly handle errors.
  main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
  