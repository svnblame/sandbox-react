import React, {useState} from "react";

export default function Clock() {
    const [seconds, setSeconds] = useState(0);

    function handleIncrementClick() {
        if (seconds < 59) {
            setSeconds(seconds + 1);
        }
    }

    return (<>
        <h2>{seconds} seconds</h2>
        <button className="ui-button" onClick={handleIncrementClick}>Add</button>
    </>);
}
