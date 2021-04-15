import React, { useState } from "react";

export default function Counter(props) {
    const [counter, setCounter] = useState(0);

    function handleButtonClick() {
        if ("increment" === props.mode) {
            setCounter(counter + 1);
        } else {
            setCounter(counter - 1);
        }
    }

    return (<>
        <p>
            {props.mode}ing counter: {counter} times
            <button className="ui-button" onClick={handleButtonClick}>{props.mode}</button>
        </p>
    </>);
}
