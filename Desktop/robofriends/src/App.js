import React, { component } from "react"
import './App.css';

class App extends React.Component {
  render() {
    return     (
    <div className="App">
      
      <h1>{this.props.greeting}</h1>
        <h3>Ninja says: {this.props.yell}</h3>
        <h3>Minion says: {this.props.alert}</h3>
      
  </div>
    )
  }

}

export default App;
