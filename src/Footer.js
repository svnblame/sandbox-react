import React from "react";
import Link from "./Link.js";

export default function Footer() {
    const year = new Date().getFullYear();
    return (<>
        <footer className="mt-16">&copy; {year}. All rights reserved. <Link href="https://errandpoint.com" className="ui-link">ErrandPoint</Link></footer>
    </>);
}
