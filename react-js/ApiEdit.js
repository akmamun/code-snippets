import React, { Component } from "react";

import api from "../../api";

class APIEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title :'', 
            body: ''
        };
    }
  
    componentDidMount() {
        const todoId = this.props.match.params;
        api.todos().getOne(todoId)
            .then(response => this.setState({
                title: response.data.title,
                body: response.data.body
            }));
    }
    onChance = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }
    onSubmit = (e) => {
        e.preventDefault() //prevent load
        const todoId = this.props.match.params;
        // get our form data out of state
        const { title, body } = this.state;   // define state variable for use in return and store in state value
        api.todos().update(todoId, { title: title, body: body })
            .then(response => this.props.history.push('/'));
    }
          

    render() {
        const { title, body } = this.state;

        return (
            <div className="container"> 
                    <div className="col-lg-6 offset-2 mt-5">
                            <form onSubmit={this.onSubmit}>
                                    <div className="form-group">
                                        <label> Todo Title : </label>
                            
                                        <input
                                            type="text"
                                            name="title"
                                            value={title}
                                                className="form-control"
                                            placeholder="Add Todo"
                                            onChange={this.onChance}
                                            required  />
                                        
                                    </div>
                                    <div className="form-group">
                                        <label>  Description : </label>
                                        <textarea type="text"
                                            name="body"
                                            className="form-control"
                                            placeholder="Description"
                                            value={body}
                                            onChange={this.onChance}
                                            required rows="6" />     
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-lg btn-primary float-right mt-2">
                                        Update 
                                    </button>
                     
                            </form>
                    </div> 
            </div>
        );
    }
}

export default APIEdit;
