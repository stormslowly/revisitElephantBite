import React from 'react'
import ProjectCover from  './ProjectCover'

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
      {projects.map((p, i)=> <ProjectCover key={i} project={p}/>)}
    </div>
  </div>
}

class Dashboard extends React.Component {
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
      {name: 'DIY3', tasks: 10, done: 9},
    ]
    return <Projects projects={projects}/>
  }
}

export default Dashboard