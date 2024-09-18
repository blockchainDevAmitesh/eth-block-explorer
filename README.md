# Ethereum Block Explorer

This project is a responsive Ethereum Block Explorer built using React.js, Vite, and ethers.js. The app allows users to view the latest 18 Ethereum blocks, inspect block details, and drill down into transaction details within a selected block.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [App.jsx](#appjsx)
  - [BlockList.jsx](#blocklistjsx)
  - [BlockDetails.jsx](#blockdetailsjsx)
  - [TransactionDetails.jsx](#transactiondetailsjsx)
- [Technologies Used](#technologies-used)
- [License](#license)

## Features
- Display the latest 18 Ethereum blocks.
- View block details including timestamp, miner, and transactions.
- View details for any transaction within a block, including gas used and status.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/blockchainDevAmitesh/eth-block-explorer.git

2. Navigate to the project directory:
    ```bash
    cd ethereum-block-explorer

3. Install dependencies:
    ```bash
    npm install

4. Setting Alchemy API key:
    at `App.jsx Ln: 17` replace `yourAlchemyApiKey` with your Alchemy Api Key

5. Start the development server:
    ```bash
    npm run dev

## Usage
- Once the app is running, it will display the latest 18 blocks on the Ethereum mainnet.
- Click on any block to view more details.
- Click on any transaction hash to view detailed transaction information, including gas used and transaction status.

## Components
## App.jsx:
- `App.jsx` is the main component that initializes the `ethers.js` provider, fetches block data from the Ethereum mainnet, and manages the selected block and transaction states. It renders `BlockList`, `BlockDetails`, and `TransactionDetails` based on user interactions.
  
## BlockList.jsx:
- `BlockList.jsx` displays the latest 18 blocks as clickable `buttons`. Each button shows the block number, and clicking a block will load its details in `BlockDetails`.
  
## BlockDetails:
- `BlockDetails.jsx` displays details about the selected block, including its `timestamp`, `miner`, and `transactions`. Each transaction hash is displayed as a `button`, which when clicked, shows transaction details in `TransactionDetails`.
  
## TransactionDetails.jsx:
- `TransactionDetails.jsx` shows detailed information about the selected transaction, such as the `block number`, `sender`, `receiver`, `gas used`, and `status` of the transaction (`success` or `failure`).

## Technologies Used
- `React.js`: JavaScript library for building user interfaces.
- `Vite`: Next-generation frontend tool for fast and optimized builds.
- `ethers.js`: A library for interacting with the Ethereum blockchain.
- `Alchemy API`: Used to fetch data from the Ethereum blockchain.

## License
- This project is licensed under the MIT License - see the LICENSE [hidden link][MIT-LICENSE].
[MIT-LICENSE]: https://github.com/blockchainDevAmitesh/eth-block-explorer/blob/main/LICENSE
 file for details.
