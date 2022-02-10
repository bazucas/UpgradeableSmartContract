# Basic Sample Hardhat Project
## This project was based on Patrick Collins demo 
https://www.youtube.com/watch?v=bdXJmWajZRY

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that 
deploys that contract, and an example of a task implementation, which simply lists the available accounts.

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
```

Deploying the contracts

```shell
npx hardhat run scripts/deploy.js // Proxy of Box deployed to: 0xC18D3aCcF8C87a887B23998A8C131cE462490BC7

npx hardhat console --network local

const Box = await ethers.getContractFactory("Box")

const box = await Box.attach("0xC18D3aCcF8C87a887B23998A8C131cE462490BC7") // contract shown in the console earlier

(await box.retrieve()).toString() // 42

```

Before running this command you have to replace the CONTRACT_ADDRESS in upgrade.js by the contract that showed in the console earlier

```shell
npx hardhat run scripts/upgrade.js // Your upgraded proxy is done! 0xC18D3aCcF8C87a887B23998A8C131cE462490BC7)

npx hardhat console --network local

const BoxV2 = await ethers.getContractFactory("BoxV2")

const boxV2 = await BoxV2.attach("0xC18D3aCcF8C87a887B23998A8C131cE462490BC7") // contract shown in the console earlier

(await boxV2.retrieve()).toString() // 42

(await boxV2.increment())

(await boxV2.retrieve()).toString() // 43

```
Local RPC Service -> Ganache
