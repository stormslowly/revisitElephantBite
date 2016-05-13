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


class Background extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var imgSrc = this.props.image
    let style = {
      height: '100%',
      width: '100%',
      overflow: 'scroll',
      backgroundImage: imgSrc
    }

    return <div style={style}>
      {this.props.children}
    </div>
  }
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

  var circle = {
    zIndex: '9999',
    position: 'absolute',
    margin: '10px'
  }
  if (progress > 0) {
    var circles = <g>
      <circle cx={startPoint.x} cy={startPoint.y} r="3" fill="#0D0"/>
      <circle cx={endPoint.x} cy={endPoint.y} r="3" fill="#0D0"/>
    </g>
  }
  return <svg height={width} width={height}>
    <path d={pathBack} stroke="#DDD" strokeWidth="2" fill="none"/>
    <path d={pathFront} stroke="#0D0" strokeWidth="6" fill="none"/>
    {circles}
  </svg>

}

function Project(props) {
  var style = {
    display: 'flex',
    margin: '10px',
    width: '200px',
    color: '#D1D1D1',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }

  var logo = {
    width: '140px',
    height: '140px'
  }

  var name = {
    color: '#888',
    marginTop: '5px',
    marginBottom: '0px'
  }

  var foot = {
    marginBottom: '20px'
  }

  var circleContainer = {
    zIndex: '9999',
    position: 'absolute',
    margin: '10px'
  }
  var project = props.project
  var progress = project.tasks > 0 ? project.done / project.tasks : 0

  return <div>
    <div style={circleContainer}>
      <ProgressCircle width={200} height={200} radius={80} progress={progress}/>
    </div>
    <div style={style}>
      <div style={{ display:'flex',width:'180px',height:'180px', alignItems: 'center',
    justifyContent:'center'}}>
        <img src={"/images/dm_large-1@2x.png"} style={logo}/>
      </div>
      <div style={name}>{project.name}</div>
      <hr style={{width:'50px',color:"#D1D1D1"}}/>
      <div style={foot}><span>{project.tasks-project.done }</span>/<span>{project.tasks }</span> tasks left</div>
    </div>
  </div>
}

function Projects(props) {

  var projectsStyle = {
    display: 'flex',
    margin: '10px',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
  var projects = props.projects

  return <div className='clearfix'>
    <div style={projectsStyle}>
      {projects.map((p, i)=> <Project key={i} project={p}/>)}
    </div>
  </div>
}

class Hello extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var projects = [
      {name: 'DIY2', tasks: 10, done: 5},
      {name: 'DIY2', tasks: 10, done: 0},
      {name: 'DIY2', tasks: 10, done: 3},
      {name: 'DIY2', tasks: 10, done: 4},
      {name: 'DIY2', tasks: 10, done: 2},
      {name: 'DIY2', tasks: 10, done: 9},
    ]
    return <Projects projects={projects}/>
  }
}

export default Hello