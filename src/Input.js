import React from "react";

export default function Input(props) {
    // destructuring with default value
    // https://codetogo.io/how-to-destructure-with-default-value-in-javascript/
    const {type = "text", placeholder, name} = props;
    return <input className="ui-textfield" type={type} placeholder={placeholder} name={name} />;
}
