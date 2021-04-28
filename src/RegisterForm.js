import React, {useState} from "react";

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [motivation, setMotivation] = useState('');

    function handleFormSubmit(event) {
        event.preventDefault();

        // clear form elements
        setName('');
        setType('');
        setMotivation('');
    }

    return <div className="display-block">
        <form onSubmit={handleFormSubmit}>
            <input
                type="text" 
                name="name"
                className="ui-textfield"
                placeholder="Enter Your Name" 
                onChange={e => setName(e.target.value)}
                value={name}
            />

            <select
                name="type"
                onChange={e => setType(e.target.value)}
                value={type}
                className="drop-down"
            >
                <option>Choose a type</option>
                <option>client</option>
                <option>merchant</option>
            </select>

            <textarea
                name="motivation"
                className="ui-textfield"
                placeholder="Your Motivation to Join"
                onChange={e => setMotivation(e.target.value)}
                value={motivation}
            />

            <button type="submit" name="submit-registration" className="ui-button">Register</button>
        </form>

        <p>Your name is {name}. You would like to register as {type} because {motivation}</p>
    </div>
}