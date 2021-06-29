import React, {useState} from "react";

export default function PostGrade() {
    const [number, setNumber] = useState(0);

    function handleFormSubmit(event) {
        event.preventDefault();

        fetch("https://react-tutorial-demo.firebaseio.com/grades.json", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ grade: 55 })
        })
        .then(response => response.json())
        .then(data => {
            console.log("Grade added");
            console.log(data);
        });
    }

    return <form onSubmit={handleFormSubmit}>
        <input type="number" value={number} name="grade" onChange={event => setNumber(event.target.value)} placeholder="Enter the grade" />
        <input type="submit" />
    </form>;    
}
