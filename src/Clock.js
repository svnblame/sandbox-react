import React, {useState} from "react";

export default function Clock() {
    const [seconds, setSeconds] = useState(0);

    function handleIncrementClick() {
        if (seconds < 10) {
            setSeconds(seconds + 1);
        }
    }

    return (<>
        <p>
            {seconds} seconds
            <button className="ui-button" onClick={handleIncrementClick}>Add Seconds</button>
        </p>
    </>);
}
