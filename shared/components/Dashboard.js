import React from 'react'
import ProjectCover from  './ProjectCover'

import {Link} from 'react-router'

function NewProject(props) {
  return <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
    <img style={{width:'70%',display:'flex',alignSelf:'center'}} src="/images/add_bite-icon@2x.png"/>
  </div>
}

function Projects(props) {
  var projectsStyle = {
    display: 'flex',
    margin: '10px',
    justifyContent: 'flex-start',
    flexWrap: 'wrap'
  }
  var style = {
    display: 'flex',
    margin: '10px',
    width: '200px',
    minHeight: '200px',
    color: '#D1D1D1',
    backgroundColor: '#FFF',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    border: '2px dashed'
  }

  var projects = props.projects

  return <div className='clearfix'>
    <div style={projectsStyle}>
      {projects.map((p, i)=> <Link key={i} to={`/project/${i}`}><ProjectCover project={p}/></Link>)}
      <Link style={style} to={'/project/new'}> <NewProject/> </Link>
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