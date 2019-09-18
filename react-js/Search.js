import React, { Component } from 'react';
 
export default class Search extends Component {
 
        state = {
            data: [
              "Go to the store",
              "Wash the dishes",
              "Learn some code"
            ],
            filter: ""

        };
   
    // componentDidMount() {
     
    //    axios.get(url)
    //    .then(response => this.setState({ data: response.data.recipes }))
    // }
     
      handleChange =  (event) =>{ 
        this.setState({ filter: event.target.value });

      }
    
    render() {
      const { filter, data } = this.state;
      const lowercasedFilter = filter.toLowerCase();
      const filteredData = data.filter(item => {
        return Object.keys(item).some(key =>
          item[key].toLowerCase().includes(lowercasedFilter)
        );
      })
    
        return (
          <div className="container">
           <input type="text" className="input"  onChange={this.handleChange} placeholder="Search..." />

            <div className="row">
              <div className="col-lg-8 offset-lg-2">
                <h2>Todo List</h2>
                {filteredData && filteredData.map((d, index) => (
                  <li> {d} </li> 
                ))}
              </div>
            </div>
          </div>
        );
    }
}
 