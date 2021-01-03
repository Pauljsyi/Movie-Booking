import React, { component } from "react"

class Hello extends React.Component {
    render() {
        return (<div>
        <h1>{this.props.greeting}</h1>
        <h2>{this.props.yell}</h2>
        </div>
        )
    }
}

export default Hello;