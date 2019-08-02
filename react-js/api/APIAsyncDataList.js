//npm install axios
import React, { Component } from 'react';
import { axios } from 'axios'; 
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
    }

    async componentDidMount() {
        await this.getData()
     }
 
     getData = async () => {
         const response = await axios.get("api route");
         this.setState({todos: response.data});
         setTimeout(this.getData, 1000);  /*auto request to endpoint every second to fetch data*/
     };
 

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
