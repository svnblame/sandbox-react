import React, {useState} from "react";

export default function OrderQuantity() {
    const [quantity, setQuantity] = useState(0);

    return <div className="display-block">
        <h3>Your Order</h3>
        <input 
            type="number" 
            name="quantity"
            className="ui-textfield"
            value={quantity} 
            onChange={event => setQuantity(event.target.value)}
            placeholder="Enter Your Order Quantity" />
        <p>Ordering {quantity} items</p>
    </div>;
}
