import React, {useState, useEffect} from "react";

export default function Clock2() {
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        setInterval(() => {
            // set a new instance of date every second
            setDate(new Date());
        }, 1000);
    }, []);

    // TODO: still need to cleanup the side effect

    return <h2>{date.toLocaleTimeString()}</h2>
}
