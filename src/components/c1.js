import React, { Component } from "react";

class C1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            role: "Engineer",
            name: "", // Initialize the 'name' state
            bool: true
        };
    }

    handleClick = () => {
        this.setState({
            role: "Doctor",
        });
    };

    handleChange = (event) => {
        this.setState({
            name: event.target.value, // Update the 'name' state with the input value
        });
    };
    handleSignal = () => {
        this.setState({
            bool: !this.state.bool
        })


    }

    render() {
        return (
            <div>
                <h1>Props value is {this.props.gift} </h1>
                <h1>State value is {this.state.role}</h1>
                <button onClick={this.handleClick}>Change state</button>
                <input
                    placeholder="Enter your name"
                    onChange={this.handleChange}
                    value={this.state.name} // Bind the input value to the 'name' state
                />
                <p>Your name is: {this.state.name}</p> {/* Display the 'name' state */}
                <button onClick={this.handleSignal}>Signal</button>
                {
                    (this.state.bool) ? <h1 style={{color:"green"}}>Go</h1> : <h1 style={{color:"red"}}>Stop</h1>}
            </div>
        );
    }
}

export default C1;
