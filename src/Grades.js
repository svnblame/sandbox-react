import React from "react";

export default function Grades(props) {
    const grades = props.grades;
    const listItems = grades.map((grade, index) => <li key={index}>{grade}</li>);

    // this will generate a warning, will fix later
    return <>
        <h4>Grades:</h4>
        <ul>{listItems}</ul>
    </>
}
