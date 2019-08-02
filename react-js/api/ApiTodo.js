//npm install axios
import React, { Component } from "react";
import { axios } from 'axios';


class APITodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []  
    };
  }

  componentDidMount() {
    const id = "your id like 1245";
    axios.get("your api endpoint route", id)
      .then(response => this.setState({ todo: response.data }));
  }
  onDelete = () => {
    // const todoId = this.props.match.params;
       const todoId = "your deleted id like 123";
    axios.delete("your api endpoint route", id) //id for specific data delete
      .then(response => this.props.history.push('/'));
  }

  render() {
    const { todo } = this.state;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <h4> {todo.title} 
  
            </h4> 
              <p> {todo.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default APITodo;
