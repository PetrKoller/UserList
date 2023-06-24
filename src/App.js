import React, {useState} from "react";
import AddUser from "./components/User/AddUser";
import UsersList from "./components/User/UsersList";


function App() {
    const [users, setUsers] = useState([]);
    const userAddedHandler = (user) => {
        setUsers((prevUsers) => {
            return [...prevUsers, user];
        });
    };
    return (
        <>
            <AddUser onUserAdded={userAddedHandler}/>
            <UsersList data={users}/>
        </>
    );
}

export default App;
