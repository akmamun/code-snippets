import React, { Component } from 'react';
import { Link} from 'react-router-dom';

import api  from '../../api';
 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    componentDidMount() {
        api.todos().getAll()
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
                    <h4>
                      <Link to={`/todo/${todo._id}`}>{todo.title}</Link> 
                    </h4>
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
