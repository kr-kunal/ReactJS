import React, { Component } from 'react'
import axios from 'axios'

class UserList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             users: []
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            console.log(response);
            this.setState({users: response.data})
        })
        .catch( error => {
            console.log('Error');
        })
    }
    

    render() {
        const { users } = this.state
        return (
            <div>
                <p>User List</p>
                {
                    users.length ?
                    users.map(user => <ul key={user.id}> <li> { user.username } </li></ul>) :
                    null
                }
            </div>
        )
    }
}

export default UserList
