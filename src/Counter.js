import React from "react";
import useCounter from "./useCounter";

export default function Counter(props) {
    const {counter, increment, decrement} = useCounter();

    return (<>
        <p>
            <strong>Counter: {counter}</strong>
            <button className="ui-button" onClick={increment}>+</button>
            <button className="ui-button" onClick={decrement}>-</button>
        </p>
    </>);
}
