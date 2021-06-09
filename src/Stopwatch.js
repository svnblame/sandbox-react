import React, {useState, useEffect} from "react";

export default function Stopwatch() {
    const [counter, setCounter] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        // this effect still runs every time
        // but the code inside of it only runs when 'running' is true
        if (running) {
            let timerId = setTimeout(() => {
                setCounter(prevCounter => prevCounter + 1);
            }, 1000);

            return () => {
                clearTimeout(timerId)
            }
        }
    });

    function handleStartPauseClick() {
        setRunning(prevValue => !prevValue);
    }

    function handleStopClick() {
        setCounter(0);
        setRunning(false);
    }

    return <>
        <h2>Stopwatch</h2>
        <h3>{counter}</h3>
        <button className='ui-button' onClick={handleStartPauseClick}>Start / Pause</button>
        <button className='ui-button' onClick={handleStopClick}>Stop</button>
    </>
}
