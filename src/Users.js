import {useState} from "react";
import useFetch from "./useFetch";
import Loader from "./Loader";

export default function Users() {
    const [users, setUsers] = useState();
    const {get, loading} = useFetch("https://react-tutorial-demo.firebaseio.com/");
    
    function handleLoadUsersClick() {
        get("users.json").then(data => {
            setUsers(data);
        })
        .catch(error => console.error(error));
    }

    return <>
        <button className="ui-button" onClick={handleLoadUsersClick} disabled={loading}>Load Users</button>
        <h1>{users && users.length + " Users"}</h1>
        {loading && <Loader />}
        <ul>
            {users && users.map(user => <li key={user.id}>{user.name}</li>)}
        </ul>
    </>
}
