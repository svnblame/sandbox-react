import React, {useState} from "react";

export default function AddToCart() {
    // hooks have to be at the top
    const [seconds, setSeconds] = useState(0);

    function handleIncrementCartItems() {
        setSeconds(seconds + 1);
    }

    return (<>
        {/* increment seconds state by 1, when you click on the button */}
        <h3>Items in cart: {seconds}
            <button className="ui-button" onClick={handleIncrementCartItems}>Click to Add Item</button>
        </h3>
    </>);
}
