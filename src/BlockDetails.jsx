import React from "react";

const BlockDetails = ({selectedBlock, setSelectedTransaction}) => {
    return (
        <div className="block-details">
            <h3>Block Details for Block {selectedBlock.number}</h3>
            <p>Timestamp: {new Date(selectedBlock.timestamp * 1000).toLocaleString()}</p>
            <p>Miner: {selectedBlock.miner}</p>
            <p>Transactions:</p>
            <ol>
                {selectedBlock.transactions.map((txHash) => (
                    <li key={txHash}>
                        <button onClick={() => setSelectedTransaction(txHash)}> {/*Here we provide required argument to setSelectedTransaction()*/}
                            {txHash}
                        </button>
                    </li>
                ))}
            </ol>
        </div>
    )
};

export default BlockDetails;