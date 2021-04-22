import React from "react";

export default function Grades() {
    const grades = [8, 18, 10, 7, 14];

    // this will generate a warning, will fix later
    return <>
        <p>
            <h4>Grades:</h4>
            <ul>
                {grades.map(grade => <li>{grade}</li>)}
            </ul>
        </p>
    </>
}
