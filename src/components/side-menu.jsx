import React from 'react'
import {ReactReader} from 'react-reader';

import { Container, Row, Col, Button, CardTitle, CardText, Card } from 'reactstrap';
// import FullEditor from './FullEditor'
import { v4 } from 'uuid';
import AddColorForm from './add-color-form';
import ColorList from './color-list';
import NameCard from './categories/namecard';
import SVGNameCardClass from './categories/svg-namecard-class';

import '../stylesheets/color-rating-app.scss'
import '../stylesheets/star.scss'

export default class SideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        colors: []
    }
    this.addColor = this.addColor.bind(this);
    this.rateColor = this.rateColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  addColor(title, color) {
      this.setState(prevState => ({
          colors: [
              ...prevState.colors,
              {id: v4(),title,color,rating: 0}
          ]
      }))
  }

  rateColor(id, rating) {
      this.setState(prevState => ({
          colors: prevState.colors.map(color =>
              (color.id !== id) ? color : {...color, rating }
          )
      }))
  }

  removeColor(id) {
      this.setState(prevState => ({
        colors: prevState.colors.filter(color => color.id !== id)
      }))
  }

  render() { 
    const { addColor, rateColor, removeColor } = this;
    const { colors } = this.state;

    const A = 
      <Container>
        <Row>
          <Col sm="6">
            <Card body>
              <CardTitle>Special Title Treatment</CardTitle>
                <CardText>
                  With supporting text below as a natural lead-in to additional content.
                  <AddColorForm onNewColor={addColor} />
                </CardText>
            </Card>
          </Col>
          <Col sm="6">
            <Card body>
              <CardTitle>색 목록</CardTitle>
              <CardText>
                <ColorList colors={colors} onRate={rateColor} onRemove={removeColor} />
              </CardText>
              <Button>Go somewhere</Button>
            </Card>
          </Col>
        </Row>  
        <Row>
          <Col sm="12">
          <div style={{position: 'relative', height: '100%'}}>
            <ReactReader
              url={'/alice.epub'}
              title={'Alice in wonderland'}
              location={'epubcfi(/6/2[cover]!/6)'}
              locationChanged={(epubcifi) => console.log(epubcifi)}
            />
          </div>
          </Col>  
        </Row>   
    </Container>
    ;

    const myData = {
      name:'정주성',
      title: 'Manager Dev',
      company: 'N&K Tech(주)',
      address: '경기도 성남시 분당구 중앙공원로 17 한양아파트 920동503호',
      mobile: '010-9000-3332',
      email: 'jungjuseong@gmail.com'
    }

    return (
      <Container>
        <Row>
          <Col>
            <NameCard doo={myData}></NameCard>
          </Col>
          <Col>
            <SVGNameCardClass doo={myData} x={27} y={50}/>
          </Col>
        </Row>
      </Container>

    )
  }

}

