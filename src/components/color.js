
import React from 'react';
import PropTypes from 'prop-types'
import StarRating from './star-rating'
import '../stylesheets/color.scss'

import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const Color = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f}) =>   
  [
    <section className="color">
        <Card>
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>아름다운 색</CardSubtitle>
            </CardBody>
            <CardBody>
            <div className="color" style={{ backgroundColor: color }}/>
            </CardBody>
            <CardBody>
                <CardText>            
                    <StarRating starsSelected={rating} onRate={onRate} />            
                    <Button onClick={onRemove}>X</Button>
                </CardText>
            </CardBody>
        </Card>
    </section>
  ]

Color.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default Color;