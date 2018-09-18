import React from 'react';

import '../stylesheets/colorizer.css';

export default class Colorizer extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        color: "",
        backgroundColor: "white"
      };

      this.colorValue = this.colorValue.bind(this);
      this.setNewColor = this.setNewColor.bind(this);
    }

    colorValue(e) {
      this.setState({
        color: e.target.value
      });
    }

    setNewColor(e) {
        const {_color} = this.refs;
        e.preventDefault();

        this.setState({
            backgroundColor: this.state.color
        });
        _color.value = "";
        _color.focus();
    }

    render() {
      var squareStyle = {
        backgroundColor: this.state.backgroundColor
      };

      return (
        <div className="colorArea">
          <div style={squareStyle} className="colorSquare"></div>

          <form onSubmit={this.setNewColor}>
            <input 
                ref="_color"
                onChange={this.colorValue} 
                placeholder="Enter a color value">
            </input>
            <button type="submit">go</button>
          </form>
        </div>
      );
    }
  }