//npm install axios
import React, { Component } from 'react';
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        axios.get("api endpoint route")
        .then(response => this.setState({ todos: response.data }))
    }

    render() {
        const { todos } = this.state;

        return (
          <div className="container">
            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>Todo List</h2>
                {todos.map((todo, index) => (
                  <div key={index}>
              
                    <p> {todo.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
    }
}

export default TodoList;
