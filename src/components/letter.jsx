import React from 'react';

class Letter extends React.Component {
  render() {
    const { bgColor, childred } = this.props;

    const letterStyle = {
      padding: 10,
      margin: 10,
      backgroundColor: bgcolor,
      color: "#333",
      display: "inline-block",
      fontFamily: "monospace",
      fontSize: "32",
      textAlign: "center"
    };
 
    return (
      <div style={letterStyle}>
        {children}
      </div>
    );
  }
}

export default Letter;