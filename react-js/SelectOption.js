import React, { Component } from 'react'

export default class SelectOption extends Component {
     state ={
          type: ""
     }
     render() {
          return (
               <div>
                   <select name="name" onChange={(e) => this.setState({ type: e.target.value })} 
                         className="form-control">
                         <option disabled selected value> Select an option </option>
                         <option value="buy" selected={type === "buy" ? true : ""}>Buy</option>   {/* selected option  */}
                         <option value="sell" selected={type === "sell" ? true : ""}>Sell</option>
                  </select>     
               </div>
          )
     }
}
