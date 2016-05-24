import React from 'react'
import ProjectCover from  './ProjectCover'

import {Link} from 'react-router'

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
      {projects.map( (p, i)=> <Link key={i} to={`/project/${i}`}><ProjectCover  project={p}/></Link>)}
    </div>
  </div>
}

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return <Projects projects={this.props.projects}/>
  }
}

export default Dashboard