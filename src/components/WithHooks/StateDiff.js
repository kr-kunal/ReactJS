import React, { useState } from 'react'

function StateDiff() {

    const [ name, setName ] = useState({ fname: '', lname: ''})

    return (
        <div>
            <form>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=" First Name"
              value={name.fname}
              onChange={ e => setName({ ...name, fname: e.target.value}) }
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Last Name"
              value={name.lname}
              onChange={ e => setName({ ...name, lname: e.target.value}) }
            />
          </div>
          <h3> First Name : {name.fname} </h3>
          <h3> Last Name : {name.lname}  </h3>
        </form>
        </div>
    )
}

export default StateDiff
