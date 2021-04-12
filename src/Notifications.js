import React from "react";

export default function Notifications(props) {
    const value = props.data.count; // Never change the state of props.data.count directly!
    return <h3>You have {value} unread notifications.</h3>
}
