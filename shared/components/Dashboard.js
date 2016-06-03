import React from 'react'
import ProjectCover from  './ProjectCover'
import Sortable   from 'sortablejs'
import {Link} from 'react-router'

function NewProject() {
  return <div style={{width:'100%',height:'100%',display:'flex',justifyContent:'center'}}>
    <img style={{width:'70%',display:'flex',alignSelf:'center'}} src="/images/add_bite-icon@2x.png"/>
  </div>
}

class Projects extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.sortableContainersDecorator = this.sortableContainersDecorator.bind(this)
  }

  shiftProject(fromIndex, toIndex) {
    if (fromIndex !== toIndex) {
      this.props.shiftProject(fromIndex, toIndex)
    }
  }

  sortableContainersDecorator(componentBackingInstance) {
    var self = this
    if (componentBackingInstance) {
      let options = {
        handle: ".projectHandle",
        onEnd: function (evt) {
          self.shiftProject(evt.oldIndex, evt.newIndex)
        }
      };
      Sortable.create(componentBackingInstance, options);
    }
  }

  render() {
    var projects = this.props.projects

    var removeProject = this.props.removeProject
    return <div className='clearfix'>
      <div className="projects" ref={this.sortableContainersDecorator}>
        {
          projects.map((p, i)=> <div key={p.name}  className="projectHandle">
              <Link to={`/project/${i}`}>
                <ProjectCover project={p} remove={ function(){removeProject(i)} }/>
              </Link>
            </div>
          )
        }
      </div>
        <Link className="new-project" to={'/project/new'}> <NewProject/> </Link>
    </div>
  }
}

class Dashboard extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    return <Projects projects={this.props.projects} removeProject={this.props.removeProject}
                     shiftProject={this.props.shiftProject}
    />
  }
}

export default Dashboard