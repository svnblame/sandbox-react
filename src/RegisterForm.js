import React, {useState} from "react";

export default function RegisterForm() {
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [motivation, setMotivation] = useState('');

    return <div className="display-block">
        <form onSubmit={e => e.preventDefault()}>
            <input
                type="text" 
                name="name"
                className="ui-textfield"
                placeholder="Enter Your Name" 
                onChange={e => setName(e.target.value)} 
            />

            <select
                name="type"
                onChange={e => setType(e.target.value)}
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
            />

            <button type="submit" name="submit-registration" className="ui-button">Register</button>
        </form>

        <p>Your name is {name}. You would like to register as {type} because {motivation}</p>
    </div>
}