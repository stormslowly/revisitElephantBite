import React from 'react'

var ProgressCircle = require('./ProgressCircle')

function ProjectCover(props) {
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

module.exports = ProjectCover;