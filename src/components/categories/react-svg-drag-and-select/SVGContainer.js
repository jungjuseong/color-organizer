import React from 'react';
import PropTypes from 'prop-types';

import ShapeItem from './ShapeItem';

const R = require('ramda');

const INIT_STATE = {
  x: 0,
  y: 0,
  width: 0,
  height: 0,
  left: 0,
  top: 0,
};

class SVGContainer extends React.PureComponent {
  static propTypes = {
    // SVG
    width: PropTypes.number.isRequired,
    height: PropTypes.number.isRequired,
    style: PropTypes.object.isRequired,

    items: PropTypes.array.isRequired,
    onSelectChange: PropTypes.func.isRequired,
    onItemsChange: PropTypes.func.isRequired,
    isMovable: PropTypes.bool.isRequired,
    isSelectable: PropTypes.bool.isRequired,
  };
  state = INIT_STATE;

  componentWillReceiveProps(nextProps) {
    if (!nextProps.isSelectable) {
      this.setState(INIT_STATE);
    }
  }

  onMouseDown = e => {
    const { left, top } = this.svg.getBoundingClientRect();
    const { clientX, clientY } = e;

    this.setState({
      x: clientX - left, 
      y: clientY - top,
      width: 0, height: 0,
      left: clientX, 
      top: clientY,
    });

    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };

  onMouseUp = () => {
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);

    const intersectIds = R.pipe(R.pickBy(val => !!val), R.keys)(
      this.state.isIntersect,
    );
    const selected = R.filter(item => R.contains(item.id, intersectIds))(
      this.props.items,
    );
    this.props.onSelectChange(selected);
  };

  onPositionChange = ({ id, ...others }) => {
    const { onItemsChange, items } = this.props;
    const updateXY = object => ({
      ...object,
      ...others,
    });
    const index = R.findIndex(R.propEq('id', id))(items);

    onItemsChange(R.adjust(updateXY, index)(items));
  };

  onIntersectChange = ({ id, isIntersect }) => {
    this.setState(state => ({
      isIntersect: {
        ...state.isIntersect,
        [id]: isIntersect,
      },
    }));
  };

  onRef = ref => {
    this.svg = ref;
  };

  render() {
    const {
      onItemsChange,
      onSelectChange,
      isSelectable,
      isMovable,
      items,
      style,
      ...otherProps
    } = this.props;
    const { left, top, width, height } = this.state;
    const { onMouseDown, onPositionChange, onIntersectChange, onRef } = this;

    return (
      <div>
      <svg
        ref={onRef}
        {...otherProps}
        style={{
          ...style,
          cursor: isSelectable ? 'crosshair' : 'auto',
        }}
        onMouseDown={isSelectable ? onMouseDown : null}
      >
        {items.map(({ tagName, id, ...others }) => (
          <ShapeItem
            id={id}
            key={id}
            tagName={tagName}
            isMovable={isMovable}
            onPositionChange={onPositionChange}
            {...others}
            rect={{ left, top, width, height }}
            onIntersectChange={onIntersectChange}
          />
        ))}
      </svg>
      </div>
    );
  }
}

export default SVGContainer;