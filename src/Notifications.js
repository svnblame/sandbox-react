import React from "react";

export default function Notifications(props) {
    return (<>
        <h2>Welcome user</h2>
        { props.notifications.length > 0 &&
            <p>You've got {props.notifications.length} notifications</p>
        }
    </>);
}
