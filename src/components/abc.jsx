import React from 'react';

export class Square extends React.Component {
    render() {
      const { color } = this.props;
      const squareStyle = {
        height: 150,
        backgroundColor: color
      };
   
      return (
        <div style={squareStyle}>
   
        </div>
      );
    }
  }

  export class Label extends React.Component {
    render() {
      const { color } = this.props;
      const labelStyle = {
        fontFamily: "sans-serif",
        fontWeight: "bold",
        padding: 13,
        margin: 0
      };
   
      return (
        <p style={labelStyle}>{color}</p>
      );
    }
}