import React from 'react';

import PropTypes from 'prop-types'
import '../stylesheets/star.scss'

const Star = ({ selected=false, clickHandler=f=>f }) =>
    <div className={(selected) ? "star selected" : "star"} onClick={clickHandler}>
    </div>

Star.propTypes = {
    selected: PropTypes.bool,
    onClick: PropTypes.func
}

export default Star;