import React from 'react';
import { Col,Row, Button, ButtonGroup, ButtonToolbar } from 'reactstrap';

import SVGContainer from './react-svg-drag-and-select/SVGContainer';

const data = [
    {
      id: '1',
      tagName: 'rect',
      value: 1,
      x: 28, y: 50,
      width: 200, height: 50,
      fill: '#4422aa',
      strokeWidth: 1,
      stroke: 'rgb(0,0,0)',
    },
    {
      id: '2',
      tagName: 'text',
      x: 0, y: 35,
      children: 'Rect A (value = 1)',
    },
    {
      id: '3',
      tagName: 'polygon',
      value: 2,
      points: '60,20 100,40 100,80 60,100 20,80 20,40',
      fill: 'red',
      strokeWidth: 1,
      stroke: 'rgb(0,8f,0)',
    },
    {
      id: '4',
      tagName: 'text',
      x: 80, y: 130,
      fill: 'green',
      font: 'bold 20pt sans-serif',
      fontWeight: 'bold',
      fontSize: '20pt',
      fontFamily: '나눔명조',
      children: '서울시 영등포구 강단길 129 201동890',
    },
    {
      id: '5',
      tagName: 'circle',
      value: 3,
      cx: 50, cy: 200, r: 50,
      fill: 'yellow',
      strokeWidth: 1,
      stroke: 'rgb(0,0,0)',
    },
    {
      id: '6',
      tagName: 'text',
      x: 50, y: 235,
      fill: 'red',
      fontWeight: 'bold',
      fontSize: '40pt',
      fontFamily: 'Arial',
      children: 'Clbee',
    },
    {
        id: '7',
        tagName: 'image',
        x: 0, y: 100,
        height: 200, 
        width: 200,
        href:'https://mdn.mozillademos.org/files/6457/mdn_logo_only_color.png'
    }
];

class SVGNameCardClass extends React.Component {    
    state = { 
        items: data, 
        sum: 0, 
        isMovable: false 
    };

    onSelectChange = selected => {
        console.log(selected)
        const sum = selected
            .filter(t => t.value)
            .map(t => t.value)
            .reduce((acc, value) => acc + value, 0);
    
        this.setState({ sum });
    };

    onItemsChange = items => this.setState({ items })

    onCheck = e => { 
        this.setState({ 
            isMovable: e.target.name === 'Move' 
        });
    }

    onRemove = e => { 
        this.setState({ 
            isMovable: e.target.name === 'Move' 
        });
    }

    render() {
        const { isMovable, items } = this.state;

        const btn = <div>
             <ButtonToolbar>
                <ButtonGroup>
                    <Button name='Select' onClick = {this.onCheck}>Select</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button name='Move' onClick = {this.onCheck}>Move</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button name='Copy' onClick = {this.onCopy}>Copy</Button>
                </ButtonGroup>
                <ButtonGroup>
                    <Button name='Remove' onClick = {this.onRemove}>Remove</Button>
                </ButtonGroup>
            </ButtonToolbar>    
        </div>

        return (
          <Col>          
            <Row>
                { btn }
            </Row>
            <Row>
            <SVGContainer 
                width={600} height={300} 
                style={{ backgroundColor: 'aliceblue' }}
                onSelectChange={this.onSelectChange}  
                onItemsChange={this.onItemsChange}
                items={items}  
                isMovable={isMovable} 
                isSelectable={!isMovable}
            />
            </Row>
            <p>Output: (Sum)</p>
            <h2>{this.state.sum}</h2>
          </Col>
        );
      }
}

export default SVGNameCardClass;