import React from 'react'
import ProjectHeader from './ProjectHeader'

class ProjectForm extends React.Component {
  constructor(props, context) {
    super(props, context)
    this.handleKeyPress = this.handleKeyPress.bind(this)
  }

  handleKeyPress(event) {
    if (event.key == 'Enter') {
      var trimValue = this.refs.name.value.trim();
      if (trimValue) {
        this.props.submit(trimValue)
        console.log("ProjectForm.js 15 handleKeyPress",this.props);
        this.props.history.push('/')
      }
    }
  }


  render() {
    var project = {name: '', tasks: 0, done: 0}
    return <ProjectHeader project={project}>
      <input className="projectName-input"  onKeyPress={this.handleKeyPress} placeholder="input project name" type="text" ref="name"/>
    </ProjectHeader>

  }
}

export default ProjectForm