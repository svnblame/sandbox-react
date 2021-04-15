import React from "react";
import NoPermission from "./NoPermission.js";

export default function Admin(props) {
    if ("admin" !== props.userType) {
        return <NoPermission />
    }

    return <div>
        <h3>Welcome Admin</h3>
        <p>The Admin portal allows you to manage all your items.</p>
    </div>
}