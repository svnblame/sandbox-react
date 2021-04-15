import React from "react";

export default function Dashboard(props) {
    const loggedIn = <h3>Welcome back!</h3>;
    const notLoggedIn = <h3>Welcome! Please Log In.</h3>;

    return <div className="container">{props.loggedIn ? loggedIn : notLoggedIn}</div>;
}
