import React, {useState, useEffect} from "react";

export default function Count() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (count > 0) {
            console.log('Count: ' + count);
        }
    })

    function handleAddClick() {
        setCount(prevCount => prevCount + 1);
    }

    return <>
        <h2>{count}</h2>
        <button className='ui-button' onClick={handleAddClick}>Add 1</button>
    </>;
}