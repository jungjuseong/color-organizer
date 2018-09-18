
import React from 'react';
import PropTypes from 'prop-types'
import StarRating from './star-rating'
import '../stylesheets/color.scss'

import { Card, CardText, CardTitle, Button } from 'reactstrap';

const ColorBox = ({ title, color, rating=0, onRemove=f=>f, onRate=f=>f}) =>   
  [
    <div className="color">
        <Card body inverse style={{ backgroundColor: color, borderColor: color }}>
            <CardTitle>{title}</CardTitle>
            <CardText color="secondary">With supporting text below as a natural color</CardText>
            <StarRating starsSelected={rating} onRate={onRate} />            
            <Button onClick={onRemove}>삭제</Button>
        </Card>
    </div>
  ]

  ColorBox.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    rating: PropTypes.number,
    onRemove: PropTypes.func,
    onRate: PropTypes.func
}

export default ColorBox