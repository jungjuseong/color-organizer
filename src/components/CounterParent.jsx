import React from 'react';
import ReactDOM from 'react-dom';
import Colorizer from './Colorizer'

class Counter extends React.Component {
    render() {
      var textStyle = {
        fontSize: 72,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold"
      };
   
      return (
        <div style={textStyle}>
          {this.props.display}
        </div>
      );
    }
}

class PlusButton extends React.Component {
    render() {
      return (
        <button onClick={this.props.clickHandler}>+</button>
      );
    }
}

export class CounterParent extends React.Component {
    constructor(props) {
      super(props);
   
      this.state = {
        count: 0
      };

      this.increase = this.increase.bind(this);
      console.log("constructor: Default state time!");
    }
   
    increase(e) {              
        this.setState({
            count: this.state.count + ((e.altKey) ? 10 : 1)
        });
    }
    
    componentWillUpdate(newProps, newState) {
        console.log("componentWillUpdate: Component is about to update!");
    }
    
    componentDidUpdate(currentProps, currentState) {
        console.log("componentDidUpdate: Component just updated!");
    }
     
    componentWillMount() {
        console.log("componentWillMount: Component is about to mount!");
    }
     
    componentDidMount() {
        console.log("componentDidMount: Component just mounted!");
    }
     
    componentWillUnmount() {
        console.log("componentWillUnmount: Component is about to be removed from the DOM!");
    }
     
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate: Should component update?");
     
        if (newState.count < 5) {
          console.log("shouldComponentUpdate: Component should update!");
          return true;
        } 
        else {
          var destination = document.querySelector("#container");

          ReactDOM.unmountComponentAtNode(destination);
          console.log("shouldComponentUpdate: Component should not update!");
          return false;
        }
    }

    componentWillReceiveProps(newProps) {
        console.log("componentWillReceiveProps: Component will get new props!");
    }

    render() {
      var backgroundStyle = {
        padding: 50,
        backgroundColor: "#FFC53A",
        width: 250,
        height: 100,
        borderRadius: 10,
        textAlign: "center"
      };

      var buttonStyle = {
        fontSize: "1em",
        width: 30,
        height: 30,
        fontFamily: "sans-serif",
        color: "#333",
        fontWeight: "bold",
        lineHeight: "3px"
      };
   
      return (
        [
        <div style={backgroundStyle}>
          <Counter display={this.state.count} />
          <PlusButton style={buttonStyle} clickHandler={this.increase} />
        </div>,
        <div>
            <Colorizer />
        </div>
        ]
      );
    }
}

console.log("defaultProps: Default prop time!");
CounterParent.defaultProps = {
    name: "Iron"
};

