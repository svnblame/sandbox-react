import React, {useState} from "react";

export default function Wallet() {
    const [transactions, setTransactions] = useState([]);

    function handleDepositClick() {
        setTransactions([...transactions, 10]);
    }

    function handleWithdrawClick() {
        setTransactions([...transactions, -10]);
    }

    function handleClearClick() {
        setTransactions([]);
    }

    // https://codetogo.io/how-to-sum-items-of-array-in-javascript/
    const sum = transactions.reduce((total, current) => total + current, 0);

    let currentDatetime = new Date()
    console.info(currentDatetime.toString());
    let formattedDate = currentDatetime.getFullYear() + "-" + addLeadingZeros(currentDatetime.getMonth() + 1) + "-" + addLeadingZeros(currentDatetime.getDate()) + " " + addLeadingZeros(currentDatetime.getHours()) + ":" + addLeadingZeros(currentDatetime.getMinutes()) + ":" + addLeadingZeros(currentDatetime.getSeconds())
    console.info(formattedDate);

    return <>
        <button className="ui-button" onClick={handleDepositClick}>Deposit 10</button>
        <button className="ui-button" onClick={handleWithdrawClick}>Withdraw 10</button>
        <h2>Total: {sum}</h2>
        <hr />
        <button className="ui-button" onClick={handleClearClick}>Reset</button>
        <ul>
            {transactions.map(
                (transaction, index) => <li key={index}>{formattedDate}: {transaction}</li>
            )}
        </ul>
    </>;

    function addLeadingZeros(n) {
        if (n <= 9) {
            return "0" + n;
        }
        return n
    }
}
