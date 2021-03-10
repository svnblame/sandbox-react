import React from "react";

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <>
            <h3>Footer</h3>
            <p>&copy {year}. All rights reserved.</p>
        </>
    );
}
