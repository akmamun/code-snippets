import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link} from 'react-router-dom';

import api from "../../api";

class APITodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: []  
    };
  }

  componentDidMount() {
    const todoId = this.props.match.params;
    api.todos().getOne(todoId)
      .then(response => this.setState({ todo: response.data }));
  }
  onDelete = () => {
    const todoId = this.props.match.params;
    api.todos().delete(todoId)
      .then(response => this.props.history.push('/'));
  }

  render() {
    const { todo } = this.state;

    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-lg-8 offset-lg-2">
            <h4> {todo.title} 
             <Link to={`/todo/edit/${todo._id}`}> 
              <FontAwesomeIcon icon="edit" className="ml-5" />
               </Link>
                <FontAwesomeIcon icon="trash" onClick={this.onDelete} className="float-right mr-5" />
            </h4> 
              <p> {todo.body}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default APITodo;
