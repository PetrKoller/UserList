import styles from "./AddUser.module.css";
import Button from "../UI/Button";
import Card from "../UI/Card";
import {useState} from "react";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const initialState = {
        username: "",
        age: ""
    };
    const [enteredUsername, setEnteredUsername] = useState(initialState.username);
    const [enteredAge, setEnteredAge] = useState(initialState.age);
    const [error, setError] = useState(null);

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };
    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value);
    };

    const confirmErrorHandler = () => {
        setError(null);
    }
    const addUserHandler = (event) => {
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            setError({
                title: "Invalid input",
                message: "Please enter a valid name and age (non-empty values)."
            });
            return;
        }
        if (+enteredAge < 1) {
            setError({
                title: "Invalid age",
                message: "Please enter a valid age (> 0)."
            });
            return;
        }
        props.onUserAdded({
            username: enteredUsername,
            age: enteredAge
        });
        resetInputs();
        setError(null);
    };

    const resetInputs = () => {
        setEnteredUsername(initialState.username);
        setEnteredAge(initialState.age);
    };
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={confirmErrorHandler}/>}
            <Card className={styles.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
};

export default AddUser;