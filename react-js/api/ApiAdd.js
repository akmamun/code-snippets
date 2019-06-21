import React, { Component } from 'react';
import api from '../../api'; 

class AddTodo extends Component {
  constructor(props) {
    super(props)
    this.state = { 
      //initialize state keys value  
      title : "",
      body : ""
    }
  }

  onChance = (e) => {
     /* Because we named the inputs to match their corresponding values in state, it's
          super easy to update the state  */
    this.setState({[e.target.name] : e.target.value}); 
  }

  onSubmit = (e) => {
    e.preventDefault() //prevent load   
    // get our form data out of state
    const {title, body} = this.state;
    // define state variable for use in return
    //and store in state value
     api.todos().create({ title: title, body: body})
      .then(this.setState({   //clear inputs after submit 
        title: "",
        body: ""
      }))
       .then(response => this.props.history.push('/')); 
  }
  
  render() {
    const {title, body} = this.state;  // define state variable for use in return
    return (
      <div className="container">
        <div className="col-lg-9 offset-lg-1">
          <form onSubmit={this.onSubmit}>
            <div className="form-group">
              <label>
                Todo Title :    </label>
                <input
                  type="text"
                  name="title"
                  value={title}
                  className="form-control"
                  placeholder="Add Todo"
                  onChange={this.onChance}
                  required
                />
           
            </div>
            <div className="form-group">
              <label>
                Description :      </label>
                <textarea
                  type="text"
                  name="body"
                  className="form-control"
                  placeholder="Description"
                  value={body}
                  onChange={this.onChance}
                  rows="4"
                  required  />
         
            </div>
            <button
              type="submit"
              className="btn btn-md btn-primary float-right">
              Add Todo
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default AddTodo;

