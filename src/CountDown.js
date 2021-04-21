import React, {useState} from "react";

export default function CountDown() {
    const [count, setCount] = useState(5);
    const [lives, setLives] = useState(3);

    function handleCountdownClick() {
        if (count > 0) {
            setCount(count - 1);
        } else if (0 === count) {
            setCount(5);
            setLives(lives - 1);
        }
    }

    return <>
        <h3>Attempts remaining: {count}</h3>
        <button className="ui-button" onClick={handleCountdownClick}>Count Down</button>
        <h4>Lives remaining: {lives}</h4>
    </>;
}
