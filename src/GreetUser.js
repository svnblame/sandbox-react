import React from "react";

export default function GreetUser(props) {
    console.info(props); // {user: "Sam"}
    return <div>Welcome {props.user}</div>;
}
