import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (<p>&copy; {year}. All rights reserved. <a href="https://react-tutorial.app">React Tutorial</a></p>);
}
