import React, { Component } from 'react';

import api from './api'


class ApiIntegration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: [],
            axiosTodos: []
        };
    }

    componentDidMount() {
        // fetch("http://127.0.0.1:5000/todos/")
        //     .then(response => response.json() //fetch method need to convert json
        //         .then(data => this.setState({ todos: data })) //define converted data state variable
        //     );
        api.todosFetch().getAll()  
            .then(response => response.json()  //fetch method need to convert json
                .then(data => this.setState({ todos: data })));  //define converted data state variable
    
     
         
        // axios({
        //     method: 'get',
        //     url: 'http://127.0.0.1:5000/todos/'
        // }).then(response => this.setState({ axiosTodos: response.data }))

        api.todosAxios().getAll()
        .then(response => this.setState({ axiosTodos: response.data }))


    }

    render() {
        let { todos, axiosTodos } = this.state;



        return (
            <div className="container">

                {todos.map((todo, index) =>
                    <div key={index}>
                        <h1> {todo.title}</h1>
                        <p> {todo.body}</p>
                    </div>

                )

                }
                {axiosTodos.map((todo, index) =>
                    <div key={index}>
                        <h1> {todo.title}</h1>
                        <p> {todo.body}</p>
                    </div>

                )

                }

            </div>

        );
    }
}

export default ApiIntegration;

