import React, { useState, useEffect } from "react";
import { ethers } from 'ethers';
import BlockList from "./BlockList";
import BlockDetails from "./BlockDetails";
import TransactionDetails from "./TransactionDetails";
import "./App.css";

const App = () => {
  const [provider, setProvider] = useState(null);
  const [blocks, setBlocks] = useState([]);
  const [selectedBlock, setSelectedBlock] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Initializing Alchemy provider
  useEffect(() => {
    const initProvider = () => {
      const provider = new ethers.AlchemyProvider("mainnet", "yourAlchemyApiKey");
      setProvider(provider);
    };
    initProvider();
  }, []);

  // Fetch block details from Ethereum mainnet
  useEffect(() => {
    const fetchLatestBlock = () => {
      if (provider) {
        // Returns the promise<recentlyMinedBlockNumber>
        provider.getBlockNumber()
        // Preparation for next step after promise gets resolved or rejected (.then if resoved, .catch if rejected)  
        .then(latestBlockNumber => {
          // Storing all 19 block promises in one array (initializing as an empty array)  
          const blockPromises = [];
            for (let i=0; i < 18; i++) {
              // .getBlock() returns the promise<objectOfBlockData>
              blockPromises.push(provider.getBlock(latestBlockNumber - i));
            };
            /* returns a single promise that resolves or rejects when all the promises in the iterable
            have either resolved or rejected. The returned promise will: 
            Resolve with an array of the results when all the input promises resolve successfully.
            Reject as soon as any one of the input promises rejects, with the reason for the first rejection. */
            Promise.all(blockPromises)
              .then(latestBlocks => setBlocks(latestBlocks))
              .catch(error => console.error("Error fetching block data:", error));
          })
          .catch(error => console.error("Error fetching latest block number:", error));
      };
    };
    fetchLatestBlock();
  }, [provider]); //Provided dependencies if change item gets rendered again ([provider])

  return (
    <div>
      <BlockList blocks={blocks} setSelectedBlock={setSelectedBlock}/> {/* Passing blocks and setSelectedBlock function(will take argument inside BlockList and set selectedBlock inside App) as props */}
      <div className="container">
        {selectedBlock && ( 
          <BlockDetails selectedBlock={selectedBlock} setSelectedTransaction={setSelectedTransaction}/>
        )} {/* Passing selectedBlock and setSelectedTransaction function(will take argument inside BlockDetails and set selectedTransaction inside App) as props */}
        {selectedTransaction && (
          <TransactionDetails provider={provider} selectedTransaction={selectedTransaction}/>
        )} {/* Passing provider and selectedTransaction as props */}
      </div>
    </div>
  );
};

export default App;