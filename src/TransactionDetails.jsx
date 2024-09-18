import React, { useState, useEffect } from "react";

const TransactionDetails = ({provider, selectedTransaction}) => {
    const [transactionReceipt, setTransactionReceipt] = useState(null);

    // Fetching transaction receipt
    useEffect(() => {
        const fetchTransactionReceipt = () => {
            if (provider) {
                // Returns the promise<transactionReceipt>
                provider.getTransactionReceipt(selectedTransaction)
                // Preparation for next step after promise gets resolved or rejected (.then if resoved, .catch if rejected)    
                .then(transactionReceipt => {
                        setTransactionReceipt(transactionReceipt);
                    })
                    .catch(error => console.error("Error fetching transaction receipt:", error));
            };
        };
        fetchTransactionReceipt();
    }, [provider, selectedTransaction]);

    if (!transactionReceipt) return <p>Loading transaction details...</p>;
    return (
        <div className="transaction-details">
            <h3>Transaction Details for {selectedTransaction}</h3>
            <p>Block Number: {transactionReceipt.blockNumber}</p>
            <p>From: {transactionReceipt.from}</p>
            <p>To: {transactionReceipt.to}</p>
            <p>Gas Used: {transactionReceipt.gasUsed.toString()}</p>
            <p >Status: {transactionReceipt.status === 1 ? "Success" : "Failed"}</p>
        </div>
    );
};

export default TransactionDetails;