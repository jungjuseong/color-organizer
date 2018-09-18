import React from 'react';
import PropTypes from 'prop-types';
import ColorBox from './color-box';

import '../stylesheets/color-list.scss';

const ColorList = ({ colors=[], onRate=f=>f, onRemove=f=>f}) =>
    <div className="color-list">
        {(colors.length === 0) ? <p>목록이 없습니다</p> :
            colors.map(color =>
                <ColorBox key={color.id}
                       {...color}
                       onRate={(rating) => onRate(color.id, rating)}
                       onRemove={() => onRemove(color.id)} />
            )
        }
    </div>

ColorList.propTypes = {
    colors: PropTypes.array,
    onRate: PropTypes.func,
    onRemove: PropTypes.func
}

export default ColorList 