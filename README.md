# MedOwn ❤️

<p> MedOwn is a decentralized web application built on the Polygon blockchain that enables patients to mint their health records as non-fungible tokens (NFTs). This empowers patients to take ownership of their health data and provides them with the opportunity to monetize their records if desired. The application utilizes ReactJS, Tailwind CSS, and Solidity for smart contracts, with Hardhat as the development environment. The smart contracts are deployed on the Polygon Mumbai Testnet, and the frontend is hosted on Vercel.</p>
 
 ---

### Features : 

- ***Health Record Minting***: Patients can securely mint their health records as NFTs on the Polygon blockchain, ensuring ownership and immutability of the data.
- ***Monetization Opportunities***: Patients have the option to monetize their health records by selling or licensing them to interested parties.
- ***Privacy and Security***: The use of blockchain technology ensures that health records are stored securely, maintaining patient privacy and preventing unauthorized access.
- ***Wallet Integration***: The Rainbow Kit is utilized for seamless integration with wallets, allowing users to interact with the DApp using their preferred Ethereum wallet.
- ***Easy Deployment***: The smart contracts are deployed on the Polygon Mumbai Testnet, ensuring a cost-effective and efficient blockchain solution.
 
### Guide to install project on local machine :

1. To run this project on your machine you first need to clone repo to your local machine

  ```
  
  git clone https://github.com/0xShax2nk/MedOwn.git
  
  ```

2. Change directory to MedOwn and install project dependencies
 
  ```

  cd MedOwn
  npm i

  ```

3. Configure Environment Variables
   
     - Create a .env file in the root directory of the project.
     - Add the following environment variables to the .env file and replace the values accordingly.
  
```

 METAMASK_PRIVATE_KEY='YOUR_METAMASK_PRIVATE_KEY'

 PINATA_API_KEY='YOUR_PINATA_API_KEY'

 PINATA_SECRETE_KEY='YOUR_PINATA_SECRETE_API_KEY'

 QUICKNODE_URL="YOUR_QUICKNODE_ENDPOINT_URL"

 ALCHEMY_ID='YOUR_ALCHEMY_ID'

```

Quicknode and Alchemy are Node providers, you can choose according to your convenience, I'm going with quicknode for this project.

> Note: Make sure you add .env to gitignore file as it contains your metamask private key and other secrete api keys, so that it won't be exposed to the internet.

  
