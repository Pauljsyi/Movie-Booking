import React, { component } from "react"
import './App.css';

class App extends React.Component {
  render() {
    return     (
    <div>
      
      <h1>{this.props.greeting}</h1>
        <h2>{this.props.yell}</h2>
      
  </div>
    )
  }

}

export default App;
