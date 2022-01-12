import React, { Component } from "react";
import axios from "axios";

class PostDemo extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name: '',
             username: '',
             email: ''
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    
    submitHandler = (e) => {
        e.preventDefault()
        console.log(this.state);
        axios.post('https://jsonplaceholder.typicode.com/users')
        .then( response => {
            console.log(response);
        }) 
        .catch( error => {
            console.log(error);
        })    
    
    }

  render() {

    const { name, username, email } = this.state

    return (
      <div>
          <p> HTTP Post </p> 
        <form onSubmit={this.submitHandler}>
          <div className="mb-3">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
              onChange={this.changeHandler}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Username"
              value={username}
              onChange={this.changeHandler}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default PostDemo;
