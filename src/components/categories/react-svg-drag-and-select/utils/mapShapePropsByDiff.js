const RAMDA = require('ramda');

// (props, { x, y }) => nextProps
const mapShapePropsByDiff = (props, diff) =>
  RAMDA.cond([
    [
      RAMDA.equals('circle'),
      RAMDA.always({
        cx: props.cx + diff.x,
        cy: props.cy + diff.y,
      }),
    ],
    [
      RAMDA.equals('polygon'),
      () => ({
        points: props.points
          .split(' ')
          .map(point => {
            const [x, y] = point.split(',');
            return `${Number(x) + diff.x},${Number(y) + diff.y}`;
          })
          .join(' '),
      }),
    ],
    [
      RAMDA.T,
      RAMDA.always({
        x: props.x + diff.x,
        y: props.y + diff.y,
      }),
    ],
  ])(props.tagName);

export default mapShapePropsByDiff;