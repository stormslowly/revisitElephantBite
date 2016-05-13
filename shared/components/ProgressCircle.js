import React from 'react'

function polarToCartesian(center, radius, angleInDegrees) {

  var centerX = center.x, centerY= center.y

  var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;

  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
}

function describeArc(center, radius, startAngle, endAngle) {
  var {x,y} = center
  var start = polarToCartesian(center, radius, endAngle);
  var end = polarToCartesian(center, radius, startAngle);

  var arcSweep = endAngle - startAngle <= 180 ? "0" : "1";

  var d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, arcSweep, 0, end.x, end.y
  ].join(" ");

  return d;
}


function ProgressCircle(props) {
  var minAngle = -160
  var maxAngle = 160

  var {width, height, radius, progress} = props

  progress = progress || 0
  var endAngle = minAngle + (maxAngle - minAngle) * progress

  var center = {x: width / 2, y: height / 2};
  var pathBack = describeArc(center, radius, minAngle, maxAngle)
  var pathFront = describeArc(center, radius, minAngle, endAngle)

  var startPoint = polarToCartesian(center, radius, minAngle)
  var endPoint = polarToCartesian(center, radius, endAngle)

  if (progress > 0) {
    var circles = <g>
      <circle cx={startPoint.x} cy={startPoint.y} r="3" fill="#9AE0B2"/>
      <circle cx={endPoint.x} cy={endPoint.y} r="3" fill="#9AE0B2"/>
    </g>
  }
  return <svg height={width} width={height}>
    <path d={pathBack} stroke="#DDD" strokeWidth="2" fill="none"/>
    <path d={pathFront} stroke="#9AE0B2" strokeWidth="6" fill="none"/>
    {circles}
  </svg>
}

module.exports = ProgressCircle;
