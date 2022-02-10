async function main() {
    const BoxV2 = await ethers.getContractFactory("BoxV2")
    let box = await upgrades.upgradeProxy("CONTRACT_ADDRESS", BoxV2)
    console.log("Your upgraded proxy is done!", box.address)
}

main()
    .then(() => process.exit(0))
    .catch(error => {
        console.error(error)
        process.exit(1)
    })