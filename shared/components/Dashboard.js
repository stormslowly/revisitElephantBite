import React from 'react'
import ProjectCover from  './ProjectCover'

import {Link} from 'react-router'

function NewProject() {
  return <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
    <img style={{width:'70%',display:'flex',alignSelf:'center'}} src="/images/add_bite-icon@2x.png"/>
  </div>
}

function Projects(props) {
  var projects = props.projects
  return <div className='clearfix'>
    <div className="projects" >
      {projects.map((p, i)=> <Link key={i} to={`/project/${i}`}>
        <ProjectCover project={p} remove={ function(){props.removeProject(i)} }/></Link>)
      }
      <Link className="new-project" to={'/project/new'}> <NewProject/> </Link>
    </div>
  </div>
}


class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context)
  }
  render() {
    return <Projects projects={this.props.projects}  removeProject={this.props.removeProject}/>
  }
}

export default Dashboard