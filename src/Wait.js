import {useState, useEffect} from "react";

export default function Wait() {
    const [users, setUsers] = useState();

    useEffect(() => {
        fetch("https://react-tutorial-demo.firebaseio.com/users.json")
            .then(response => response.json())
            .then(data => {
                console.log('Fetched Users Data: ', data);
                setUsers(data);
            });
    }, []);

    if (!users) {
        return null;
    }

    return <h2>There are {users.length} users</h2>
}
