import React, { useState, useEffect } from "react";
import axios from "axios";

function DataFetch () {
    const [user, setUser] = useState({});
    const [ id, setId ] = useState(1);
    const [ idButton, setIdButton ] = useState(1);

    const clickHandle = () => {
        setIdButton(id)
    }

    useEffect(() => {
        console.log("work");
        axios.get(`https://jsonplaceholder.typicode.com/users/${idButton}`)
            .then(response => {
                setUser(response.data);
                console.log(response);
            })
            .catch(e => {
                console.log(e);
            });
    }, [idButton]);

    return (
        <>
        <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=" Enter ID"
              value={id}
              onChange={ e => setId( e.target.value ) }
            />
          </div>
          <button className="btn btn-md btn-danger m-4" onClick={clickHandle}> Get User </button>
            <p>{ user.name }</p>
        </>
    );
}

export default DataFetch;
