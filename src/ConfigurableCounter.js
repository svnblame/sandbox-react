import React, { useState } from "react";

export default function ConfigurableCounter(props) {
    const [counter, setCounter] = useState(0);

    function handleIncrementClick() {
        setCounter(counter + props.incrementBy);
    }

    return (<>
        <p>
            {counter} times clicked
            <button className="ui-button" onClick={handleIncrementClick}>Add {props.incrementBy}</button>
        </p>
    </>);
}
