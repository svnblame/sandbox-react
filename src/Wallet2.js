import React, {useState} from "react";

export default function Wallet2() {
    const [transactions, setTransactions] = useState([]);

    function handleDepositClick() {
        setTransactions([...transactions, transactions.length + 1]);
    }

    function handleUndoClick() {
        setTransactions(transactions.slice(0, transactions.length - 1));
    }

    return <>
        <h3>MyWallet v2</h3>
        <button className="ui-button" onClick={handleDepositClick}>Deposit</button>
        <button className="ui-button" onClick={handleUndoClick}>Undo</button>
        <ul>
            {transactions.map(
                (transaction, index) => <li key={index}>{transaction}</li>
            )}
        </ul>
    </>;
}
