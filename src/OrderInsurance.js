import React, {useState} from "react";

export default function OrderInsurance() {
    const [order, setOrder] = useState({
        id: 1,
        items: [1, 4, 10]
    });

    function handleAddClick() {
        setOrder({...order, insurance: "basic"});
    }

    function handleRemoveClick() {
        const {insurance, ...modifiedOrder} = order;
        setOrder(modifiedOrder);
    }

    return <div className="display-block">
        <h3>Your Order</h3>
        {order.insurance ? <p>Order is insured</p> : <p>Order is not insured</p>}
        <button className="ui-button" disabled={order.insurance === "basic"} onClick={handleAddClick}>Add insurance</button>
        <button className="ui-button" disabled={order.insurance === undefined} onClick={handleRemoveClick}>Remove insurance</button>
    </div>
}
