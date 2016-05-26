import React from 'react'
import ProjectHeader from  './ProjectHeader'


class NewTodoForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {

    var container = {
      marginTop: '20px',
      display: 'flex',
      width: '100%',
      backgroundColor: '#E2DDDD',
      alignItems: 'center',
      border: '2px dashed #aaa'
    }


    var form = {
      width: '100%', height: '60px', lineHeight: '1.1', fontSize: '60px',
      border: '0px', marginLeft: '10px',
      backgroundColor: '#E2DDDD'
    }

    let self = this

    function handleKeyPress(event) {
      if (event.key == 'Enter') {
        let task = self.refs.text.value
        self.props.submit(task)
        self.refs.text.value = ''
      }
    }

    return <div className="project-container">
      <span style={{marginLeft:'10px'}}> <img src="/images/add_bite-icon@2x.png" alt="+"/></span>
      <input className="task-form" ref="text" type="text" placeholder="And A Todo" onKeyPress={handleKeyPress}>
      </input>
    </div>
  }
}

function Todos(props) {
  var {todos} = props

  return <div>
    <ul style={{listStyle: 'none',padding:'0px'}}>
      {
        todos.map(function (todo, i) {
          var todoClass = todo.done ? 'todo done' : 'todo'

          return <li key={i} className={todoClass}>{todo.task}</li>
        })
      }
    </ul>
  </div>
}


class ProjectDetail extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    var {project, submit} = this.props
    var info = {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }


    return <div>
      <ProjectHeader project={project}>
        <div style={info}>
          <h1 style={{color:'#999',marginTop:'0px',marginBottom:'10px'}}>{project.name}</h1>
          <div>{project.done}/{project.tasks} tasks left</div>
        </div>
      </ProjectHeader>
      <NewTodoForm submit={(task)=>submit(project,task)}/>
      <Todos todos={project.todos}/>
    </div>
  }
}

module.exports = ProjectDetail
