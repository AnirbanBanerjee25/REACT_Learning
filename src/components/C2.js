import { Component } from "react";
class C2 extends Component {
    constructor() {
        super();
        console.log("I am constructor");
        this.state = { brand: "nike" };
    }
    static getDerivedStateFromProps() {
        console.log("I am getDerivedStateFromProps method");
        return null;
    }
    componentDidMount() {
        console.log("I am componentDidMount method");
    }
    shouldComponentUpdate() {
        console.log("I am shouldComponentUpdate")
        return true;
    }
    getSnapshotBeforeUpdate() {
        console.log("I am getSnap")
        return null;
    }
    componentDidUpdate() {
        console.log("I am componentDidUpdate method");
    }

    render() {

        console.log("I am render method");
        return (
            <div>
                <h1>Lifecycle methods</h1>
                <p>{this.state.brand}</p>
                <button onClick={() => { this.setState({ brand: "adidas" }) }}>Click</button>


            </div>

        )
    }

}
export default C2;