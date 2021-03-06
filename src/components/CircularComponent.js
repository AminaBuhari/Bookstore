import React from 'react';
import PropTypes from 'prop-types';

class CircularProgressBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sqSize, strokeWidth, percentage } = this.props;
    // Size of the enclosing square

    // SVG centers the stroke width on the radius, subtract out so circle fits in square
    const radius = (sqSize - strokeWidth) / 2;
    // Enclose cicle in a circumscribing square
    const viewBox = `0 0 ${sqSize} ${sqSize}`;
    // Arc length at 100% coverage is the circle circumference
    const dashArray = radius * Math.PI * 2;
    // Scale 100% coverage overlay with the actual percent
    const dashOffset = `${dashArray} - ${dashArray} * ${percentage} / 100`;

    return (
      <div id="svgicon">
        <svg
          width={sqSize}
          height={sqSize}
          viewBox={viewBox}
        >
          <circle
            className="circle-background"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
          />
          <circle
            className="circle-progress"
            cx={sqSize / 2}
            cy={sqSize / 2}
            r={radius}
            strokeWidth={`${strokeWidth}px`}
              // Start progress marker at 12 O'Clock
            transform={`rotate(-90 ${sqSize / 2} ${sqSize / 2})`}
            style={{
              strokeDasharray: dashArray,
              strokeDashoffset: dashOffset,
            }}
          />
          <text
            className="circle-text"
            x="50%"
            y="50%"
            dy=".3em"
            textAnchor="middle"
          />

        </svg>
        <div id="progress">
          <p className="percentage">
            {' '}
            {`${percentage}%`}
          </p>
          <p className="completed">Completed</p>
        </div>

      </div>
    );
  }
}

CircularProgressBar.defaultProps = {
  sqSize: 100,
  percentage: 100,
  strokeWidth: 5,
};

CircularProgressBar.propTypes = {

  sqsize: PropTypes.number.isRequired,
  percentage: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number.isRequired,

}.isRequired;
export default CircularProgressBar;
