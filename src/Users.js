import {useState} from "react";
import Loader from "./Loader";

export default function Users() {
    const [users, setUsers] = useState();
    const [isUsersLoading, setIsUsersLoading] = useState(false);

    function handleLoadUsersClick() {
        setIsUsersLoading(true);

        setTimeout(() => {
            console.log("Simulating slow network...");

            fetch("https://react-tutorial-demo.firebaseio.com/users.json")
                .then(response => response.json())
                .then(data => {
                    console.log('Fetched Users Data: ', data);
                    setUsers(data);
                })
                .catch(error => console.log(error))
                .finally(() => {
                    setIsUsersLoading(false);
                });
        }, 3000);
    }

    return <>
        <button className="ui-button" onClick={handleLoadUsersClick} disabled={isUsersLoading}>Load Users</button>
        <h1>{users && users.length + " Users"}</h1>
        {isUsersLoading && <Loader />}
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
}