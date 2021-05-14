import React from "react";

export default function NameForm(props) {
    return <form>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={props.name} onChange={props.onNameChange} />
    </form>
}