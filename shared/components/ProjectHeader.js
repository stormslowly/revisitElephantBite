import React from 'react'
import ProgressCircle  from '../components/ProgressCircle'


function ProjectHeader(props) {
  var {project} =  props
  var style = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#FFF',
    height: '150px',
    marginTop: '20px',
    color: '#d1d1d1'
  }

  var logo = {
    width: '110px',
    height: '110px'
  }

  var circle = {
    position: 'absolute',
    height: '150px'
  }
  var imageContainer = {
    width: '150px',
    height: '150px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'

  }

  var progress = 0
  if (project.tasks > 0) {
    progress = project.done / project.tasks
  }


  return <div style={style}>
    <div style={circle}>
      <ProgressCircle style={circle} width={150} height={150} radius={60} progress={progress}/>
    </div>
    <div style={imageContainer}>
      <img style={logo} src="/images/dm_large-1@2x.png" alt="logo"/>
    </div>
    {props.children}
  </div>
}

export default ProjectHeader
