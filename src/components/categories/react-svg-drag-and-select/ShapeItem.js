// ref: https://codepen.io/techniq/pen/yVEeOx

import React from 'react';
import PropTypes from 'prop-types';
import mapShapePropsByDiff from './utils/mapShapePropsByDiff';

const RAMDA = require('ramda');

// https://silentmatt.com/rectangle-intersection/
const checkIntersect = (A, rect, tagName) => {
  // if (tagName === 'text') return false;

  return (
    A.left < rect.left + rect.width && A.left + A.width > rect.left &&
    A.top < rect.top + rect.height && A.top + A.height > rect.top);
};

class ShapeItem extends React.PureComponent {
  static propTypes = {
    tagName: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isMovable: PropTypes.bool.isRequired,
    onPositionChange: PropTypes.func.isRequired,
    rect: PropTypes.shape({
      width: PropTypes.number.isRequired,
      left: PropTypes.number.isRequired,
      height: PropTypes.number.isRequired,
      top: PropTypes.number.isRequired,
    }).isRequired,
    onIntersectChange: PropTypes.func.isRequired,
    style: PropTypes.object,
  };

  constructor(props) {
    super(props);
    this.state = { 
        isIntersect: false 
    };
  }

  componentDidMount = () => {
    // TODO: WHY setTimeout? for Splunk
    setTimeout(() => {
      this.updatePosition();
      this.checkIntersect(this.props);
    }, 1000);
    document.addEventListener('scroll', this.updatePosition);
  };

  componentWillReceiveProps = nextProps => {
    if (!RAMDA.equals(nextProps.rect, this.props.rect)) {
      this.checkIntersect(nextProps);
    }
  };

  onMouseDown = e => {
    this.x = e.pageX;
    this.y = e.pageY;
    document.addEventListener('mousemove', this.onMouseMove);
    document.addEventListener('mouseup', this.onMouseUp);
  };

  onMouseMove = e => {
    // Diff calculate
    const xDiff = e.pageX - this.x;
    const yDiff = e.pageY - this.y;

    // Move
    this.props.onPositionChange({
      id: this.props.id,
      ...mapShapePropsByDiff(this.props, { x: xDiff, y: yDiff }),
    });

    // next
    this.x = e.pageX;
    this.y = e.pageY;
  };

  onMouseUp = () => {
    this.x = null;
    this.y = null;
    document.removeEventListener('mousemove', this.onMouseMove);
    document.removeEventListener('mouseup', this.onMouseUp);
    this.updatePosition();
  };

  onRef = ref => {
    this.component = ref;
  };

  componentWillUnMount = () => {
    document.removeEventListener('scroll', this.updatePosition);
  };

  updatePosition = () => {
    this.clientRect =
      this.component &&
      this.component.getBoundingClientRect &&
      this.component.getBoundingClientRect();
  };

  checkIntersect = props => {
    const isIntersect = checkIntersect(
      this.clientRect,
      props.rect,
      this.props.tagName,
    );
    this.setState({ isIntersect });
    this.props.onIntersectChange({ id: props.id, isIntersect });
  };

  render() {
    const {
      // omit
      rect,
      onPositionChange,
      onIntersectChange,
      tagName: BaseComponent,
      isMovable,
      style,
      ...otherProps
    } = this.props;

    const { onMouseDown, onRef } = this;
    const { isIntersect } = this.state;

    return (
      <BaseComponent
        ref={onRef}
        style={{
          ...style,
          cursor: isMovable ? 'move' : 'crosshair',
          userSelect: 'none',
        }}
        fillOpacity={isIntersect ? 0.3 : 1}
        onMouseDown={isMovable ? onMouseDown : null}
        {...otherProps}
      />
    );
  }
}

export default ShapeItem;