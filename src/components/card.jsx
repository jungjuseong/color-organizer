import React from 'react';
import {Square, Label} from './abc';
import LightingCounter from './LightingCounter';

class Card extends React.Component {
    render() {
      const { color } = this.props;

      var cardStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: "#FFF",
        boxShadow: "0px 0px 10px #666"
      };
   
      const SLComponent = <div style={cardStyle}>
                    <Square color={color}/>
                    <Label color={color}/>
                </div>;

      return (
        <React.Fragment>
            { SLComponent }
            <p />
            <div  style={cardStyle}>
                <Square color={'#336'}/>                
                <LightingCounter/>
            </div>
            <p/>
            <div className="slideIn">
                {/* I am a child comment */}
                <Label /* This comment goes across multiple lines */ className="colorCard" // end of line
                    />
            </div>
        </React.Fragment>
      );
    }
  }

  export default Card;