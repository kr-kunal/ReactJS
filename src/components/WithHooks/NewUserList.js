import React, { useState, useEffect } from "react";
import axios from "axios";

function NewUserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log("work");
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                setUsers(response.data);
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
    }, []);

    return (
        <>
            <ul>
                {
                    users.map( user => <li key={user.id}> { user.name } </li>)
                }
            </ul>
        </>
    );
}

export default NewUserList;
