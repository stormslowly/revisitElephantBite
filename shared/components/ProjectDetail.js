import React from 'react'
import ProjectHeader from  './ProjectHeader'


class NewTodoForm extends React.Component {
  constructor(props, context) {
    super(props, context)
  }

  render() {
    let self = this

    function handleKeyPress(event) {
      if (event.key == 'Enter') {
        let task = self.refs.text.value.trim()
        if (task) {
          self.props.submit(task)
          self.refs.text.value = ''
        }
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
  var {todos, toggleById, deleteById} = props

  return <div>
    <ul style={{listStyle: 'none',padding:'0px'}}>
      {
        todos.map(function (todo, i) {
          var todoClass = todo.done ? 'todo done' : 'todo'
          return <li key={i}
                     onClick={()=>toggleById(i)}
                     className={todoClass}> {todo.task}

                    <span onClick={(e)=>{
                      e.stopPropagation()
                      deleteById(i)}
                    }
                          className="delete-button">
                      <img src="/images/delete_bite-icon@2x.png"
                           alt="delete-button"/>
                    </span>
          </li>
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
    var {project, index, submit, doneTodo, deleteTodo} = this.props
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
      <NewTodoForm submit={(task)=>submit(index,task)}/>
      <Todos todos={project.todos} toggleById={(todoIndex)=> doneTodo(index,todoIndex)}
             deleteById={(todoIndex)=> deleteTodo(index,todoIndex)}/>
    </div>
  }
}

module.exports = ProjectDetail
